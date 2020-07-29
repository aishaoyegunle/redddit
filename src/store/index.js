import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    allPosts: [],
    loading: false
  },
  mutations: {
    POST_MUTATIONS(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    fetchAllPost({ commit }) {
      commit("POST_MUTATIONS", {
        key: "loading",
        value: true
      });
      return new Promise((resolve, reject) => {
        axios
          .get("https://www.reddit.com/.json")
          .then(response => {
            commit("POST_MUTATIONS", {
              key: "allPosts",
              value: response.data.data.children
            });
            commit("POST_MUTATIONS", {
              key: "loading",
              value: false
            });
            resolve(response);
          })
          .catch(error => {
            reject(error);
            commit("POST_MUTATIONS", {
              key: "loading",
              value: false
            });
          });
      });
    }
  },
  modules: {}
});
