<template>
  <view class="content">
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>

    <view>我的设备是：{{ $model }}</view>
    <view>
      <image :src="state.detail.listImg"></image>
    </view>
    <van-button type="primary">主要按钮</van-button>
  </view>
</template>

<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app";
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import { useMapState } from "@/hooks/useMapState";
import request from "@/utils/request";
import { EXPORT_API } from "@/api/index.js";

const { proxy } = getCurrentInstance();

const token = useMapState("token");
console.log(token);
console.log(proxy.$model);

onLoad((options) => {});
onShow(() => {});
onMounted(() => {});

// 一个请求axios的栗子
const state = reactive({
  detail: {},
});
const init = async () => {
  const res = await request.get(EXPORT_API);
  state.detail = res.data;
};
init();

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
