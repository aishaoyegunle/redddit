<template>
  <div class="card">
    <div class="card__title">
      <h6>title: {{ post.title }}</h6>
      <h6>name: {{ post.name }}</h6>
      <h6>votes: {{ post.ups }}</h6>
    </div>
    <div class="card__body">
      <figure>
        <img :src="post.thumbnail" :alt="post.name" />
        <figcaption>
          <a :href="post.url" target="_blank">{{ post.url }}</a>
          <p>Created {{ moment(post.created).format("DD MMM YYYY") }}</p>
        </figcaption>
      </figure>
    </div>
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
    }
  }
};
</script>
