<template>
    <v-container>
    <v-card
    class="mx-auto text-xs-center ma-3 mr-3" 
    >
    <v-list-item>
      <v-list-item-avatar color="grey lighten-2" dark><v-icon>mdi-heart</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline"></v-list-item-title>
        <v-list-item-subtitle>Congrats! You are in news !</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      Please click on PREVIEW and click on facebook icon to share.
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4" router :to="{ path: '/News', name: 'News'}" 
      >
        PREVIEW
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