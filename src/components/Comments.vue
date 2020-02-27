<template>
  <div>
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text color="grey">
          <v-icon>mdi-comment</v-icon>
        </v-btn>
      </template>

      <v-card class="mx-auto">
        <v-card-text>
          <template>
            <v-list three-line>
              <v-card-actions>
                <span class="ml-2">COMMENTS&nbsp;({{zodiacSign}})</span>
                <v-spacer></v-spacer>
                <v-btn color="purple darken-1" text @click="dialog = false" dark>Close</v-btn>
              </v-card-actions>

              <template v-for="(item, index) in items">
                <v-list-item v-if="item.Name" :key="index" class="mb-n1">
                  <v-list-item-avatar color="grey lighten-2">
                    <v-icon>mdi-account-heart</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="item.Name +`<span class= 'caption grey--text text--lighten-1' >` +' '+ item.EntryTime +'</span>'"
                    ></v-list-item-title>
                    <v-chip class="pa-5" label color="gray lighten-4">
                      <v-list-item-subtitle v-html="item.Comment"></v-list-item-subtitle>
                    </v-chip>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>

            <v-row class="ml-1">
              <v-col cols="12" sm="12" md="12">
                <v-form ref="form">
                  <div class="d-flex flex-row mb-n6 mr-7 mt-n6 ml-n3">
                    <v-col cols="12" sm="12">
                      <v-col cols="12" sm="12">
                        <v-text-field
                          label="Enter Name"
                          :rules="inputRules"
                          v-model="name"
                          
                          prepend-inner-icon="mdi-account"
                        ></v-text-field>
                      </v-col>
                    </v-col>
                  </div>
                  <div class="d-flex flex-row emoji-12">
                    <v-text-field
                      placeholder="Write comment here..."
                      filled
                      rounded
                      dense
                      v-model="comment"
                      :rules="inputRules"
                    >
                      <template slot="append">
                        <div v-html="emoji" class="d-flex flex-row" />
                        <a @click="clearContent" class="ml-2">x</a>
                      </template>
                    </v-text-field>
                    <v-btn icon @click="addComments" :loading="loading">
                      <v-icon>mdi-send</v-icon>
                    </v-btn>
                  </div>
                </v-form>
              </v-col>
            </v-row>
            <v-row style="border: 0px solid grey" class="mt-n5 ml-1">
              <v-col cols="12">
                <div class="d-flex flex-column emoji-12">
                  <div class="d-flex flex-row emoji-12">
                    <v-btn-toggle>
                      <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5">&#128548;</v-btn>
                      <v-btn text @click="addEmoji('&#128068;')" color="orange darken-5">&#128068;</v-btn>
                      <v-btn text @click="addEmoji('&#127769;')" color="orange darken-5">&#127769;</v-btn>
                      <v-btn text @click="addEmoji('&#128151;')" color="orange darken-5">&#128151;</v-btn>
                      <v-btn text @click="addEmoji('&#128400;')" color="orange darken-5">&#128400;</v-btn>
                    </v-btn-toggle>
                  </div>
                  <div class="d-flex flex-row emoji-12">
                    <v-btn-toggle>
                      <v-btn text @click="addEmoji('&#128038;')" color="orange darken-5">&#128038;</v-btn>
                      <v-btn text @click="addEmoji('&#128024;')" color="orange darken-5">&#128024;</v-btn>
                      <v-btn text @click="addEmoji('&#128059;')" color="orange darken-5">&#128059;</v-btn>
                      <v-btn text @click="addEmoji('&#128514;')" color="orange darken-5">&#128514;</v-btn>
                      <v-btn text @click="addEmoji('&#128076;')" color="orange darken-5">&#128076;</v-btn>
                    </v-btn-toggle>
                  </div>
                  <div class="d-flex flex-row emoji-12">
                    <v-btn-toggle>
                      <v-btn text @click="addEmoji('&#128149;')" color="orange darken-5">&#128149;</v-btn>
                      <v-btn text @click="addEmoji('&#128014;')" color="orange darken-5">&#128014;</v-btn>
                      <v-btn text @click="addEmoji('&#128512;')" color="orange darken-5">&#128512;</v-btn>
                      <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5">&#127939;</v-btn>
                      <v-btn text @click="addEmoji('&#128525;')" color="orange darken-5">&#128525;</v-btn>
                    </v-btn-toggle>
                  </div>
                </div>
              </v-col>
            </v-row>
          </template>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import db from "@/fb";
