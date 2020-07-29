<template>
  <div class="timeline-item">
    <div class="animated-background">
      <div class="background-masker first-top"></div>
      <div class="background-masker first-center"></div>
      <div class="background-masker first-bottom"></div>
    </div>
    <div class="animated-background">
      <div class="background-masker first-top"></div>
      <div class="background-masker first-center"></div>
      <div class="background-masker first-bottom"></div>
    </div>
    <div class="animated-background">
      <div class="background-masker header-top"></div>
      <div class="background-masker header-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables";

.timeline-item {
  margin: $base-gap - 0.5 $base-gap * 2;
  position: relative;
  height: 100vh;
  border-radius: 5px;
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
  background: red;
  background-size: 800px 104px;
  height: 30%;
  position: relative;
  border-radius: 10px;
  margin-bottom: $base-gap * 2;
}
.background-masker {
  //   background: $bg-color;
  position: absolute;
  bottom: 0;
  margin: $base-gap * 2;
  height: 100%;
  &.first-top {
    top: 2px;
    left: 20px;
    right: 0;
    height: $base-width - 9;
    width: 30%;
  }
  &.first-center {
    top: 30px;
    left: 20px;
    right: 0;
    height: $base-width - 9.2;
    width: 40%;
  }
  &.first-bottom {
    bottom: 0px;
    left: 20px;
    right: 0;
    height: $base-width - 7;
    width: 90%;
  }
  &.header-top {
    bottom: 25px;
    left: 20px;
    right: 0;
    height: 10px;
    width: $base-width;
  }
  &.header-bottom {
    bottom: 0px;
    height: 16px;
    left: 20px;
    right: 0;
    width: 80%;
  }
}
</style>
