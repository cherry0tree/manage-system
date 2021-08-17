<template>
<div class="screenContainer" :style="containerStyle">
  <div class="backGround">
    <div class="screenHeader">
      <img src="./img/header.png" alt="">
      <div class="headerRight">
        <div><span>{{dateNow}}</span> <span>{{dateTimeNow}}</span></div>
      </div>
      <div class="location">
        <img src="./img/location.png" alt="">
        <span>当前位置：成都市新都区</span>
      </div>
    </div>
    <div class="screenContent">
      <div class="contentLeft">
        <div class="patientInfoBox">
          <div class="sexRatioBox">
            <img src="./img/point.png" alt="">
            <div class="title">
              患者性别比例
            </div>
          </div>
          <div class="ageRationBox">
            <div class="manBox">
              <img src="./img/man.png" alt="">
              <div class="ration">60%</div>
            </div>
            <div class="womanBox">
              <img src="./img/woman.png" alt="">
              <div class="ration">80%</div>
            </div>
          </div>
        </div>
        <div class="arriveTimeBox">
        </div>
      </div>
      <div class="contentMiddle">
        <div class="regionBox"></div>
        <div class="patientInfoTab">
        </div>
      </div>
      <div class="contentRight">
        <div class="distributionChart">
        </div>
        <div class="popDoctorChart">
        </div>
        <div class="patientDiseasesChart">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      containerStyle: '',
      dateTimeNow:'',
      dateNow: '',
      timer: null   
    }
  },
  mounted () {
    const that = this;
    this.refreshScale();
    this.renderClock();
    window.onresize = function () {
      that.refreshScale();
    };    
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    refreshScale () {
      let baseWidth = document.documentElement.clientWidth;
      let baseHeight = document.documentElement.clientHeight;
      let realRatio = baseWidth/baseHeight;
      let designRatio = 16/9;
      let scaleRate =  baseWidth/1920;
      if(realRatio>designRatio){
        scaleRate = baseHeight/1080;
      }
      this.containerStyle =
        `transform:scale(${scaleRate}); transform-origin:left top; width: ${baseWidth/scaleRate}px`;
    },
    renderClock(){
      this.dateNow = moment().format('yyyy-MM-DD');
      this.timer = setInterval(() => {
        let dateTimeNow = moment().format('HH:mm:ss');
        this.dateTimeNow = dateTimeNow;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.screenContainer{
  width: 1920px;
  height: 1080px;
  background: #03091F;
  display: flex;
  justify-content: center;
  .backGround{
    background: url(./img/bg.png) no-repeat;
  }
}
.screenHeader{
  position: relative;
  img {
    //解决div包裹img留白
    vertical-align:bottom;
  }
  .headerRight{
    position: fixed;
    right: 0px;
    top: 15px;
    width: 167px;
    height: 16px;
    margin-right: 33px;
    font-size: 16px;
    font-family: 'SourceHanSansCN-Regular', 'SourceHanSansCN';
    font-weight: 400;
    color: #FFFFFF;
    line-height: 24px;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  .location{
    position: fixed;
    top: 68px;
    img {
      margin-left: 24px;
    }
    span {
      width: 154px;
      height: 14px;
      font-size: 14px;
      margin-left: 8px;
      font-family: 'SourceHanSansCN-Normal', 'SourceHanSansCN';
      font-weight: 400;
      color: rgba(255, 255, 255, 0.4);
      line-height: 21px;      
    }
  }
}
.screenContent{
  display: flex;
  justify-content: space-between;
  .contentLeft{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .patientInfoBox{
      margin-left: 24px;
      width: 473px;
      height: 383px;
      background: url(./img/frameLeftTop.png) no-repeat;
      .sexRatioBox{
        display: flex;
        margin-top: 15px;
        img {
          margin: 0 9px 0 17px;
        }
        .title{
          height: 18px;
          font-size: 18px;
          font-family: 'PangMenZhengDao';
          font-weight: bold;
          color: #DBEAFF;
          line-height: 21px;        
        }
      }
      .ageRationBox {
        display: flex;
        justify-content: space-between;
        .manBox{
          margin-left: 48px;
        }
        .womanBox{
          margin-right: 46px;
        }
        .manBox, .womanBox {
          display: flex;
          .ration{
            margin:  30px 0 0 15px;
            width: 56px;
            height: 43px;
            font-size: 32px;
            font-family: 'Bebas';
            color: #F7FAFF;
            line-height: 43px;            
          }
        }
      }
    }
    .arriveTimeBox{
      margin: 11px 0 0 24px;
      width: 473px;
      height: 536px;      
      background: url(./img/frameLeftBottom.png) no-repeat;
    }    
  }
  .contentMiddle {
    .regionBox{
      height: 630px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }
    .patientInfoTab{
      width: 894px;
      height: 301px;
      background: url(./img/frameBottom.png) no-repeat;    
    }
  }
  .contentRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 25px;
    .distributionChart{
      width: 473px;
      height: 296px;
      background: url(./img/frameRightTop.png) no-repeat;   
    }
    .popDoctorChart{
      width: 473px;
      height: 319px;
      background: url(./img/frameRightMiddle.png) no-repeat;
    }
    .patientDiseasesChart{
      width: 473px;
      height: 299px;
      background: url(./img/frameRightBottom.png) no-repeat;     
    }
  }
}
</style>