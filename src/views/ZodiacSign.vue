<template>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">
               <template>
                    <v-list-item-avatar color="grey lighten-2" v-html="getStarName()" dark></v-list-item-avatar>
                    <span>{{getSignName()}}</span>
               </template>
            </v-card-title>
            <v-card-subtitle>Astrology from well-known astrologer</v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col>
                        <template>
                            <div class="title">
                            <v-icon class="mb-1">mdi-heart</v-icon>
                            <span>&nbsp;&nbsp;Daily Love Horoscope</span></div>
                            <span><br>This will be a promising day as you will have ample time to enjoy the company of your partner. The opportunity would not only create some romantic memories but also would strengthen your relationship, as you are successful in understanding each other better. On the whole today will brings you an opportunity to develop a good understanding of your partner.</span>
                         </template>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <template>
                            <div class="title">
                            <v-icon class="mb-1">mdi-home</v-icon>
                            <span>&nbsp;&nbsp;Daily Career Horoscope</span></div>
                            <span><br>Some healthy competition at work may motivate you to exhibit your real talent. This will encourage you to work to your full potential as you strive to achieve your targets and excel over others. There are indications that it would keep you on your toes most of the time and will bring about a very satisfying final result. The best thing about this competitive atmosphere is that this would bring rich dividends in the long run by enhancing your career prospects and your drive.</span>
                        </template>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <template>
                            <div class="title">
                            <v-icon class="mb-1">mdi-currency-inr</v-icon>
                            <span>&nbsp;&nbsp;Daily Finance Horoscope</span></div>
                            <span><br>If you have been finding at work that your projects have just not been progressing and that your finances are flagging, you will find today that a breakthrough is imminent. Your hard work has paid off and you will finally overcome some of the hurdles that have been plaguing you. Use this time to progress towards your career and financial goals as they are attainable.</span>
                        </template>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <template>
                            <div class="title">
                            <v-icon class="mb-1">mdi-ambulance</v-icon>
                            <span>&nbsp;&nbsp;Daily Health Horoscope</span></div>
                            <span><br>Reduced tension levels today will help lower the blood pressure and leave you feeling relieved. Your health aspect today is generally positive and you are feeling fit. Enjoy the outdoors or join that gym you`ve been eying so that your overall fitness regimen can be established for your long-term benefit.</span>
                        </template>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn text>CALL NOW</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    data()
    {
       return   {
        id: 'Aries'
       }
    },
    created : function()
    {
        this.id = this.$route.params.id;     
    },
    methods: {
        getStarName()
        {
            var starName;
            switch(this.$route.params.id)
            {
            case "Aquarius":
                starName = "&#9810;";
                break;
            case "Cancer":
                starName = "&#9803;";
                break;
            case "Capricorn":
                starName = "&#9809;";
                break;
            case "Scorpio":
                starName = "&#9807;";
                break;
            case "Sagittarius":
                starName = "&#9808;";
                break;
            case "Leo":
                starName = "&#9804;";
                break;
            case "Taurus":
                starName = "&#9801;";
                break;
            case "Aries":
                starName = "&#9800;";
                break;
            case "Libra":
                starName = "&#9806;";
                break;
            case "Pisces":
                starName = "&#9811;";
                break;
            case "Gemini":
                starName = "&#9802;";
                break;
            case "Virgo":
                starName = "&#9805;";
                break;
            default:
                starName = "Aries";
                break;  
            }
            return starName;
        },
        getSignName()
        {
            return this.$route.params.id;
        }
    }
}
</script>