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
          type: 'spline',
        },
        title: {
          text: 'Jumlah Penduduk',
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
          title: {
            text: 'Nilai',
          },
        },
        series: [{
          name: 'Data 1',
          data: [5, 10, 15, 12, 8, 6],
          color:'#2161D5'
        }, ],
      },

    };
  }
};
</script>
