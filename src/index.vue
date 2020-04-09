<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>
<style scoped>
.app-wrapper {
  background-color: #f4f4f4;
}
.r-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
