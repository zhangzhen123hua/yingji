import imgMarker from './img'

export const getOption = (series = []) => {
  return {
    geo: {
      id: undefined, // 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件
      show: true, // 是否显示地理坐标系组件
      map: 'map', // 地图类型
      roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
      center: [126.50, 48.33], // 当前视角的中心点，用经纬度表示
      aspectScale: undefined, // 这个参数用于 scale 地图的长宽比
      boundingCoords: undefined, // 二维数组，定义定位的左上角以及右下角分别所对应的经纬度
      zoom: 0.7, // 当前视角的缩放比例
      scaleLimit: { min: 0.3, max: 2 }, // 滚轮缩放的极限控制
      nameMap: undefined, // 自定义地区的名称映射
      label: { // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        show: false
      },
      itemStyle: { // 地图区域的多边形 图形样式。
        areaColor: { // 地图区域的颜色
          type: 'radial', // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [{
            offset: 0,
            color: 'rgba(175,238,238, 0)' // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(47,79,79, .2)' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
        },
        color: undefined, // 图形的颜色
        borderColor: 'rgba(147, 235, 248, 1)',
        borderWidth: 1, // 描边线宽。为 0 时无描边
        borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
        shadowBlur: 10, // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
        shadowColor: 'rgba(128, 217, 248, 1)', // 阴影颜色
        shadowOffsetX: -2, // 阴影水平方向上的偏移距离
        shadowOffsetY: 2, // 阴影垂直方向上的偏移距离
        opacity: 1 // 图形透明度，支持从 0 到 1 的数字，为 0 时不绘制该图形
      },
      emphasis: { // 高亮状态下的多边形和标签样式
        label: {
          show: true,
          color: '#FFFFFF'
        },
        itemStyle: {
          areaColor: '#389BB7',
          borderWidth: 0
        }
      }
    },
    series: series
  }
}

export const getLines = (data, color = '#0AD0C7') => {
  return {
    type: 'lines', // 路径图: 用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化
    id: undefined, // 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件
    name: undefined, // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
    coordinateSystem: 'geo', // 该系列使用的坐标系，可选 'cartesian2d', 'geo'
    polyline: false, // 是否是多段线
    effect: { // 线特效的配置
      show: true, // 是否显示特效
      period: 4, // 特效动画的时间，单位为 s
      delay: 0, // 特效动画的延时，支持设置成数字或者回调。单位为 ms
      constantSpeed: undefined, // 配置特效图形的移动动画是否是固定速度，单位像素/秒，设置为大于 0 的值后会忽略 period 配置项
      symbol: 'arrow', // 特效图形的标记: ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，可以通过 'image://url' 设置为图片
      symbolSize: 10, // 特效标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示高和宽，例如 [20, 10] 表示标记宽为 20，高为 10
      color: undefined, // 特效标记的颜色，默认取 lineStyle.color
      trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
      loop: true // 是否循环显示特效
    },
    large: false, // 是否启用大规模路径图的优化，在数据图形特别多的时候（>=5k）可以开启
    largeThreshold: 2000, // 开启绘制优化的阈值
    symbol: 'none', // 线两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定
    lineStyle: {
      normal: {
        width: 2, // 尾迹线条宽度
        opacity: 1, // 尾迹线条透明度
        curveness: 0.3, // 尾迹线条曲直度
        color: color
      }
    },
    zlevel: 2, // 路径图所有图形的 zlevel 值
    data: data // 线数据集
  }
}

export const getMarker = (data, color = '#87DAED') => {
  return {
    type: 'scatter', // 散点（气泡）图
    coordinateSystem: 'geo', // 使用的坐标系
    symbol: 'image://' + imgMarker, // 标记的图形
    symbolSize: 30, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高
    symbolOffset: ['1', '-8'], // 标记相对于原本位置的偏移
    label: {
      show: true,
      color: color,
      position: 'right', // 显示位置
      offset: [5, 5], // 偏移设置
      formatter: function (params) { // 圆环显示文字
        return params.data.name
      },
      fontSize: 13
    },
    emphasis: {
      label: {
        show: true
      }
    },
    data: data, // 系列中的数据内容数组
    zlevel: 3 // 所有图形的 zlevel 值
  }
}

export const getEffectScatter = (data, color = 'rgba(241, 109, 115, .8)') => {
  return {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    showEffectOn: 'render',
    symbolSize: 9,
    label: {
      show: true,
      color: color,
      position: 'right', // 显示位置
      offset: [20, 0], // 偏移设置
      formatter: function (params) { // 圆环显示文字
        return params.data.name
      },
      fontSize: 13
    },
    rippleEffect: {
      period: 15,
      scale: 6,
      brushType: 'fill'
    },
    hoverAnimation: true,
    itemStyle: {
      normal: {
        color: color,
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    zlevel: 2,
    data: data
  }
}
