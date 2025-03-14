<template>
    <div class="filter-search">
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
                        <form @submit.prevent="handleSubmit" class="filter-form">
                            <div class="form-grid">
                                <input type="text" placeholder="Ваше имя" v-model="form.name" class="form-input" />
                                <input type="tel" placeholder="Номер телефона" v-model="form.phone"
                                    class="form-input" />
                                <input type="email" placeholder="Почта" v-model="form.email" class="form-input" />
                            </div>
                            <p class="mt-2">
                                Укажите любые характеристики фильтра или техники: наименование, производителя, артикул,
                                <br> марку и
                                модель.
                                Также уточните комплектацию, желаемые сроки поставки и предполагаемую цену.
                            </p>
                            <textarea placeholder="Сообщение" v-model="form.message" class="form-textarea"></textarea>
                            <div style="display: flex; justify-content: right"> 
                            <button type="submit" class="submit-btnn">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
    name: "",
    phone: "",
    email: "",
    consent: false,
});

const handleSubmit = () => {
    console.log("Form submitted:", form.value);
};
</script>