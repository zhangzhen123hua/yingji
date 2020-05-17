<template>
  <div class="wrap">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.chartInit();
  },
  methods: {
    chartInit() {
      const myChart = echarts.init(this.$refs.chart);
      const sizeFun = function() {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);
      let option = {
        color: ['#6cb5d1'],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  overflow: hidden;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
