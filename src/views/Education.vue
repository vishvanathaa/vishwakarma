<template>
<v-container>
  
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    
  >
    <v-card-title color="white">
      <v-icon
        large=""
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light" >Astrology on education </span>
    </v-card-title>

    <v-card-text class="font-weight-regular">
      <v-layout row wrap>
         <v-flex xs12 sm6 md4 lg3 v-for="star in educations" :key="star.name">
      <v-card
    class="mx-auto text-xs-center mb-3 mr-1" 
     color="gray lighten-4" light >
    <v-list-item>
      <v-list-item-avatar color="grey lighten-2" v-html="star.avatar"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{star.name}} </v-list-item-title>
        <v-list-item-subtitle>{{star.role}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque ipsa temporibus deserunt sed explicabo, quidem hic ad? Magnam praesentium corporis laudantium minus. Neque perspiciatis consequatur provident consequuntur eos! Earum.
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        icon
        color="blue"
      >
         <v-icon>mdi-facebook</v-icon>
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
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vishva</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
  </v-container>
  </template>
  <script>
export default {
    data: () => ({
      educations : [
        { name: 'Aries', content: 'Web developer', avatar: '&#9800;' },
        { name: 'Taurus', content: 'Graphic designer', avatar: '&#9801;' },
        { name: 'Gemini', content: 'Web developer', avatar: '&#9802;' },
        { name: 'Cancer', content: 'Social media maverick', avatar: '&#9803;' },
        { name: 'Leo', content: 'Sales guru', avatar: '&#9804;'},
        { name: 'Virgo', content: 'Web developer', avatar: '&#9805;' },
        { name: 'Libra', content: 'Graphic designer', avatar: '&#9806;' },
        { name: 'Scorpio', content: 'Web developer', avatar: '&#9807;' },
        { name: 'Sagattarius', content: 'Social media maverick', avatar: '&#9808;' },
        { name: 'Capricorn', content: 'Sales guru', avatar: '&#9809;'},
        { name: 'Aquarius', content: 'Social media maverick', avatar: '&#9810;' },
        { name: 'Pisces', content: 'Sales guru', avatar: '&#9811;'}
      ]
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>