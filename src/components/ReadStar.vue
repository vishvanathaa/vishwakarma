<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on }">
       
        <v-btn
        text
        color="deep-purple accent-4"
         v-on="on"
      >
          Read
        </v-btn>
      </template>

      <v-card>
        <v-list-item>
      <v-list-item-avatar color="grey lighten-2" v-html="StarId[0].avatar" dark></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{StarId[0].starname}}</v-list-item-title>
        <v-list-item-subtitle>{{StarId[0].role}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
        <v-card-text>
            {{this.StarId[0].content}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple darken-1" text  @click="dialog = false" dark>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
    export default{
    props: [
        'StarId'
    ],
    data () {
      return {
        dialog: false,
      }
    },
    created : function(){
        console.log(this.StarId + " vishva");
    }
   }   
</script>