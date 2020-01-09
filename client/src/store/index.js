import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import boardModule from "./boardModule";
import listModule from "./listModule";
import taskModule from "./taskModule";
import commentModule from "./commentModule";
import { STATES } from "mongoose";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    boardModule,
    listModule,
    taskModule,
    commentModule
  },
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
    comments: {},
    activeList: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    setActiveBoard(state, board) {
      state.activeBoard = board;
    },

    addList(state, list) {
      state.lists.push(list);
    },

    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.data);
      console.log(state.tasks);
    },

    setComments(state, payload) {
      Vue.set(state.comments, payload.taskId, payload.data);
    },
    resetState(state) {
      state.user = {};
      state.boards = [];
      state.activeBoard = {};
      state.lists = [];
      state.tasks = {};
      state.comments = {};
      state.activeList = {};
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async deleteList({ commit, dispatch }, id) {
      await api.delete("lists/" + id);
      dispatch("getLists", this.state.activeBoard._id);
    },
    async deleteTask({ commit, dispatch }, id) {
      await api.delete("tasks/" + id);
      dispatch("getTasks", this.state.activeList._id);
    }
  }
});
