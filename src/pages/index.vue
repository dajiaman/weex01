<template>
  <div>
    <list @loadmore="fetch" class="uni-list" loadmoreoffset="10">
      <card :item="value" :key="key" class="uni-list-cell" v-for="(value,key) in listData"></card>
    </list>
  </div>
</template>

<script>
import card from '@/components/card'
import Api from '@/utils/api.js'

export default {
  data () {
    return {
      listData: []
    }
  },
  components: {
    card
  },
  created () {
    this.listData = Api.getNews()
  },
  methods: {
    fetch () {
      this.listData.push(...Api.getNews())
    }
  }
}
</script>

<style>
/* 列表 */
.uni-list {
  width: 750px;
}
</style>
