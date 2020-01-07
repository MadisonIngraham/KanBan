<template>
  <div class="board container-fluid">
    <div class="row">
      <div class="col m-4">{{board.title}}</div>
      <div class="col m-4">
        <form @submit="createList">
          <input type="text" id="title" v-model="newList.title" required />
          <button type="submit">Create List</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <list :listData="list" v-for="list in lists" :key="list.id" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "../components/List";
export default {
  name: "board",
  components: {
    List
  },
  mounted() {
    this.$store.dispatch("getBoardById", this.$route.params.boardId);
    this.$store.dispatch("getLists", this.$route.params.boardId);
  },
  methods: {
    createList() {
      let list = { ...this.newList };
      this.$store.dispatch("createList", list);
      this.newList = {
        title: "",
        boardId: this.$store.state.activeBoard._id,
        authorId: ""
      };
    }
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$store.state.activeBoard._id,
        authorId: this.$store.state.activeBoard.authorId
      }
    };
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  props: ["boardId"]
};
</script>
