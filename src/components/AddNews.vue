<template>
  <div class="text-left mt-n12 pt-0">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn  v-on="on">
          <v-icon color="blue darken-4">mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <v-icon>mdi-account</v-icon>&nbsp;Add your news
        </v-card-title>
        <v-card-text>
          <v-form ref="form" class="mt-3">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="star"
                  :items="items"
                  prepend-icon="mdi-star"
                  outlined
                  label="Name"
                  shaped
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-n9 mb-n9">
              <v-col cols="12">
                <v-text-field
                  label="Place"
                  prepend-icon="mdi-nintendo-switch"
                  v-model="place"
                  :rules="inputRules"
                  outlined
                  shaped
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple darken-1" text @click="dialog = false" dark>Close</v-btn>
          <v-btn color="purple darken-1" text @click="submit" dark :loading="loading">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import db from "@/fb";
export default {
  data() {
    return {
      dialog: false,
      star:'',
      place: "",
      clearable: true,
      inputRules: [
        v => !!v || "This field is required",
        v =>
          (!!v && (v.length ? v.length : 0) >= 5) ||
          "Minimum length is 5 characters"
      ],
      loading: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        db.collection("stars")
          .doc("12")
          .update({ content: this.content })
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.content = "";
            this.$emit("projectAdded");
          });
      }
    }
  }
};
</script>