<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="orange darken-4"
          dark
          v-on="on"
        >
          <v-icon dark>mdi-plus</v-icon>Add Prediction
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        <v-icon>mdi-account</v-icon>
          My Prediction
        </v-card-title>
        <v-card-text>
          <v-form  ref="form" class="mt-3">
          <v-row>
              <v-col cols="12" >
                <v-combobox
          v-model="star"
          :items="items"
          prepend-icon="mdi-star"
          chips
           outlined
          label="Zodiac Sign"
          shaped
        ></v-combobox>
            </v-col>
          </v-row>
          <v-row class="mt-n9 mb-n9">
            <v-col cols="12" >
                <v-textarea
                label="Prediction"
                rows="7"
                prepend-icon="mdi-nintendo-switch"
                v-model="content"
                :rules="inputRules"
                 outlined
               shaped :clearable="clearable"
                ></v-textarea>
            </v-col>
          </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple darken-1" text  @click="dialog = false" dark>Close</v-btn>
          <v-btn color="purple darken-1" text @click="submit" dark   :loading="loading">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import db from '@/fb'
  export default {
    
    data () {
      return {
        dialog: false,
        star: ['Aries'],
        items: [
          'Aries',
          'Taurus',
          'Gemini',
          'Cancer',
          'Leo',
          'Virgo',
          'Libra',
          'Scorpio',
          'Sagittarius',
          'Capricorn',
          'Aquarius',
          'Pisces',
        ],
        content:'',
        clearable : true,
        inputRules: [
          v => !!v || 'This field is required',
          v => !!v && (v.length ? v.length : 0) >= 50 || 'Minimum length is 50 characters'
        ],
       loading: false
      }
    },
    methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        var starId;
        switch(this.star)
        {
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
        db.collection('stars').doc(starId).update({content: this.content}).then(() => {
          this.loading = false
          this.dialog = false
          console.log("Project added")
          this.$emit('projectAdded')
        })

       /* db.collection('stars').add(star).then(() => {
          this.loading = false
          this.dialog = false
          console.log("Project added")
          this.$emit('projectAdded')
          
        })*/
      }
    }
    }
  }
</script>