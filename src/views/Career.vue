<template>
<v-container>
    <v-card
    class="mx-auto"
    color="#385F73"
    dark
<<<<<<< HEAD
<<<<<<< HEAD
   
=======
    max-width="800"
>>>>>>> Implemented left menu
=======
   
>>>>>>> 66b08f9e2fbb36113d58fe6f6254694801f716a7
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-gamepad
      </v-icon>
      <span class="title font-weight-light">Astrology on Career</span>
    </v-card-title>

    <v-card-text class="headline font-weight-regular">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 66b08f9e2fbb36113d58fe6f6254694801f716a7
      <v-layout row wrap>
         <v-flex xs12 sm6 md4 lg3 v-for="star in educations" :key="star.name">
        <v-card
      class="mx-auto text-xs-center mb-3 mr-1" 
       color="gray lighten-4" light >
<<<<<<< HEAD
=======
        <v-card
      class="mx-auto text-xs-center mb-3 mr-1" 
      v-for="star in educations" :key="star.name" color="gray lighten-4" light >
>>>>>>> Implemented left menu
=======
>>>>>>> 66b08f9e2fbb36113d58fe6f6254694801f716a7
      <v-list-item>
        <v-list-item-avatar color="grey lighten-2" v-html="star.avatar"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{star.name}} </v-list-item-title>
          <v-list-item-subtitle>{{star.role}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
<<<<<<< HEAD
<<<<<<< HEAD
        {{star.content.substring(0,280)+"...."}}
=======
        {{star.content}}
>>>>>>> Implemented left menu
=======
        {{star.content.substring(0,280)+"...."}}
>>>>>>> 66b08f9e2fbb36113d58fe6f6254694801f716a7
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Read
        </v-btn>
        <v-btn
          icon
          color="blue"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
<<<<<<< HEAD
<<<<<<< HEAD
         </v-flex>
      </v-layout>
=======
>>>>>>> Implemented left menu
=======
         </v-flex>
      </v-layout>
>>>>>>> 66b08f9e2fbb36113d58fe6f6254694801f716a7
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Achary</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</v-container>
</template>
 <script>
export default {
    data: () => ({
      educations : [
        { name: 'Aries',role:'(21 Mar - 20 Apr)', content: 'You’re not afraid to be a trailblazer and to set new standards. You may need to learn patience, though, because you’re going to have to learn to pause and figure out what works and what doesn’t before committing yourself to it, otherwise you could fall on your face. Careers or positions where you can be competitive in some way will bring you satisfaction.', avatar: '&#9800;' },
        { name: 'Taurus',role:'(20 Apr - 21 May)', content: 'You’re not going to be the most innovative person, but you are going to be hard working. Just make sure that you don’t get too set in your ways. It’s okay to delegate—something that you may have to learn to do, since you like to be in control. Artistic careers, positions where you can work with the land and nature, or something financial. Those types of careers are suit your personality', avatar: '&#9801;' },
        { name: 'Gemini',role:'(21 May - 21 Jun)', content: 'You’re going to need something really captivating or you’ll get bored and lose interest. You need to be in a position that is varied and that uses your communicative skills. You may even have two distinct career paths at some point in your life. Jobs that involves writing, speaking, traveling, or teaching others will be suitable for you.', avatar: '&#9802;' },
        { name: 'Cancer',role:'(21 Jun - 23 July)', content: 'Yours is the path of the caregiver, and it can be hard for you to find just the right placement. As well as caring for others, you also care (possibly too much) what they think about you. Nursing, something that is family-oriented, or something that helps others is a great path for you, as long as you don’t lose your own identity along the way.', avatar: '&#9803;' },
        { name: 'Leo',role:'(23 Jul - 23 Aug)', content: 'You like the limelight, and you should find a career that meets that need. You like to be complimented and appreciated, and you thrive when you’re leading and guiding others. This is the placement for celebrities, for positions where you can find accolade through helping people to find their own niche in life, or where you’re in the public eye in some way.', avatar: '&#9804;'},
        { name: 'Virgo',role:'(23 Aug - 23 Sep)', content: 'You’re hardworking and practical and you need a position that uses your intellect. The more detailed it is, the more you’re likely to take to it. You don’t mind routine, but you do need a job that stimulates your thinking process in some way. Life coaching, professional organizing, bookkeeping or accounting, and anything to do with health matters are all appropriate.', avatar: '&#9805;' },
        { name: 'Libra',role:'(23 Aug - 23 Sep)', content: 'You’re probably going to find yourself with some kind of a career partner at some point. You’ve got a great sense of fairness and an eye for aesthetics. You’re also very charismatic when you want to be. You may take your time when choosing what you want to do with your working life; just make sure that you don’t take too much time. You’re well suited for anything that relates to art, beauty, balance, and partnerships.', avatar: '&#9806;' },
        { name: 'Scorpio',role:'(23 Oct - 23 Nov)', content: 'You may be a workaholic with this placement! You can be quite fierce when it comes to what you want from your career—so much so that you may try to coerce or manipulate others along the way. Moody and intense, you’ll have to make sure that you don’t let your emotions get the better of you. Anything that deals with intrigue, real estate, finance, or even the occult and the metaphysical arts is probably going to appeal.', avatar: '&#9807;' },
        { name: 'Sagattarius',role:'(22 Nov - 22 Dec)', content: 'Ever the optimist, it may be hard for you to settle into a career. This is because you truly believe that (should something happen with your job) another job will pop up. You may prefer to work several varied jobs rather than be committed to any one thing. Positions where you can use your natural charisma—such as those in sales, travel, writing, or teaching—would be ideal for you.', avatar: '&#9808;' },
        { name: 'Capricorn',role:'(22 Dec - 20 Jan)', content: 'You’re very serious when it comes to your career choice, and while your dedication is to be admired, you need to make sure you’re not being the proverbial stick-in-the-mud. You’re likely to have to work hard to get where you want to go, so success may come to you later in life. You could do well as an attorney or in other legal positions, as a security guard, a timekeeper, or in jobs that have to do with the skeletal system of the body.', avatar: '&#9809;'},
        { name: 'Aquarius',role:'(20 Jan - 19 Feb)', content: 'You’re not one to be conventional when it comes to your profession. You know what you want, you know how to get it, and you’re probably going to take a unique path to that goal. You tend to shy away from public attention though, preferring to work alone and in a field where you know your work is going to be recognized. Technology, science, and humanitarian pursuits are appropriate careers for you.', avatar: '&#9810;' },
        { name: 'Pisces',role:'(19 Feb - 21 Mar)', content: 'Ever the dreamer, you may still be working out what you want to be when you grow up by the time you retire. You’re not particularly practical, so try to find a position where you don’t need to be. Painters, writers, poets, and anywhere you can be romantic and fanciful is where you’ll fit in. You may even do well with metaphysics, the healing arts, or as a counselor of some sort.', avatar: '&#9811;'}
      ]
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>