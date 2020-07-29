<template>
  <div class="container">
    <header class="container__header">
      <div class="search">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          v-model="search"
          @input="searchSubreddit(search)"
          @keyup.13="searchSubreddit(search)"
        />
      </div>
      <div class="container__header-filter">
        <p>FILTER:</p>
        <input
          type="date"
          name=""
          id=""
          class="date"
          v-model="date"
          @input="filterByDate(date)"
        />
        <select
          v-model="selected"
          @change="filterByUpvote(selected)"
          class="select"
        >
          <option v-for="(option, i) in options" :value="option.value" :key="i">
            {{ option.name }}
          </option>
        </select>
        <div class="radio">
          <div class="radio--item">
            <input
              type="radio"
              id="most"
              value="most"
              v-model="vote"
              @change="getSubreddit()"
            />
            <label for="most">Most upvotes</label>
          </div>
          <div class="radio--item">
            <input
              type="radio"
              id="least"
              value="least"
              v-model="vote"
              @change="getSubreddit()"
            />
            <label for="least">Least upvotes</label>
          </div>
        </div>
      </div>
    </header>
    <main class="container__body">
      <div
        v-for="(post, title, i) in subreddits"
        :key="i"
        class="container__body-title"
      >
        <h3>{{ title }}</h3>
        <div v-for="(item, j) in post" :key="j" class="">
          <card :post="item.data"></card>
        </div>
      </div>
      <div v-if="loading" class="loader">
        <div v-for="item in 8" :key="item" class="loader__item">
          <loader />
        </div>
      </div>
      <div
        v-if="Object.keys(subreddits).length === 0 && !loading"
        class="empty"
      >
        <h3>No result found</h3>
      </div>
    </main>
  </div>
</template>

<script>
import createNamespacedHelpers from "vuex";
const { mapState } = createNamespacedHelpers;
import moment from "moment";

export default {
  name: "Home",
  components: {
    Loader: () => import("@/components/Loader.vue"),
    Card: () => import("@/components/Card.vue")
  },
  data() {
    return {
      subreddits: [],
      search: "",
      date: null,
      selected: null,
      vote: "most",
      options: [
        { name: "Select upvotes", value: null },
        { name: "1-1,000", value: [1, 1000] },
        { name: "1,001 - 5,000", value: [1001, 5000] },
        { name: "5,001 - 10,000", value: [5001, 10000] },
        { name: "10,001 - 15,000", value: [10001, 15000] },
        { name: "15,001 - 20,000", value: [15001, 20000] },
        { name: "20,001 - 25,000", value: [20001, 25000] },
        { name: "25,001 - 50,000", value: [25001, 50000] },
        { name: "50,001 - 100,000", value: [50001, 100000] },
        { name: "100,000 and above", value: [100000] }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("fetchAllPost").then(() => {
      this.getSubreddit();
    });
  },
  computed: {
    ...mapState(["allPosts", "loading"])
  },
  methods: {
    moment(date) {
      return moment(date);
    },
    getSubreddit(data) {
      let result;
      if (data) {
        result = data;
      } else result = this.allPosts;
      this.subreddits = result.reduce((acc, x) => {
        const subreddit = x.data.subreddit;
        if (acc[subreddit]) {
          acc[subreddit].push(x);
        } else {
          acc[subreddit] = [x];
        }

        if (this.vote == "most") {
          acc[subreddit].sort((a, b) => b.data.ups - a.data.ups);
        } else {
          acc[subreddit].sort((a, b) => a.data.ups - b.data.ups);
        }
        return acc;
      }, {});
    },
    searchSubreddit(data) {
      if (!data) {
        return this.getSubreddit();
      }
      const result = this.allPosts.filter(el => {
        return el.data.name.toLowerCase().includes(data.toLowerCase());
      });
      this.getSubreddit(result);
    },
    filterByDate(date) {
      if (!date) {
        return this.getSubreddit();
      }
      const result = this.allPosts.filter(el => {
        return moment(el.data.created).format("YYYY-MM-DD") === date;
      });
      this.getSubreddit(result);
    },
    filterByUpvote(data) {
      if (!data) {
        return this.getSubreddit();
      }
      const result = this.allPosts.filter(el => {
        return data[0] < el.data.ups && el.data.ups < data[1];
      });
      this.getSubreddit(result);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
</style>
