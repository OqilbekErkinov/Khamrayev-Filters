<template>
  <div class="signup-container text-center">
    <h3>Регистрация</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Имя:</label>
        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Введите ваше имя" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Введите вашу почту" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль:</label>
        <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
      </div>
      <button type="submit" class="btn register mb-3" :disabled="isSubmitting">
        {{ isSubmitting ? "Подождите..." : "Регистрация" }}
      </button>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </form>
    <button class="btn social-btn google-btn">
      <img src="/images-webp/google.webp" alt="Google" class="iconn"> Войти через Google
    </button>
    <p class="mt-3">У вас есть аккаунт? <NuxtLink to="/login" class="signin-link">Войти</NuxtLink></p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const isSubmitting = ref(false);
const errorMessage = ref("");

const form = ref({
  name: "",
  email: "",
  password: "",
});
const handleSubmit = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  errorMessage.value = "";
  try {
    const response = await axios.post("http://127.0.0.1:8088/api/v1/register/", form.value);
    if (response.data.success) {
      window.location.href = "/login";
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Xatolik yuz berdi!";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<style scoped>
.signup-container {
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
.signup-container input {
  color: white;
}
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background: rgba(245, 244, 244, 0.1);
  color: white;
  font-weight: bold;
}
.iconn {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.google-btn {
  border-color: #4285F4;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.signin-link {
  color: red;
  font-weight: bold;
}
.form-control {
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(245, 244, 244, 0.1);
  color: white;
  border: none;
  border-radius: 4px;
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
.register {
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
.register:hover {
  background: #d2000c;
}
</style>