
<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="5000" top color="success">
      <span>Awesome! You added a new prediction.</span>
      <v-btn color="white" text @click="snackbar = false" router
        :to="{ path: '/ConfirmationAdd', name: 'ConfirmationAdd' }">Close</v-btn>
    </v-snackbar>
    <v-app-bar color="primary accent-4" dense dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="pa-0">
        <v-icon class="mr-1 mb-1">mdi-wallet</v-icon>
        <span class="font-weight-bold">iSpent</span>
        <span class="font-weight-light"> - Expense and Income Tracker</span>
        <span class="font-weight-light ml-1">: Astro </span>
        <span>Science</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="menu in menus" :key="menu.name" :to="{ name: 'ZodiacSign', params: { id: menu.name } }">
            <v-list-item-icon v-html="menu.avatar"></v-list-item-icon>
            <v-list-item-content class="ml-n4">{{ menu.name }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary color="primary" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title caption">Ancient Indian Vedic Science</v-list-item-title>

          <v-list-item-subtitle class="d-flex pr-1">
            <popup @projectAdded="snackbar = true" />
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.text" link router :to="link.route">
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
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-wallet", text: "iSpent", route: "/" },
        { icon: "mdi-apps", text: "Astrology", route: "/Dashboard" },
        { icon: "mdi-ambulance", text: "Health", route: "/Health" },
        { icon: "mdi-lifebuoy", text: "Education", route: "/Education" },
        { icon: "mdi-desktop-classic", text: "Career", route: "/Career" },
        { icon: "mdi-airplane", text: "Foreign Travel", route: "/ForeignTravel" },
        { icon: "mdi-airplane-off", text: "Visa", route: "/Visa" },
        { icon: "mdi-human-male-female", text: "Marriage", route: "/Marriage" },
        {
          icon: "mdi-heart",
          text: "Love and Relationship",
          route: "/Relationship"
        },
        { icon: "mdi-currency-inr", text: "Finance", route: "/Money" },
        { icon: "mdi-home-city-outline", text: "Land", route: "/Land" },
        {
          icon: "mdi-chart-multiple",
          text: "Research and analysis",
          route: "/Research"
        },

       
      ],
      menus: [
        { name: "Aries", role: "Web developer", avatar: "&#9800;" },
        { name: "Taurus", role: "Graphic designer", avatar: "&#9801;" },
        { name: "Gemini", role: "Web developer", avatar: "&#9802;" },
        { name: "Cancer", role: "Social media maverick", avatar: "&#9803;" },
        { name: "Leo", role: "Sales guru", avatar: "&#9804;" },
        { name: "Virgo", role: "Web developer", avatar: "&#9805;" },
        { name: "Libra", role: "Graphic designer", avatar: "&#9806;" },
        { name: "Scorpio", role: "Web developer", avatar: "&#9807;" },
        {
          name: "Sagittarius",
          role: "Social media maverick",
          avatar: "&#9808;"
        },
        { name: "Capricorn", role: "Sales guru", avatar: "&#9809;" },
        { name: "Aquarius", role: "Social media maverick", avatar: "&#9810;" },
        { name: "Pisces", role: "Sales guru", avatar: "&#9811;" }
      ],
      snackbar: false
    };
  }
};
</script>