export default {
  props: ["zodiacSign"],
  data: () => ({
    items: [],
    dialog: false,
    comment: "",
    emoji: "",
    name: "",
    inputRules: [v => !!v || "This field is required"],
    loading: false
  }),
  methods: {
    pushComments: function() {
      this.items.push({
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Guest User",
        subtitle: this.comment + " " + this.emoji
      });
    },
    fetchdata() {
      db.collection("Comments")
        .where("StarId", "==", this.getStarId())
        //.orderBy('EntryTime')
        .onSnapshot(res => {
          const changes = res.docChanges();
          changes.forEach(change => {
            if (change.type === "added") {
              this.items.push({
                ...change.doc.data(),
                id: change.doc.id
              });
            }
          });
        })
        
        ;
    },
    addComments: function() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        var comment = {
          StarId: this.getStarId(),
          Name: this.name,
          Comment: this.comment + " " + this.emoji,
          EntryTime: this.getEntryTime()
        };
        db.collection("Comments")
          .add(comment)
          .then(() => {
            this.loading = false;
            this.comment = "";
            this.name = "";
          });
      }
    },
    addEmoji: function(code) {
      this.emoji = this.emoji + code;
    },
    getStarId : function()
    {
      var starId;
        switch (this.zodiacSign) {
          case "Aquarius":
            starId = "Fyi9jXVQ4n4c1Pmja8dk";
            break;
          case "Cancer":
            starId = "GBo3TivEWpRrVLc7E6nv";
            break;
          case "Capricorn":
            starId = "IjnRUAfKaeuemtwhC7aj";
            break;
          case "Scorpio":
            starId = "K3U4E2rh6IIWEqdnG9ef";
            break;
          case "Sagittarius":
            starId = "KiuFYl98Na4n4vE8yjko";
            break;
          case "Leo":
            starId = "apgH2dzOzfFPpm8LlaQr";
            break;
          case "Taurus":
            starId = "TJrWE3hjrcqGYbewPt3b";
            break;
          case "Aries":
            starId = "as8gKX5i3gThQxpu4iNq";
            break;
          case "Libra":
            starId = "Vgd1nMblo95kbBfVSuQg";
            break;
          case "Pisces":
            starId = "UNlcoPEvfaYC2xF2ghpm";
            break;
          case "Gemini":
            starId = "qLx6hf4hgywrKUAlSrvT";
            break;
          case "Virgo":
            starId = "gwuQLVSTysXziUuX8KKs";
            break;
          default:
            starId = "as8gKX5i3gThQxpu4iNq";
            break;
        }
        return starId;
    },
    clearContent: function() {
      this.comment = "";
      this.emoji = "";
    },
    getEntryTime: function() {
      var currentDate = new Date();
      var year = currentDate.getFullYear(),
        month = currentDate.getMonth() + 1, // months are zero indexed
        day = currentDate.getDate(),
        hour = currentDate.getHours(),
        minute = currentDate.getMinutes(),
        hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
        minuteFormatted = minute < 10 ? "0" + minute : minute,
        morning = hour < 12 ? " AM" : " PM";
      var currentDateWithFormat =
        month +
        "/" +
        day +
        "/" +
        year +
        " " +
        hourFormatted +
        ":" +
        minuteFormatted +
        morning;
      return currentDateWithFormat;
    }
  },
  created: function() {
    this.fetchdata();
    this.comment = "";
    this.name = "";
  },
  computed: {
    // a computed getter
    combinedText: function() {
      // `this` points to the vm instance
      return this.comment + " " + this.emoji;
    }
  }
};
</script>
<style scoped>
.emoji-12 {
  font-size: 8px;
}
.v-ctm-subtitle {
  font-size: 0.75rem;
}
.v-ctm-title {
  font-size: 0.85rem;
}
.custom-text-field.v-text-field.v-text-field--enclosed .v-input__slot {
  padding: 0;
}
</style>