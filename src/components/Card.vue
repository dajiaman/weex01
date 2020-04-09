<template>
  <cell class="uni-media-list">
    <div class="uni-media_header-box">
      <div class="uni-media_header">
        <image :src="item.cover" resize="cover" style="width: 90px;height:90px" ></image>
      </div>
      <div class="uni-media_header-info">
        <text class="uni-media_info-name">{{item.author_name}}</text>
        <text>{{item.published_at}} {{item.form}}</text>
      </div>
    </div>

    <div class="uni-media_content-box">
      <text class="uni-media_content-text">{{item.content}}</text>
      <div class="uni-media_content-iamges">
        <div
          :class="{'img_1':item.imgs.length === 1}"
          :key="index"
          v-for="(imgs,index) in item.imgs"
        >
        <image :src="imgs" resize="cover" style="width: 200px;height: 200px;" ></image>
        </div>
      </div>
    <div class="uni-media_groups">
      <div class="uni-media_groups-item">
        <text class="iconfont icon-fenxiang-copy"></text>
        <text>{{item.share}}万</text>
      </div>
      <div class="uni-media_groups-item">
        <text class="iconfont icon-pinglun"></text>
        <text>{{item.comment}}万</text>
      </div>
      <div @click="trigger" class="uni-media_groups-item">
        <text :class="{'active':isActive}" class="iconfont icon-dianzan1"></text>
        <text>{{item.thumbs}}万</text>
      </div>
    </div>
  </div>
  </cell>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      isActive: this.item.active
    }
  },
  methods: {
    trigger () {
      this.$router.push({path: '/list'})
    }
  }
}
</script>

<style>
.uni-media-list {
  background: #fff;
  margin-bottom: 20upx;
  width: 750px;
  border-bottom: 1px solid #c3c3c3;
}
.uni-media_header-box {
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
}
.uni-media_header {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px #f5f5f5 solid;
  overflow: hidden;
}

.uni-media_header-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4upx 0;
  padding-left: 20px;
  font-size: 26px;
  color: #999;
}
.uni-media_info-name {
  font-size: 36px;
  color: #ff5a5f;
}
.uni-media_content-box {
  /* padding: 20upx 0; */
}
.uni-media_content-text {
  font-size: 28px;
  color: #333;
  padding: 0 20px;
}
.uni-media_content-iamges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.uni-media_content-img {
  position: relative;
  width: 33.33%;
  height: 0;
  padding-top: 33.33%;
  box-sizing: border-box;
}
.img_1 {
  /* width: 375px;
  padding-top: 50%; */
}
.uni-media_content-img-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.uni-media_content-img-item image {
  /* width: 100%;
  height: 100%; */
}
.uni-media_groups {
  display: flex;
  flex-direction: row;
  height: 80px;
  border-top: 1px#f5f5f5 solid;
  margin: 0 20px;
}
.uni-media_groups-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #666;
  flex: 1;
}
.uni-media_groups-item .iconfont {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 28px;
  margin-right: 10px;
}
.uni-media_groups-item .active {
  color: #ff5a5f;
}
@font-face {
  font-family: 'iconfont';
  src: url('https://at.alicdn.com/t/font_1105050_zol10etauus.ttf?t=1553398395662')
    format('truetype');
  /* IE9 */
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-pinglun:before {
  content: '\e61b';
}
.icon-dianzan1:before {
  content: '\e600';
}
.icon-fenxiang-copy:before {
  content: '\e603';
}
</style>
