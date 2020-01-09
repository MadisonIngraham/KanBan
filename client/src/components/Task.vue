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
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title" id="taskTitle">{{ taskData.title }}</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createComment">
              <input
                id="comment-form"
                type="text"
                name="content"
                v-model="newComment.content"
                placeholder="Enter comment"
              />
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </form>
            <comment
              :comData="comment"
              v-for="comment in comments"
              :key="comment.id"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              class="btn btn-danger"
              @click="deleteTask(taskData._id)"
            >
              Delete Task
            </button>
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
</style>
