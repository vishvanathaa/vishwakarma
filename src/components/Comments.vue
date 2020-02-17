<template>

  <div class="ml-n8">
      
    <v-dialog
      v-model="dialog"
      width="600"
      
      
    >
    <template v-slot:activator="{ on }">
       
        <v-btn
        
        
         v-on="on" text color="grey" 
      >
          <v-icon>mdi-comment</v-icon>

        </v-btn>
      </template>
      
      <v-card
    class = "mx-auto"
    
  >
 <v-card-title
          class="headline mb-n12"
          primary-title 
        >
        <div class="d-flex flex-row">
          <div class="overline" color="purple darken-1">
          <v-icon>mdi-comment</v-icon>
          COMMENTS</div>
    </div>
    <v-col class="text-right">
         <v-btn color="purple darken-1" icon  @click="dialog = false" dark><v-icon>mdi-close</v-icon></v-btn>
    </v-col>
        
        </v-card-title>
       
     
  <v-card-text class="mt-n12" >
     
     <v-list  class="mt-0 ml-0">
      <template v-for="(item, index) in items" class="mt-0 ml-0">
        

        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset" 
        ></v-divider>

        <v-list-item
          v-else
          :key="item.index"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-row>
        <v-col cols="12" sm="12" md="12">
          <div class="d-flex flex-row emoji-12" >
          <v-text-field
                  placeholder="Write comment here..."
                  filled
                  rounded
                  dense
                v-model="comment">
                <template slot="append"><div v-html='emoji'/><a @click="clearContent" class="ml-2" >x</a> </template>
                </v-text-field>
              <v-btn icon @click="pushComments()" >
              <v-icon >mdi-send</v-icon></v-btn>
          </div>
        </v-col>
    </v-row>
    <v-row style="border: 0px solid grey" class="mt-n6">
      <v-col cols="6" >
        <div class="d-flex flex-column emoji-12" >
          <div class="d-flex flex-row emoji-12"   >
            <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#9760;')" color="orange darken-5"  >&#9760;</v-btn>
              <v-btn text @click="addEmoji('&#127769;')" color="orange darken-5"  >&#127769;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
            </v-btn-toggle>
          </div>
          <div class="d-flex flex-row emoji-12"   >
             <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128038;')" color="orange darken-5"  >&#128038;</v-btn>
              <v-btn text @click="addEmoji('&#128024;')" color="orange darken-5"  >&#128024;</v-btn>
              <v-btn text @click="addEmoji('&#128059;')" color="orange darken-5"  >&#128059;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128076;')" color="orange darken-5" >&#128076;</v-btn>
              <v-btn text @click="addEmoji('&#128151;')" color="orange darken-5" >&#128151;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
            </v-btn-toggle>
          </div>
          <div class="d-flex flex-row emoji-12"   >
             <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128149;')" color="orange darken-5"  >&#128149;</v-btn>
              <v-btn text @click="addEmoji('&#128014;')" color="orange darken-5"  >&#128014;</v-btn>
              <v-btn text @click="addEmoji('&#128018;')" color="orange darken-5"  >&#128018;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5" >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
            </v-btn-toggle>
          </div>
          
        </div>
      </v-col>
    </v-row>
  </v-card-text>
  <v-card-actions>
      <v-btn color="purple darken-1" text  @click="dialog = false" dark>Close</v-btn>
  </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { header: 'Comments' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Vishvanatha Achary',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">12h</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
       dialog: false,
       comment : '',
       emoji : ''
    }),
    methods: {
      pushComments : function()
      {
        this.items.push({
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Guest User',
          subtitle: this.comment + ' ' + this.emoji,
        }
        )
        
     },
     addEmoji : function(code)
      {
        this.emoji = this.emoji + code;
        
     },
     clearContent : function()
     {
       this.comment = '';
       this.emoji = '';
     }
    },
    computed: {
    // a computed getter
    combinedText: function () {
      // `this` points to the vm instance
      return this.comment + ' ' + this.emoji;
    }
  }
  }
</script>
<style scoped>
  .emoji-12
  {
    font-size:0px;
  }
</style>