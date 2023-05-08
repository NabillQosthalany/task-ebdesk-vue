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
          type: 'column', // Jenis grafik diganti menjadi 'column' untuk grafik batang lurus
        },
        title: {
          text: 'Contoh Grafik Batang Lurus',
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
            data: [5, 10, 15],
            color:'#2161D5',
          },
          {
            name: 'Data 2',
            data: [8, 6, 12],
            color:'#97ACD1',
          },
        ],
      },
    };
  },
}

</script>
