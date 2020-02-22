<template>

  <div> 
      
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
   
    class="mx-auto"
  >
    <v-card-text>
    <template>
    <v-list three-line >
      <template v-for="(item, index) in items">
        <v-card-actions
          v-if="item.header"
          :key="item.header"
         
        >
        <span class="ml-2">COMMENTS</span>
        <v-spacer></v-spacer>
        <v-btn color="purple darken-1" text  @click="dialog = false" dark>Close</v-btn></v-card-actions>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        
        >
          <v-list-item-avatar color="grey lighten-2">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-row class="ml-1">
        <v-col cols="12" sm="12" md="12">
          <div class="d-flex flex-row emoji-12" >
          <v-text-field
                  placeholder="Write comment here..."
                  filled
                  rounded
                  dense
                v-model="comment">
                <template slot="append"><div v-html='emoji' class="d-flex flex-row"/><a @click="clearContent" class="ml-2" >x</a> </template>
                </v-text-field>
              <v-btn icon @click="pushComments()" >
              <v-icon >mdi-send</v-icon></v-btn>
          </div>
        </v-col>
    </v-row>
    <v-row style="border: 0px solid grey" class="mt-n5 ml-1">
      <v-col cols="12" >
        <div class="d-flex flex-column emoji-12" >
          <div class="d-flex flex-row emoji-12"   >
            <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128548;')" color="orange darken-5"  >&#128548;</v-btn>
              <v-btn text @click="addEmoji('&#128068;')" color="orange darken-5"  >&#128068;</v-btn>
              <v-btn text @click="addEmoji('&#127769;')" color="orange darken-5"  >&#127769;</v-btn>
              <v-btn text @click="addEmoji('&#128151;')" color="orange darken-5" >&#128151;</v-btn>
              <v-btn text @click="addEmoji('&#128400;')" color="orange darken-5" >&#128400;</v-btn>
            
            </v-btn-toggle>
          </div>
          <div class="d-flex flex-row emoji-12"   >
             <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128038;')" color="orange darken-5"  >&#128038;</v-btn>
              <v-btn text @click="addEmoji('&#128024;')" color="orange darken-5"  >&#128024;</v-btn>
              <v-btn text @click="addEmoji('&#128059;')" color="orange darken-5"  >&#128059;</v-btn>
              <v-btn text @click="addEmoji('&#128514;')" color="orange darken-5" >&#128514;</v-btn>
              <v-btn text @click="addEmoji('&#128076;')" color="orange darken-5" >&#128076;</v-btn>
            
            </v-btn-toggle>
          </div>
          <div class="d-flex flex-row emoji-12">
             <v-btn-toggle >
              <v-btn text @click="addEmoji('&#128149;')" color="orange darken-5"  >&#128149;</v-btn>
              <v-btn text @click="addEmoji('&#128014;')" color="orange darken-5"  >&#128014;</v-btn>
              <v-btn text @click="addEmoji('&#128512;')" color="orange darken-5"  >&#128512;</v-btn>
              <v-btn text @click="addEmoji('&#127939;')" color="orange darken-5" >&#127939;</v-btn>
              <v-btn text @click="addEmoji('&#128525;')" color="orange darken-5" >&#128525;</v-btn>
           
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
  export default {
    data: () => ({
      items: [
        { header: 'COMMENTS' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Vishvanatha Achary',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Roger Federer <span class="grey--text text--lighten-1">12h</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        // { divider: true, inset: true },
        // {
        //   avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        //   title: 'Oui oui',
        //   subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        // }
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
    font-size:8px;
  }
  .v-ctm-subtitle {
    font-size: 0.75rem;
  }
  .v-ctm-title {
    font-size: 0.85rem;
  }
</style>