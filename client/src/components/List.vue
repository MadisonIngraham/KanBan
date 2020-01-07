<template>
  <div class="list">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{listData.title}}</div>
      <div class="card-body">
        <form @submit.prevent="createTask">
          <input type="text" placeholder="title" v-model="newTask.title" required />
          <button type="submit">Create Task</button>
        </form>
        <task :taskData="task" v-for="task in tasks" :key="task.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "List",
  props: ["listData"],
  components: {
    Task
  },
  data() {
    return {
      newTask: {
        title: "",
        boardId: this.$route.params.boardId,
        authorId: this.$store.state.activeBoard.authorId,
        listId: this.listData._id
      }
    };
  },
  mounted() {
    this.$store.dispatch("getTasks", this.listData._id);
  },
  methods: {
    createTask() {
      let task = { ...this.newTask };
      this.$store.dispatch("createTask", task);
      this.newTask = {
        title: ""
      };
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks[this.listData._id] || [];
    }
  }
};
</script>

<style scoped>
</style>
