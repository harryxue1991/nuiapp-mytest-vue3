<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup>
  import { onLoad, onShow } from '@dcloudio/uni-app'
  import { ref } from "vue"
  onLoad((options) => {
    console.log(options)
    console.log('hello')
  })
  onShow(() => {
    console.log('onshow')
  })

  const title = ref('hello world')
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $uni-text-color;
}
</style>
