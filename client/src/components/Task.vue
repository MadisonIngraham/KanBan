<template>
  <div class="task">
    <div :data-target="'#modal' + taskData._id" data-toggle="modal">
      <p>{{ taskData.title }}</p>
    </div>
    <div
      class="modal fade"
      :id="'modal' + taskData._id"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column">
            <button type="button" class="close" data-dismiss="modal">
              <i class="fas fa-times fa-1x"></i>
            </button>
            <h5 class="modal-title" id="taskTitle">{{ taskData.title }}</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createComment" class="group">
              <input id="comment-form" type="text" name="content" v-model="newComment.content" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Enter comment</label>
            </form>

            <comment :comData="comment" v-for="comment in comments" :key="comment.id" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              class="btn btn-danger"
              @click="deleteTask(taskData._id)"
            >Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./Comment";
export default {
  name: "Task",
  props: ["taskData"],
  components: {
    Comment
  },
  mounted() {
    this.$store.dispatch("getComments", this.taskData._id);
    this.$store.dispatch("setActiveList", this.taskData.listId);
  },
  data() {
    return {
      newComment: {
        content: "",
        authorId: this.$store.state.activeBoard.authorId,
        boardId: this.taskData.boardId,
        listId: this.taskData.listId,
        taskId: this.taskData._id
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("modal");
    },
    opened() {
      this.$refs.description.focus();
    },
    hide() {
      this.$modal.hide("modal");
    },
    createComment() {
      let comment = { ...this.newComment };
      this.$store.dispatch("createComment", comment);
      this.newComment = {
        content: ""
      };
    },
    deleteTask(taskId) {
      this.$store.dispatch("deleteTask", taskId);
    }
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.taskData._id] || [];
    }
  }
};
</script>

<style scoped>
template {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #593196;
  --pink: #e83e8c;
  --red: #fc3939;
  --orange: #fd7e14;
  --yellow: #efa31d;
  --green: #13b955;
  --teal: #20c997;
  --cyan: #009cdc;
  --white: #fff;
  --gray: #868e96;
  --gray-dark: #343a40;
  --primary: #593196;
  --secondary: #a991d4;
  --success: #13b955;
  --info: #009cdc;
  --warning: #efa31d;
  --danger: #fc3939;
  --light: #f9f8fc;
  --dark: #17141f;
}

.close {
  height: 0;
  color: #593196;
}

p {
  text-align: center;
}

.btn-primary {
  background-color: #593196;
  border: 1px solid #593196;
  -webkit-box-shadow: 0 0 5px #703ebc;
  box-shadow: 0 0 5px #703ebc;
}
.task {
  border: 1px solid black;
  margin: 5%;
  border: 1px solid #593196;
  font-family: "Montserrat", sans-serif;
}

i {
  color: #22054d;
  text-shadow: none;
}

.modal-header {
  background-color: #868e96;
  color: white;
}

input {
  margin-top: 10px;
}

#top-save {
  margin-left: 5pt;
}

#comment-form {
  width: -webkit-fill-available;
}
.btn:focus,
.btn:active,
.btn:active:focus,
.btn.active:focus {
  outline: none;
}

.btn-secondary {
  background-color: #fff;
  border-color: #ccc;
  color: #17141f;
}

.btn-secondary:hover {
  background-color: #ededed;
  border-color: #adb5bd;
  color: #17141f;
}

.btn-secondary.disabled {
  background-color: #fff;
  border-color: #d9d9d9;
  color: #231e2f;
}

.btn-warning {
  color: #fff;
}

.btn-primary:focus {
  -webkit-box-shadow: 0 0 5px #703ebc;
  box-shadow: 0 0 5px #703ebc;
}

.btn-secondary:focus {
  -webkit-box-shadow: 0 0 5px #cbc8d0;
  box-shadow: 0 0 5px #cbc8d0;
}

.btn-success:focus {
  -webkit-box-shadow: 0 0 5px #18e76a;
  box-shadow: 0 0 5px #18e76a;
}

.btn-info:focus {
  -webkit-box-shadow: 0 0 5px #10b9ff;
  box-shadow: 0 0 5px #10b9ff;
}

.btn-warning:focus {
  -webkit-box-shadow: 0 0 5px #f2b64d;
  box-shadow: 0 0 5px #f2b64d;
}

.btn-danger {
  -webkit-box-shadow: 0 0 5px #fd6b6b;
  box-shadow: 0 0 5px #fd6b6b;
}

.btn.disabled:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
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
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
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
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
