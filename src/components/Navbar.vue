
<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new prediction.</span>
      <v-btn color="white" text @click="snackbar = false" router :to="'/Dashboard'"  >Close</v-btn>
    </v-snackbar>
    <v-app-bar
      color="primary accent-4"
      dense
      dark  app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><span class="font-weight-light">Vishwa</span>
        <span>KARMA</span></v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="menu in menus"
            :key="menu.name"
            @click="() => {}">
            <v-list-item-icon  v-html="menu.avatar" >
          </v-list-item-icon >
         <v-list-item-title > {{ menu.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
       <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary  color="primary" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            ASTROLOGY
            
          </v-list-item-title>
          
          <v-list-item-subtitle class="d-flex pr-1">
           <popup @projectAdded="snackbar = true"/>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="link in links"
          :key="link.text"
          link router :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Popup from './Popup'
export default {
    components:{Popup},
    data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-lifebuoy', text: 'Dashboard', route: '/' },
        { icon: 'mdi-dropbox', text: 'Land', route: '/projects' },
        { icon: 'mdi-steam-box', text: 'Education', route: '/team' },
        { icon: 'mdi-desktop-classic', text: 'Career', route: '/team1' },
        { icon: 'mdi-xbox', text: 'Foreign Travel', route: '/team2' },
        { icon: 'mdi-playstation', text: 'Visa', route: '/team3' },
        { icon: 'mdi-nintendo-switch', text: 'Marriage', route: '/team4' },
        { icon: 'mdi-heart', text: 'Love and Relationship', route: '/team5' },
         { icon: 'mdi-ambulance', text: 'Health', route: '/team6' },
        { icon: 'mdi-currency-inr', text: 'Money', route: '/team7' },
         { icon: 'mdi-chart-multiple', text: 'Research and analysis', route: '/team8' },
      ],
      menus: [
        { name: 'Aries', role: 'Web developer', avatar: '&#9800;' },
        { name: 'Taurus', role: 'Graphic designer', avatar: '&#9801;' },
        { name: 'Gemini', role: 'Web developer', avatar: '&#9802;' },
        { name: 'Cancer', role: 'Social media maverick', avatar: '&#9803;' },
        { name: 'Leo', role: 'Sales guru', avatar: '&#9804;'},
        { name: 'Virgo', role: 'Web developer', avatar: '&#9805;' },
        { name: 'Libra', role: 'Graphic designer', avatar: '&#9806;' },
        { name: 'Scorpio', role: 'Web developer', avatar: '&#9807;' },
        { name: 'Sagattarius', role: 'Social media maverick', avatar: '&#9808;' },
        { name: 'Capricorn', role: 'Sales guru', avatar: '&#9809;'},
        { name: 'Aquarius', role: 'Social media maverick', avatar: '&#9810;' },
        { name: 'Pisces', role: 'Sales guru', avatar: '&#9811;'}
      ],
      snackbar: false
    }
  }
}
</script>