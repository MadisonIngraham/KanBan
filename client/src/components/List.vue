<template>
<div class="list">
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header">
      {{ listData.title }}
      <i @click="deleteList(listData.id)" class="fas fa-times"></i>
    </div>
    <body class="card-body">
      <form @submit.prevent="createTask" class="group">
        <input type="text" v-model="newTask.title" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Enter task name</label>
      </form>

      <task :taskData="task" v-for="task in tasks" :key="task.id" />
    </body>
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
        boardId: this.listData.boardId,
        authorId: this.listData.authorId,
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
    },
    deleteList(listId) {
      this.$store.dispatch("deleteList", listId);
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
.list {
  margin: 1%;
}

button {
  margin: 1%;
  font-size: 8pt;
}

.border-primary {
  border-color: #593196 !important;
}

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
}

.card-header {
  background-color: #868e96;
  border-bottom: 0;
  color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  box-sizing: none;
  margin-top: -0.5px;
}

i {
  color: #593196;
}

.group {
  position: relative;
  margin-bottom: 45px;
  margin-top: 15px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 280px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #593196;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 280px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #593196;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #593196;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #593196;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #593196;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
