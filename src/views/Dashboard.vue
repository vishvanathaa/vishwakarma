<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-progress-circular
          :size="70"
          :width="7"
          :value="100"
          color="purple"
          indeterminate
          v-show="isLoading"
        ></v-progress-circular>
        <v-flex xs12 sm6 md4 lg3 v-for="(star,index) in stars" :key="star.id">
          <v-card class="mx-auto text-xs-center mb-3 mr-1">
            <v-list-item>
              <v-list-item-avatar color="grey lighten-2" v-html="star.avatar" dark></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{star.starname}}</v-list-item-title>
                <v-list-item-subtitle>{{star.role}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>
              {{star.content.substring(0,275)+"...."}}
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                small
                :length="length"
              ></v-rating>
            </v-card-text>
            <v-card-actions class="mt-n5">
              <ReadStar :StarId="filteredStar(star.id)" />
              <v-btn
                icon
                color="blue"
                href="https://facebook.com/sharer/sharer.php?u=https://vishvanatha-acharya.herokuapp.com"
                target="_blank"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <Comments :zodiacSign="star.name" />
              <v-btn icon @click="incrementLikeCount(star.name)">
                <v-icon :color="NumberOfLike[index] > 0 ? 'pink' : 'grey'">mdi-heart</v-icon>
                <v-badge color="white">{{ NumberOfLike[index] }}</v-badge>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import db from "@/fb";
import ReadStar from "@/components/ReadStar";
import Comments from "@/components/Comments";
export default {
  name: "Dashboard",
  components: {
    ReadStar,
    Comments
  },
  data() {
    return {
      stars: [],
      rating: 3,
      length: 4,
      isLoading: true,
      NumberOfLike: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      clicked: true
    };
  },
  created() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      db.collection("stars").onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.stars.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
        for (var key in this.stars) {
          this.$set(this.NumberOfLike, key, this.stars[key].likecount);
        }
        this.isLoading = false;
      });
    },
    incrementLikeCount: function(starName) {
      switch (starName) {
        case "Aquarius":
          if (this.clicked) {
            this.NumberOfLike[0]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[0]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 0, this.NumberOfLike[0]);
          break;
        case "Cancer":
          if (this.clicked) {
            this.NumberOfLike[1]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[1]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 1, this.NumberOfLike[1]);
          break;
        case "Capricorn":
          if (this.clicked) {
            this.NumberOfLike[2]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[2]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 2, this.NumberOfLike[2]);
          break;
        case "Scorpio":
          if (this.clicked) {
            this.NumberOfLike[3]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[3]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 3, this.NumberOfLike[3]);
          break;
        case "Sagittarius":
          if (this.clicked) {
            this.NumberOfLike[4]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[4]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 4, this.NumberOfLike[4]);
          break;
        case "Taurus":
          if (this.clicked) {
            this.NumberOfLike[5]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[5]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 5, this.NumberOfLike[5]);
          break;
        case "Pisces":
          if (this.clicked) {
            this.NumberOfLike[6]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[6]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 6, this.NumberOfLike[6]);
          break;
        case "Libra":
          if (this.clicked) {
            this.NumberOfLike[7]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[7]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 7, this.NumberOfLike[7]);
          break;
        case "Leo":
          if (this.clicked) {
            this.NumberOfLike[8]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[8]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 8, this.NumberOfLike[8]);
          break;
        case "Aries":
          if (this.clicked) {
            this.NumberOfLike[9]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[9]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 9, this.NumberOfLike[9]);
          break;
        case "Virgo":
          if (this.clicked) {
            this.NumberOfLike[10]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[10]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 10, this.NumberOfLike[10]);
          break;
        case "Gemini":
          if (this.clicked) {
            this.NumberOfLike[11]++;
            this.clicked = false;
          } else {
            this.NumberOfLike[11]--;
            this.clicked = true;
          }
          this.$set(this.NumberOfLike, 11, this.NumberOfLike[11]);
          break;
        default:
          this.NumberOfLike[0]++;
          break;
      }
      
    },
    filteredStar: function(id) {
      return this.stars.filter(c => c.id.indexOf(id) > -1);
    },
    updateLikeCount : function(id,index){
      db.collection("stars")
      .doc(id)
      .update({ likecount: this.NumberOfLike[index] })
      .then(() => {
      });
    }
  },
  destroyed: function() {
    this.updateLikeCount("Fyi9jXVQ4n4c1Pmja8dk",0);
    this.updateLikeCount("GBo3TivEWpRrVLc7E6nv",1);
    this.updateLikeCount("IjnRUAfKaeuemtwhC7aj",2);
    this.updateLikeCount("K3U4E2rh6IIWEqdnG9ef",3);
    this.updateLikeCount("KiuFYl98Na4n4vE8yjko",4);
    this.updateLikeCount("TJrWE3hjrcqGYbewPt3b",5);
    this.updateLikeCount("UNlcoPEvfaYC2xF2ghpm",6);
    this.updateLikeCount("Vgd1nMblo95kbBfVSuQg",7);
    this.updateLikeCount("apgH2dzOzfFPpm8LlaQr",8);
    this.updateLikeCount("as8gKX5i3gThQxpu4iNq",9);
    this.updateLikeCount("gwuQLVSTysXziUuX8KKs",10);
    this.updateLikeCount("qLx6hf4hgywrKUAlSrvT",11);
  }
};
</script>
