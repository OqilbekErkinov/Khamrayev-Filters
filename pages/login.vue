<template>
    <div class="login-container text-center">
      <h3>Логин</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Введите вашу почту" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Пароль:</label>
          <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
        </div>
        <button type="submit" class="btn login-btn mt-4 mb-3">Войти</button>
      </form>
      <p class="mt-3">Нет аккаунта? <NuxtLink to="/register" class="signup-link">Зарегистрироваться</NuxtLink></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const form = ref({
      email: "",
      password: "",
  });
  
  const isSubmitting = ref(false);
  const errorMessage = ref("");
  
  const handleLogin = async () => {
      if (isSubmitting.value) return;
      isSubmitting.value = true;
      errorMessage.value = "";
  
      try {
          const response = await axios.post("http://127.0.0.1:8088/api/v1/login/", form.value);
          if (response.data.success) {
              // Tokenni saqlaymiz va bosh sahifaga yo‘naltiramiz
              localStorage.setItem("token", response.data.token);
              window.location.href = "/";
          }
      } catch (error) {
          errorMessage.value = error.response?.data?.message || "Login xatoligi!";
      } finally {
          isSubmitting.value = false;
      }
  };
  </script>
  
  
  <style scoped>
  .login-container {
    background: #04315b;
    background-image: url("/icons/background.svg");
    padding: 2.5rem 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    color: white;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
  .login-container input {
    color: white;
  }
  .form-control {
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background: rgba(245, 244, 244, 0.1);
    color: white;
    border: none;
    outline: none;
    font-family: "Clash Display Variables", sans-serif;
  }
  .form-control::placeholder {
    color: white;
  }
  .form-control:focus {
    outline: none;
    box-shadow: 0 0 7px rgba(255, 255, 255, 0.801);
  }
  .form-label {
    display: flex;
    justify-content: start;
  }
  .login-btn {
    background: #b4232b;
    color: white;
    padding: 0.35rem 2.5rem;
    border: none;
    border-radius: 6px;
    letter-spacing: 1.2px;
    font-weight: 600;
    font-family: "Clash Display Variable", sans-serif;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .login-btn:hover {
    background: #d2000c;
  }
  .signup-link {
    color: red;
    font-weight: bold;
  }
  </style>
  