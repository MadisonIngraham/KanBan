import Axios from "axios";

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default {
  actions: {
    async createList({ commit, dispatch }, list) {
      let res = await api.post("lists", list);
      commit("addList", res.data);
    },
    async getLists({ commit, dispatch }, id) {
      let res = await api.get("boards/" + id + "/lists");
      commit("setResource", { resource: "lists", data: res.data });
    }
  }
};
