<template>
  <div class="boards">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="d-flex" id="logo-title-boards">
          <i class="fas fa-globe fa-2x"></i>
          <h2>PLAN-IT</h2>
        </div>
        <div>
          <button class="btn btn-secondary" type="button" @click="logout">
            Logout
          </button>
        </div>
      </nav>
    </header>
    <div class="centered">
      <form @submit.prevent="addBoard" class="group">
        <input
          type="text"
          placeholder="Title"
          id="title"
          v-model="newBoard.title"
          required
        />

        <button class="btn btn-primary" type="submit">Create Board</button>
        <div class="bar"></div>
      </form>
    </div>
    <div class="row d-flex board-btn">
      <div class="col">
        <div class="row" id="b-btns">
          <div class="col-3" v-for="board in boards" :key="board._id">
            <button id="board-card" class="btn btn-primary">
              <router-link
                :to="{ name: 'board', params: { boardId: board._id } }"
                id="router"
              >
                {{ board.title }}
              </router-link>
              <i
                @click="deleteBoard(board._id)"
                class="fas fa-trash"
                id="trash-icon"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    deleteBoard(boardId) {
      Swal.fire({
        title: "Delete this board?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("deleteBoard", boardId);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    logout() {
      this.$store.dispatch("logout");
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

.btn-primary {
  background-color: #593196;
  border: 1px solid #593196;
}
.btn-primary:hover {
  -webkit-box-shadow: 0 0 5px #703ebc;
  box-shadow: 0 0 5px #703ebc;
}

#router {
  color: white !important;
}

.board-btn {
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
}

#b-btns {
  margin: 3%;
}

#board-card {
  margin-top: 25px;
  width: 200px;
}
i {
  color: white;
  margin-left: 20px;
}

#logo-title-boards {
  align-items: center;
}

#trash-icon {
  color: var(--gray);
}

form {
  margin-top: 20pt;
  margin-bottom: 10pt;
}

h2 {
  color: white;
  font-family: "Montserrat Subrayada", sans-serif;
  margin-left: 10px;
  margin-bottom: 0px;
}

.bg-primary {
  background-color: #593196 !important;
}

#icon-title-group {
  display: flex;
}

nav {
  height: 15vh;
  justify-content: space-between;
}
.navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1.2rem 1rem;
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
  }
  .navbar-expand-lg .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid,
  .navbar-expand-lg > .container-sm,
  .navbar-expand-lg > .container-md,
  .navbar-expand-lg > .container-lg,
  .navbar-expand-lg > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

.navbar-dark .navbar-brand {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-text a {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: rgba(255, 255, 255, 0.9);
}
</style>
