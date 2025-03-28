<template>
    <div class="filter-search">
        <!-- Modal -->
        <div v-if="showModal" class="toast-container">
            <div class="toast alert show" role="alert">
                ✅ Ваш запрос отправлен! Мы скоро свяжемся с вами!
            </div>
        </div>
        <div class="filter-search-content">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 left_foot">
                    <h3 class="filter-title mb-4">НЕ НАШЛИ ФИЛЬТР?</h3>
                    <p class="filter-description">
                        Отправьте запрос, и наши профессиональные менеджеры подберут лучшее решение!
                    </p>
                </div>
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="right_foot">
                        <form @submit.prevent="sendFilterRequest" class="filter-form">
                            <div class="form-grid">
                                <input v-model="formData.name" id="name" type="text" placeholder="Ваше имя"
                                    class="form-input" required />
                                <input v-model="formData.phone_number" id="phone_number" type="tel"
                                    placeholder="Номер телефона" class="form-input" required />
                                <p v-if="phoneError" class="error-message">{{ phoneError }}</p>
                                <input v-model="formData.email" id="email" type="email" placeholder="Почта"
                                    class="form-input" required />
                            </div>
                            <p class="mt-2">
                                Укажите любые характеристики фильтра или техники: наименование, производителя, артикул,
                                <br> марку и
                                модель.
                                Также уточните комплектацию, желаемые сроки поставки и предполагаемую цену.
                            </p>
                            <textarea v-model="formData.message" id="message" placeholder="Сообщение"
                                class="form-textarea" required></textarea>
                            <div style="display: flex; justify-content: right">
                                <button type="submit" :disabled="isSubmitting" class="submit-btnn">
                                    {{ isSubmitting ? "Отправка..." : "Отправить" }}</button>
                            </div>
                            <div v-if="successMessage">{{ successMessage }}</div>
                            <div v-if="errorMessage">{{ errorMessage }}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import emailjs from "@emailjs/browser";
import API_ENDPOINTS from "@/api/api";

const phoneError = ref("");
const isSubmitting = ref(false);
const showModal = ref(false);

const formData = ref({
  name: "",
  phone_number: "",
  email: "",
  message: "",
});
const isValidPhoneNumber = (phone) => {
  return phone.startsWith("+") && phone.replace(/\D/g, "").length >= 12;
};
const sendFilterRequest = async () => {
  if (isSubmitting.value) return;
  if (!isValidPhoneNumber(formData.value.phone_number)) {
    phoneError.value = "Iltimos, to'liq telefon raqamingizni kiriting!";
    return;
  }
  isSubmitting.value = true;
  try {
    console.log("Yuborilayotgan ma'lumotlar:", formData.value);
    const response = await axios.post(API_ENDPOINTS.FILTER_REQUEST, formData.value);
    console.log("Backend javobi:", response.data);
    if (response.data.success) {
      const emailResponse = await emailjs.send(
        "service_gpd70mo",
        "template_ujyjgpk",
        {
          name: formData.value.name,
          phone_number: formData.value.phone_number,
          email: formData.value.email,
          message: formData.value.message,
        },
        "MB119DkcMFoYBYPFo"
      );
      console.log("EmailJS javobi:", emailResponse);
      formData.value = {
        name: "",
        phone_number: "",
        email: "",
        message: "",
      };
      showModal.value = true;
      setTimeout(() => {
        showModal.value = false;
        console.log("Modal yopildi");
      }, 3000);
    }
  } catch (error) {
    console.error("Xatolik:", error.response ? error.response.data : error.message);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<style>
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}
.toast {
    max-width: 300px;
    box-shadow: 0px 4px 4px rgba(0, 255, 106, 0.205);
    border: rgba(0, 255, 64, 0.986), 0.4px solid;
    border-radius: 2px;
    background: #f4f4f4;
    color: #04d804;
    text-align: left;
}
</style>
