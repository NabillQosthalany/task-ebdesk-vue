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
        colors: ['#2161D5', '#97ACD1', '#898BE7','#89AFE7'],
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Jumlah Penduduk Tiap Dusun',
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            depth: 45,
          },
        },
        series: [
          {
            name: 'Data',
            data: [
              ['Dusun 4', 30], // Data untuk setiap kategori dan nilai
              ['Dusun 1', 20],
              ['Dusun 2', 40],
              ['Dusun 3', 10],
            ],
          },
        ],
      },
    };
  },
}

</script>
