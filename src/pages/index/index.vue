<template>
  <view class="content">
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>

    <view> 我是一条鱼 </view>
  </view>
</template>

<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { useMapState } from "@/hooks/useMapState";

const token = useMapState("token");
console.log(token);

onLoad((options) => {});
onShow(() => {});
onMounted(() => {});

const title = ref("hello world");
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
