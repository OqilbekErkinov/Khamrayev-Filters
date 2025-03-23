<template>
    <div class="filter-search">
        <!-- Modal -->
        <div v-if="showModal" class="modal-overlayy">
            <div class="modal-contentt">
                <p style="color: #04315b">✅ Ваш запрос отправлен! Мы скоро свяжемся с вами!</p>
            </div>
        </div>
        <div class="filter-search-content">
            <div class="row">
                <!-- Left Side: Title and Description -->
                <div class="col-12 col-md-6 col-lg-4 left_foot">
                    <h3 class="filter-title mb-4">НЕ НАШЛИ ФИЛЬТР?</h3>
                    <p class="filter-description">
                        Отправьте запрос, и наши профессиональные менеджеры подберут лучшее решение!
                    </p>
                </div>
                <!-- Right Side: Form -->
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
const phoneError = ref("");


const formData = ref({
    name: "",
    phone_number: "",
    email: "",
    message: "",
});

const isValidPhoneNumber = (phone) => {
    return phone.startsWith("+") && phone.replace(/\D/g, "").length >= 12;
};

const isSubmitting = ref(false);
const showModal = ref(false);

const sendFilterRequest = async () => {
    if (isSubmitting.value) return;

    if (!isValidPhoneNumber(formData.value.phone_number)) {
        phoneError.value = "Пожалуйста, введите свой полный номер телефона!";
        return;
    }

    isSubmitting.value = true;

    try {
        const response = await axios.post("https://filtersapi.divspan.uz/api/v1/filter-request/", formData.value);
        if (response.data.success) {
            formData.value = {
                name: "",
                phone_number: "",
                email: "",
                message: "",
            };
            showModal.value = true;
            setTimeout(() => {
                showModal.value = false;
            }, 1000);
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
        isSubmitting.value = false;
    }
};

</script>