<template>
  <div class="board">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div id="icon-title-group" @click="goToHomePage">
          <i class="fas fa-globe fa-2x"></i>

          <h2 class="ml-3">{{ board.title }}</h2>
        </div>
        <div class="m-4">
          <form @submit="createList">
            <input type="text" id="title" v-model="newList.title" required />
            <button class="btn btn-secondary" type="submit">Create List</button>
          </form>
        </div>
      </nav>
    </header>
    <div id="body" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div id="background-img">
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" class="btn btn-dropdown">Background</button>
          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <img
                @click.prevent="
                  setBackground('https://wallpaperaccess.com/full/267871.jpg')
                "
                src="https://wallpaperaccess.com/full/267871.jpg"
                alt="bridge"
              />
              <img
                @click.prevent="
                  setBackground(
                    'https://cdn.hipwallpaper.com/i/81/49/YJ4T3p.jpg'
                  )
                "
                src="https://cdn.hipwallpaper.com/i/81/49/YJ4T3p.jpg"
                alt="scenic"
              />
              <img
                @click.prevent="
                  setBackground(
                    'https://www.itl.cat/pngfile/big/155-1558020_empty-office-hd-wallpaper-men-window.jpg'
                  )
                "
                src="https://www.itl.cat/pngfile/big/155-1558020_empty-office-hd-wallpaper-men-window.jpg"
                alt="office"
              />
              <img
                @click.prevent="
                  setBackground(
                    'http://getwallpapers.com/wallpaper/full/4/7/5/141079.jpg'
                  )
                "
                src="http://getwallpapers.com/wallpaper/full/4/7/5/141079.jpg"
                alt="keyboard"
              />
              <img
                @click.prevent="
                  setBackground('https://wallpapercave.com/wp/rhIs8kJ.jpg')
                "
                src="https://wallpapercave.com/wp/rhIs8kJ.jpg"
                alt="tiger"
              />
              <img
                @click.prevent="
                  setBackground(
                    'http://3.bp.blogspot.com/-wy5kJWK2NWY/UQW6tyrRWyI/AAAAAAAALzI/0aDOT3fpG9c/s1600/black-and-white-wallpaper-with-shark-hd-animal-background-photo.jpg'
                  )
                "
                src="http://3.bp.blogspot.com/-wy5kJWK2NWY/UQW6tyrRWyI/AAAAAAAALzI/0aDOT3fpG9c/s1600/black-and-white-wallpaper-with-shark-hd-animal-background-photo.jpg"
                alt="shark"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex" id="list-col">
        <list :listData="list" v-for="list in lists" :key="list.id" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "../components/List";
import router from "../router";

export default {
  name: "board",
  components: {
    List
  },
  props: ["boardId"],
  mounted() {
    this.$store.dispatch("getBoardById", this.$route.params.boardId);
    this.$store.dispatch("getLists", this.$route.params.boardId);
  },
  methods: {
    createList() {
      let list = { ...this.newList };
      this.$store.dispatch("createList", list);
      this.newList = {
        title: ""
      };
    },
    goToHomePage() {
      router.push({ name: "boards" });
    },
    setBackground(url) {
      this.$store.dispatch("setBackground", url);
    }
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId,
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
    },
    image() {
      return this.$store.state.activeImage;
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

img {
  padding: 5px; /* Some padding */
  width: 150px; /* Set a small width */
}

img:hover {
  box-shadow: 0 0 2px 1px #593196;
}

#background-img {
  display: flex;
  justify-content: flex-end;
}

#body {
  height: 85%;
  background-size: cover;
  background-repeat: no-repeat;
}

.board {
  height: 100%;
}

.dropdown-menu {
  transform: translate3d(-280px, 38px, 0px);
  min-width: 20rem;
  text-align: center;
  border: none;
  background-color: transparent;
}

.btn-primary.focus,
.btn-primary:focus {
  box-shadow: none;
}

.btn.focus,
.btn:focus {
  outline: none;
  box-shadow: none;
}

.btn-dropdown,
.dropdown-toggle {
  color: black;
  background-color: white;
  border: none;
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  background-color: #2a0566;
  border-color: #2a0566;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: none;
}

.btn-secondary {
  border-radius: 0;
  height: 30px;
  padding: 1%;
  margin-bottom: 2px;
  width: 120px;
}

h2 {
  color: white;
  font-family: "Montserrat Subrayada", sans-serif;
  margin-left: 10px;
  margin-bottom: 0px;
}

i {
  color: white;
  margin-left: 20px;
}

.bg-primary {
  background-color: #593196 !important;
}

#icon-title-group {
  display: flex;
  align-items: center;
}

#list-col {
  justify-content: space-around;
  margin-top: 20px;
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
