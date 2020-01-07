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
          <div class="modal-header">
            <h5 class="modal-title" id="taskTitle">
              {{ taskData.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form>
              <input type="text" placeholder="Enter description" />
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </form>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createComment">
              <input
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
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
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
    }
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.taskData._id] || [];
    }
  }
};
</script>
