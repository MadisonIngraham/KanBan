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
    getBoards({ commit, dispatch }) {
      api.get("boards").then(res => {
        commit("setResource", { resource: "boards", data: res.data });
      });
    },
    async getBoardById({ commit, dispatch }, id) {
      let res = await api.get("boards/" + id);
      commit("setActiveBoard", res.data);
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post("boards", boardData).then(serverBoard => {
        dispatch("getBoards");
      });
    }
  }
};
