<template>
  <div class="timeline-item">
    <div class="animated-background">
      <div class="background-masker header-top"></div>
      <div class="background-masker header-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables";
.timeline-item {
  background: rgb(180, 180, 180);
  border-bottom: 1px solid #f2f2f2;
  margin: 0 auto;
  position: relative;
  height: 100%;
  border-radius: 10px;
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 100%;
  position: relative;
  border-radius: 10px;
}
.background-masker {
  background: #fff;
  position: absolute;
  bottom: 0;
  margin: $base-gap * 2;
  height: 100%;
  &.header-top {
    bottom: 2px;
    left: 20px;
    right: 0;
    height: 10px;
    width: $base-width - 4;
  }
  &.header-bottom {
    bottom: 18px;
    height: 16px;
    left: 20px;
    right: 0;
    width: $base-width;
  }
}
</style>
