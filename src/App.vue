<template>
  <v-app>
    
    <Navbar/>
    
    <v-content>
      <v-container >
        <router-view></router-view>
         
      </v-container>
    <v-footer fixed color="primary" dark class="font-weight-thin caption">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} iSpent. Vishvanatha Achary</div>
  </v-footer>
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
