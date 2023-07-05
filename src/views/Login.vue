<template>
  <div class="login-form">
    <h1 v-if="loggedIn" class="welcome-message">Hello, {{ username }}!</h1>
    <form @submit="login" class="form-container">
      <div class="form-group">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" v-model="username" class="form-input" />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" v-model="password" class="form-input" />
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
      username: '',
      password: ''
    };
  },
  methods: {
   
    login(event) {
      localStorage.setItem('username',this.username);
      event.preventDefault();
      this.loggedIn = true;
      this.$router.push("/employee")
    }
  }
};
</script>
<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.welcome-message {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
}

.form-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #45a049;
}
</style>