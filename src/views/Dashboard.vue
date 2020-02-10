<template>
  <div class="team">
    <v-container class="my-2">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="star in stars" :key="star.id">
    <v-card
    class="mx-auto text-xs-center ma-3 mr-3" 
    >
    <v-list-item>
      <v-list-item-avatar color="grey lighten-2" v-html="star.avatar" dark></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{star.name}} </v-list-item-title>
        <v-list-item-subtitle>{{star.role}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      {{star.content.substring(0,280)+"...."}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Share
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
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
import db from '@/fb'
export default {
  name: 'Dashboard',
  components: {
  },
   data() {
    return {
      stars : []
    }
  },
  created()
  {
     this.fetchdata();
  },
  watch: {
    // call again the method if the route changes
    //'$route': 'fetchdata'
    '$route.path': 'getData'
  },
  
  methods : {
    fetchdata(){
      db.collection('stars').onSnapshot(res =>{
       const changes = res.docChanges()
       changes.forEach(change => {
         if(change.type === 'added') {
          this.stars.push({
            ...change.doc.data(),
            id:change.doc.id
          })
         }
       });
    }
    );
    }
  }
}
</script>
