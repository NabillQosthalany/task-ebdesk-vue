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
          polar: true,
          type: 'line',
        },
        title: {
          text: 'Jumlah Penduduk Tiap Dusun',
        },
        xAxis: {
          categories: ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4', 'Kategori 5'],
        },
        yAxis: {
          min: 0,
          max: 10,
          tickInterval: 2,
          labels: {
            format: '{value}',
          },
          plotBands: [{
            from: 0,
            to: 10,
            color: 'rgba(0, 0, 0, 0.1)',
          }],
        },
        series: [{
          name: 'Data',
          data: [8, 6, 9, 7, 8],
          pointPlacement: 'on',
          color: 'rgba(255, 0, 0, 0.5)',
          fillColor: 'rgba(255, 0, 0, 0.1)',
          lineWidth: 1,
          marker: {
            enabled: true,
            symbol: 'circle',
            radius: 4,
          },
        }],
      },

    };
  },
}

</script>
