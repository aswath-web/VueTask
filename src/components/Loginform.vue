<template>
  <form @submit.prevent="login">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button>Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
    alert()
      localStorage.setItem('username',this.username);
      this.$router.push('/employee')
     // event.preventDefault();
      //this.$emit('login-success', this.username);
    }
  }
};
</script>
