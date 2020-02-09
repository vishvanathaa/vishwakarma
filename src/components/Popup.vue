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
          My Prediction
        </v-card-title>

        <v-card-text>
          <v-row>
              <v-col cols="12">
                <v-combobox
          v-model="select"
          :items="items"
          
          prepend-icon="mdi-star"
          chips
        ></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" >
                <v-textarea
                
                label="Enter your prediction here (use <br> for next line)"
                rows="4"
                prepend-icon="mdi-book"
                v-model="prediction"
                ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        select: ['Aries'],
        items: [
          'Aries',
          'Taurus',
          'Gemini',
          'Cancer',
          'Leo',
          'Virgo',
          'Libra',
          'Scorpio',
          'Sagattarius',
          'Capricorn',
          'Aquarius',
          'Pisces',
        ],
        prediction:''
      }
    },
  }
</script>