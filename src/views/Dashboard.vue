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
        <v-flex xs12 sm6 md4 lg3 v-for="star in stars" :key="star.id">
    <v-card
    class="mx-auto text-xs-center mb-3 mr-1" 
    >
    <v-list-item>
      <v-list-item-avatar color="grey lighten-2" v-html="star.avatar" dark></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{star.starname}}</v-list-item-title>
        <v-list-item-subtitle>{{star.role}}
         
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      {{star.content.substring(0,280)+"...."}}
      <v-rating
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      small
      :length="length"
    ></v-rating>
    
    </v-card-text>
    <v-card-actions class="mt-n5">
      <ReadStar :StarId = "filteredStar(star.id)"/>
      <v-btn
        icon
        color="blue"
        href="https://facebook.com/sharer/sharer.php?u=https://vishvanatha-acharya.herokuapp.com" target="_blank"
      >
         <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <Comments :zodiacSign='star.name'/>
      <v-btn icon @click="incrementLikeCount">
        <v-icon :color="likecount > 0 ? likeColor : 'grey'">mdi-heart</v-icon>
        <v-badge color="white">{{likecount}}</v-badge>
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
import ReadStar from '@/components/ReadStar'
import Comments from '@/components/Comments'
export default {
  name: 'Dashboard',
  components: {
    ReadStar,
    Comments
  },
   data() {
    return {
      stars : [],
       rating: 3,
       length: 4,
       likecount : 1,
       likeColor : 'grey',
       isLoading : true
    }
  },
  created()
  {
     this.fetchdata();
  },
  watch: {
    // call again the method if the route changes
    //'$route': 'fetchdata'
    '$route.path': 'fetchdata'
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
       this.isLoading = false;
    }
    );
    },
    incrementLikeCount : function(){
        this.likecount++;
        if(this.likecount > 0)
        {
          this.likeColor = 'pink';
        }

    },
    filteredStar(id) {
     return this.stars.filter(c => c.id.indexOf(id) > -1);
   }
  }
}
</script>
