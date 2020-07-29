<template>
  <div class="card">
    <figure>
      <img
        :src="post.thumbnail"
        :alt="post.name"
        class="card__img"
        v-if="post.thumbnail.includes('.jpg' || '.gif' | '.png')"
      />
      <img
        src="https://via.placeholder.com/150"
        :alt="post.name"
        class="card__img"
        v-else
      />
      <figcaption class="card__details">
        <h5 class="card__details-title">{{ post.title }}</h5>
        <p>Name: {{ post.name }}</p>
        <p>Upvotes: {{ formatNumber(post.ups.toString()) }}</p>
        <div class="card__details-item">
          <p class="date">{{ moment(post.created).format("DD MMM, YYYY") }}</p>
          <a :href="post.url" target="_blank">Read more</a>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Card",
  props: ["post"],
  methods: {
    moment(date) {
      return moment(date);
    },
    formatNumber(number) {
      return number ? number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
</style>
