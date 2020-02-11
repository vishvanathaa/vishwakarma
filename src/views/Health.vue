<template>
<v-container>
             <v-card
    :loading="loading"
    class="mx-auto"
    max-width="600"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Choose food based on your birth sign</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
         $ • Indian, Cafe
      </div>

      <div>Early diet in India mainly consisted of legumes, vegetables, fruits, grains, dairy products, and honey. Staple foods eaten today include a variety of lentils (dal), whole-wheat flour (aṭṭa), rice, and pearl millet (bājra), which has been cultivated in the Indian subcontinent since 6200 BCE.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Right time for food</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
       
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-container>
      </template>
     
  <script>

export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>