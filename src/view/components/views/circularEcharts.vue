<template>
  <div class="wrap">
    <div id="doughtnut" class="doughtnut" ref="doughtnut"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props:{
    option:{
      default () { return {} },
      type: Object
    }
  },
  methods: {
    drawLine() {
      const { template, unit = "个" } = this.option;
      const valueMap = new Map();
      let sum = 0;
      for (const { name, value } of template) {
        valueMap.set(name, value);
        sum += value;
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.doughtnut);
      let sizeFun = function() {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);
      let option = {
        legend: {
          orient: "vertical",
          x: "right",
          left: "60%",
          top: "20%",
          icon: "circle",
          itemGap: 20,
          textStyle: {
            fontSize: 16,
            color: "#97B6FF",
          },
          data: template.map(({ name }) => name),
          formatter: (name) => {
            const value = valueMap.get(name);
            return `${name} ${value} ${unit}`;
          },
        },
        series: [
          {
            type: "pie",
            center: ["25%", "50%"],
            radius: ["45%", "60%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: `共${sum}(${unit})`,
                color: "#97B6FF",
                fontSize: 15,
              },
            },
            data: template.map(({ name, value, color }) => {
              return {
                name,
                value,
                itemStyle: {
                  color: {
                    type: "linear",
                    colorStops: [
                      {
                        offset: 0.2,
                        color: color[0],
                      },
                      {
                        offset: 1,
                        color: color[1],
                      },
                    ],
                  },
                },
              };
            }),
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .doughtnut {
    width: 100%;
    height: 100%;
  }
}
</style>
