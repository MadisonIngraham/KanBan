import Axios from "axios";

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api",
  timeout: 3000,
  withCredentials: true
});

export default {
  actions: {
    async createTask({ commit, dispatch }, task) {
      let res = await api.post("tasks", task);
      commit("setTasks", res.data);
      dispatch("getTasks", res.data.listId);
    },
    async getTasks({ commit, dispatch }, id) {
      let res = await api.get("lists/" + id + "/tasks");
      commit("setTasks", { listId: id, data: res.data });
    }
  }
};
