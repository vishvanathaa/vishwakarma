<template>
  <v-card class="mx-auto pa-0" outlined shaped color="grey lighten-4">
    <v-card-title class="mt-20">
      <div>
        <div class="text-uppercase font-weight-black text-center headlineText mt-5">THE DAIZY NEWS</div>
        <div class="text-uppercase font-weight-regular text-center mt-5">FRIDAY, FEBRUARY 28, 2020</div>
        <hr />
        <v-row>
          <v-col>
            <div
              class="text-uppercase font-weight-black text-center subHeader mt-1"
            >SERENA WILLIAMS BAGS GOLD MEDAL</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4" md="6">
            <v-row>
              <v-col class="text-center" color="black darken-1">
                <div style="background-color:#E8ECEC">
                  <v-img src="https://vishvanatha-acharya.herokuapp.com/vish.jpg"/>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p
                  class="font-weight-light text-font" 
                >WASHIGNTON : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum quia accusamus magni perferendis dolorem dicta, quibusdam ipsam dolorum provident architecto optio quaerat quasi reprehenderit ducimus tempore animi et laboriosam?</p>
                <p
                  class="font-weight-light text-font"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum quia accusamus magni perferendis dolorem dicta, quibusdam ipsam dolorum provident architecto optio quaerat quasi reprehenderit ducimus tempore animi et laboriosam?</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" sm="4" md="6">
            <p
              class="font-weight-light text-font"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum quia accusamus magni perferendis dolorem dicta, quibusdam ipsam dolorum provident architecto optio quaerat quasi reprehenderit ducimus tempore animi et laboriosam?</p>
            <p
              class="font-weight-light text-font"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum quia accusamus magni perferendis dolorem dicta, quibusdam ipsam dolorum provident architecto optio quaerat quasi reprehenderit ducimus tempore animi et laboriosam?</p>
            <p
              class="font-weight-light text-font"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum quia accusamus magni perferendis dolorem dicta, quibusdam ipsam dolorum provident architecto optio quaerat quasi reprehenderit ducimus tempore animi et laboriosam?</p>
          </v-col>
        </v-row>
      </div>
    </v-card-title>
    <v-card-text></v-card-text>
  </v-card>
</template>
<style scoped>
hr {
  position: relative;
  top: 5px;
  border: none;
  height: 10px;
  background: gray;
  margin-bottom: 0px;
}
.text-font
{
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:15px;
  line-height:18px;
}
@media (min-width: 200px) {
  div.headlineText {
    font-size: 35px;
  }
  div.subHeader {
    font-size: 12px;
  }
}
@media (min-width: 800px) {
  div.headlineText {
    font-size: 80px;
  }
}
@media (min-width: 1000px) {
  div.headlineText {
    font-size: 90px;
  }
  div.subHeader {
    font-size: 35px;
  }
}
</style>