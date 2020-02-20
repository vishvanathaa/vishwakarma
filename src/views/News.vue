<template>
  <v-card class="mx-auto pa-0 containerRotate" color="grey lighten-4">
    <v-card-title class="mt-20">
      <div>
        <div class="text-uppercase font-weight-black text-center headlineText mt-5">
          THE INIDIAN EXIPRESS
          <AddNews @projectAdded="snackbar = true" />
        </div>

        <div
          class="text-uppercase font-weight-regular text-center mt-5 font-sub-title"
        >{{getEntryTime()}} <v-btn
              icon
              color="blue"
              href="https://facebook.com/sharer/sharer.php?u=https://vishvanatha-acharya.herokuapp.com"
              target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn></div>
        <hr />
        <v-row>
          <v-col>
            <div
              class="text-uppercase font-weight-black text-center subHeader mt-1"
            >VISHVANATHA ACHARY BAGS GOLD MEDAL</div>
          </v-col>
        </v-row>
        <v-row class="mt-n3">
          <v-col cols="6" sm="6" md="6">
            <v-row>
              <v-col class="text-center" color="black darken-1">
                <div style="background-color:#E8ECEC">
                  <v-img src="award.jfif" height="300" />
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-light text-font">
                  <span class="font-weight-bold">WASHIGNTON</span>
                  : PV Sindhu, Rohit Sharma, Rani, Saurabh Chaudhary, Dutee Chand, Manu Bhaker, Bajrang Punia and Jaspal Rana are some of the prominent names that featured among the winners at the Times of India Sports Awards (TOISA) powered by BHIM-UPI, which honoured the best performances in Indian sport at a glittering awards function in Delhi on Thursday.
                </p>
                <p
                  class="font-weight-light text-font"
                >The who's who of India's sports fraternity were present at the awards ceremony, including one of the country's most legendary sports persons, hockey Olympian Balbir Singh Sr, who was part of three of India's gold-medal winning teams at the Olympics, besides being the manager of the squad that lifted the 1975 World Cup.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" sm="6" md="6">
            <p
              class="font-weight-light text-font"
            >The event was also attended by a few very special guests - members of the 1980 Olympics gold medal winning hockey team, including captain V Basakaran, MM Somaiya, Mervyn Fernandes, Zafar Iqbal, Surinder Singh Sodhi and MK Kaushik. Sindhu's historic feat of becoming the first Indian to win the badminton World Championships remained unmatched and she was, therefore, named the 'Sportsperson of the Year', besides being the joint winner in the Jury's Choice Award for 'Badminton Player of the Year' along with Sai Praneeth. Sindhu, who is currently ranked sixth in the BWF Rankings, completed a hat-trick by winning the 'Unbreakable Spirit of Sport award' as well. She is set to enter the Tokyo Olympics in an endeavour to improve on the singles silver medal she won in Rio four years ago.</p>
            <p
              class="font-weight-light text-font"
            >The men's award in the badminton category went to 2019 BWF World Championships bronze medallist Sai Praneeth, who created history by becoming only the second man after Prakash Padukone to win a medal at the premier tournament.</p>

           
          </v-col>
        </v-row>
      </div>
    </v-card-title>
    <v-card-text></v-card-text>
  </v-card>
</template>
<script>
import AddNews from "@/components/AddNews";
export default {
  name: "news",
  components: { AddNews },
  data() {
    return {
      snackbar: false
    };
  },
  methods: {
    getEntryTime: function() {
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      var day = new Array();
      day[0] = "Sunday";
      day[1] = "Monday";
      day[2] = "Tuesday";
      day[3] = "Wednesday";
      day[4] = "Thursday";
      day[5] = "Friday";
      day[6] = "Saturday";
      var monName = month[currentDate.getMonth()];
      var currentDay = day[currentDate.getDay()];
      var currentDateWithFormat =
        currentDay +
        ", " +
        monName +
        " " +
        currentDate.getDate() +
        ", " +
        currentDate.getFullYear();
      return currentDateWithFormat;
    }
  }
};
</script>
<style scoped>
hr {
  position: relative;
  top: 5px;
  border: none;
  height: 10px;
  background: gray;
  margin-bottom: 0px;
}
.font-sub-title {
  font-size: 18px;
}
.containerRotate {
  border: solid 1px;
  transform: rotateY(0deg) rotate(1deg); /* needs Y at 0 deg to behave properly*/
  transition: transform 2s;
}
.containerRotate1:hover {
  transform: rotateY(180deg) rotate(45deg); /* notice the order */
}

.text-font {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 14px;
  line-height: 19px;
}
@media (min-width: 200px) {
  div.headlineText {
    font-size: 28px;
  }
  div.subHeader {
    font-size: 12px;
  }
  .containerRotate {
    border: solid 1px;
    transform: rotateY(0deg) rotate(0deg); /* needs Y at 0 deg to behave properly*/
    transition: transform 2s;
  }
  .font-sub-title {
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
    text-shadow: 1px 2px grey;
  }
  .containerRotate {
    border: solid 1px;
    transform: rotateY(0deg) rotate(1deg); /* needs Y at 0 deg to behave properly*/
    transition: transform 2s;
  }
}
</style>