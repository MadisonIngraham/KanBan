<template>
  <div class="login" id="login-row">
    <i class="fas fa-globe fa-5x"></i>
    <h1>PLAN-IT</h1>
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input type="email" v-model="creds.email" placeholder="email" />
      <input type="password" v-model="creds.password" placeholder="password" />
      <button class="btn btn-success" type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name" />
      <input type="email" v-model="newUser.email" placeholder="email" />
      <input type="password" v-model="newUser.password" placeholder="password" />
      <button class="btn btn-warning" type="submit">Create Account</button>
    </form>
    <div class="action mt-1" @click="loginForm = !loginForm">
      <p v-if="loginForm">No account? Click here to Register</p>
      <p v-else>Already have an account? Click here to Login</p>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "boards" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
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
#login-row {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

i {
  color: white;
  margin-bottom: 15px;
}

h1 {
  color: white;
  font-family: "Montserrat Subrayada", sans-serif;
  margin-bottom: 10pt;
}

p {
  margin: 0;
  color: white;
}

.login {
  background-color: #593196;
  height: 100%;
  margin: 0;
}
.action {
  cursor: pointer;
}
</style>
