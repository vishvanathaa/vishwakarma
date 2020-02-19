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
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col>
                    <template>
                   <div class="headline">
                       <v-icon>mdi-heart</v-icon>
                       Daily Love Horoscope</div>
                   <span><br>This will be a promising day as you will have ample time to enjoy the company of your partner. The opportunity would not only create some romantic memories but also would strengthen your relationship, as you are successful in understanding each other better. On the whole today will brings you an opportunity to develop a good understanding of your partner.</span>
                </template>
               
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col>
                         <template>
                   <div class="headline">
                       <v-icon>mdi-heart</v-icon>
                       Daily Love Horoscope</div>
                   <span><br>This will be a promising day as you will have ample time to enjoy the company of your partner. The opportunity would not only create some romantic memories but also would strengthen your relationship, as you are successful in understanding each other better. On the whole today will brings you an opportunity to develop a good understanding of your partner.</span>
                </template>
               
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
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