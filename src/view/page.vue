<template>
  <div class="main_content">
    <div class="header">
      <div class="header_item" v-for="(item,index) in headerList" :key="index">
        <div class="item_content">
          {{item.name + '：' + item.value}}
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_left">
        <Map class="map"/>
      </div>
      <div class="footer_right">
        <div class="footer_right_item">
          <div class="title">救援专家分析</div>
          <div class="echarts_content">
             <circular-echarts :option="option"/>
          </div>
        </div>
        <div class="footer_right_item middle">
          <div class="title">应急预案分析</div>
          <div class="echarts_content">
            <line-echarts/>
          </div>
        </div>
        <div class="footer_right_item">
          <div class="title">事故次数</div>
          <div class="echarts_content">
            <happened-echarts/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../view/assets/css/style.css'
import Map from './components/map'
import lineEcharts from './components/views/lineEcharts'
import circularEcharts from './components/views/circularEcharts'
import happenedEcharts from './components/views/happenedEcharts'
export default {
  data(){
    return{
       headerList:[
        {name:'应急预案',value:'0个'},
        {name:'专家数量',value:'0人'},
        {name:'应急演练',value:'0次'},
        {name:'事故次数',value:'0次'}
      ],
      option: {
        unit: '件',
        template: [
          { value: 12, name: '东山矿', color: ['#FF562E', '#FF7B25'] },
          { value: 34, name: '东荣矿', color: ['#FFB100', '#FFB100'] },
          { value: 21, name: '新兴矿', color: ['#414CFF', '#007FFF'] },
          { value: 43, name: '俊德矿', color: ['#00BDF2', '#0CD3C0'] }
        ]
      }

    }
  },
  components:{
    Map,
    lineEcharts,
    circularEcharts,
    happenedEcharts
  }
}
</script>
<style lang="scss" scoped>
.main_content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #042360;
  .header{
    height: 20%;
    display: flex;
    .header_item{
      flex: 1;
      height: 100%;
      .item_content{
        margin: 0 auto;
        margin-top: 5%;
        width: 80%;
        height: 70%;
        line-height: 13vh;
        font-size: 20px;
        color: #45a1ff;
        text-align: center;
        box-sizing: border-box;
        background: rgba(11,63,161,0.30);
        border: 1px solid rgba(113,135,205,0.20);
        box-shadow: 0 5px 6px 0 rgba(0,0,0,0.30), inset 0 0 2px 0 #215EDA;
      }
    }
  }
  .footer{
    flex: 1;
    display: flex;
    .footer_left{
      height: 100%;
      flex: 1;
      .map{
        border: none;
      }
    }
    .footer_right{
      width: 25%;
      display: flex;
      flex-direction: column;
      .footer_right_item{
        flex: 1;
        display: flex;
        flex-direction: column;
        background: rgba(11,63,161,0.30);
        border: 1px solid rgba(113,135,205,0.20);
        box-shadow: 0 5px 6px 0 rgba(0,0,0,0.30), inset 0 0 2px 0 #215EDA;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 6%;
        .title{
          height: 15%;
          text-align: center;
          color: #92b2fa;
          font-size: 18px;
          line-height: 4vh;
        }
        .echarts_content{
          flex: 1;
          
        }
      }
      .middle{
        margin: 2% 0;
      }

    }
  }
}
</style>
