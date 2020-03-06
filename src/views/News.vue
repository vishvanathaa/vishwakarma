<template>
  <v-card class="mx-auto pa-0 containerRotate" outlined color="grey lighten-4">
    <v-card-title class="mt-20">
      <div>
        <div class="text-uppercase font-weight-black text-center headlineText mt-5">THE DAIZY NEWS</div>
        <div class="text-uppercase font-weight-regular text-center mt-5">FRIDAY, FEBRUARY 28, 2020</div>
        <hr />
        <v-row>
          <v-col>
            <div
              class="text-uppercase font-weight-black text-center subHeader mt-1"
            >ANIL BAGS GOLD MEDAL</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="4" md="6">
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
                  <i>
                    <b>WASHIGNTON</b>
                  </i> : PV Sindhu, Rohit Sharma, Rani, Saurabh Chaudhary, Dutee Chand, Manu Bhaker, Bajrang Punia and Jaspal Rana are some of the prominent names that featured among the winners at the Times of India Sports Awards (TOISA) powered by BHIM-UPI, which honoured the best performances in Indian sport at a glittering awards function in Delhi on Thursday.
                </p>
                <p
                  class="font-weight-light text-font"
                >The who's who of India's sports fraternity were present at the awards ceremony, including one of the country's most legendary sports persons, hockey Olympian Balbir Singh Sr, who was part of three of India's gold-medal winning teams at the Olympics, besides being the manager of the squad that lifted the 1975 World Cup.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" sm="4" md="6">
            <p
              class="font-weight-light text-font"
            >The event was also attended by a few very special guests - members of the 1980 Olympics gold medal winning hockey team, including captain V Basakaran, MM Somaiya, Mervyn Fernandes, Zafar Iqbal, Surinder Singh Sodhi and MK Kaushik. Sindhu's historic feat of becoming the first Indian to win the badminton World Championships remained unmatched and she was, therefore, named the 'Sportsperson of the Year', besides being the joint winner in the Jury's Choice Award for 'Badminton Player of the Year' along with Sai Praneeth. Sindhu, who is currently ranked sixth in the BWF Rankings, completed a hat-trick by winning the 'Unbreakable Spirit of Sport award' as well. She is set to enter the Tokyo Olympics in an endeavour to improve on the singles silver medal she won in Rio four years ago.</p>
            <p
              class="font-weight-light text-font"
            >The men's award in the badminton category went to 2019 BWF World Championships bronze medallist Sai Praneeth, who created history by becoming only the second man after Prakash Padukone to win a medal at the premier tournament.</p>
            <p
              class="font-weight-light text-font"
            >The elite panel of jury members that picked the 'Jury's Choice Award' in 19 categories included former India cricketer Gautam Gambhir; former India football captain Bhaichung Bhutia; hockey's Olympic gold medallist Zafar Iqbal; Asian Games silver medallist and former athlete Ashiwni Nachappa; the first Indian paralympian to win two gold medals at the Paralympics, Devendra Jhajaria; and Chief Editor of Times Internet Limited, Rajesh Kalra. The 'Cricketer of the Year' award went to Rohit, who set the 2919 ICC World Cup ablaze with a record five centuries, besides crossing many more landmarks in the year. hockey captain Rani, whose goal helped the team qualify for its second consecutive Olympic appearance, was named the 'Hockey Player of the Year'. She was also selected as the 'Inspiration of the Year' for her exploits in 2019, which also saw Rani winning the 'World Games Athlete of the Year' award -- the first Indian and the first hockey player to achieve the feat.</p>
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
  font-size: 15px;
  line-height: 18px;
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
    text-shadow: 1px 2px grey;
  }
}
</style>