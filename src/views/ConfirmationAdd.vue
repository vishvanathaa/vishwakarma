<template>
    <v-container>
    <v-card
    class="mx-auto text-xs-center ma-3 mr-3" 
    >
    <v-list-item>
      <v-list-item-avatar color="grey lighten-2" dark><v-icon>mdi-heart</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline"></v-list-item-title>
        <v-list-item-subtitle>Confirmation Message</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      The prediction added by you will appear in dashboard. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repudiandae vitae aperiam velit aspernatur. Modi pariatur fugiat placeat porro, odit, similique adipisci sapiente excepturi possimus consequatur, praesentium accusantium dolore aperiam!

    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4" router :to="{ path: '/Dashboard', name: 'DashboardRefresh', params: { id: 123 }}" 
      >
        GO TO DASHBOARD
      </v-btn>
      
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>
<script>
export default {
     name: 'ConfirmationAdd'
}
</script>