<template>
   
  
       
            <GChart
                :settings="{packages: ['bar']}"    
                :data="chartData"
                :options="chartOptions"
                :createChart="(el, google) => new google.charts.Bar(el)"
                @ready="onChartReady"
            />
        
  
        
    
</template>
<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'Research',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Aries', 'Taurus', 'Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
        ['2020', 1000, 400, 200, 250,350,150,600,650,700,380,800,300],
        ['2021', 1100, 450, 300, 350,450,900,600,600,650,380,400,300],
       
      ]
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Financial Growth',
          subtitle: 'Finance position of different star as per research'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3','#9a63a9','#ba6a80','#83cf6e','#914d5b','#573061','#fff69b','#d14593','#fb34ba','#067d9f']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>