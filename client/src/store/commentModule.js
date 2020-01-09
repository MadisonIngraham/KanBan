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
    async createComment({ commit, dispatch }, comment) {
      let res = await api.post("comments", comment);
      commit("setComments", res.data);
      this.dispatch("getComments", res.data.taskId);
    },
    async getComments({ commit, dispatch }, id) {
      let res = await api.get("tasks/" + id + "/comments");
      commit("setComments", { taskId: id, data: res.data });
    },
    async deleteComment({ commit, dispatch }, comData) {
      await api.delete("comments/" + comData._id);
      dispatch("getComments", comData.taskId);
    }
  }
};
