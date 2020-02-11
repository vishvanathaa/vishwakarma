<template>
  <v-app>
    
    <Navbar/>
    
    <v-content class="ml-3">
      <v-container>
        <router-view></router-view>
      </v-container>
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
