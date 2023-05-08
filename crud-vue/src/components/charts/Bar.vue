<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Prasarana Air Bersih',
        },
        xAxis: {
          categories: ['Kategori 1', 'Kategori 2', 'Kategori 3'],
        },
        yAxis: {
          title: {
            text: 'Nilai',
          },
        },
        series: [
          {
            name: 'Data 1',
            data: [50, 55, 75,200,150,120],
            color:'#2161D5',

          },
        ],
      },
    };
  },
}
</script>
