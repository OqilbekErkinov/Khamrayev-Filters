<template>
    <div class="oformit-page container">
        <!-- Modal -->
        <div v-if="showModal" class="toast-container">
            <div class="toast alert show" role="alert">
                ✅ Ваш запрос отправлен! Мы скоро свяжемся с вами!
            </div>
        </div>
        <h1 class="oformit-title">ОФОРМЛЕНИЯ ЗАКАЗА</h1>
        <div class="container oformit-container">
            <div class="oformit-form">
                <div class="oformit-card">
                    <h2>Покупатель</h2>
                    <form @submit.prevent="sendOformitProducts" style="margin-top: -25px;">
                        <div class="form-group">
                            <input type="text" id="name" v-model="formData.name" placeholder="Ваше имя" required />
                        </div>
                        <div class="form-group">
                            <input type="tel" id="phone_number" v-model="formData.phone_number"
                                placeholder="Номер телефона" required />
                            <p v-if="phoneError" class="error-message">{{ phoneError }}</p>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" v-model="formData.email" placeholder="Ваша почта" required />
                        </div>
                        <div class="form-group">
                            <textarea id="address" v-model="formData.address" placeholder="Адрес доставки" rows="4"
                                required></textarea>
                        </div>
                        <NuxtLink class="">
                            <button @click="sendOformitProducts" type="submit" :disabled="isSubmitting"
                                class="submit-btnnn">{{ isSubmitting ? "Отправка..." : "Отправить запрос" }}</button>
                        </NuxtLink>
                    </form>
                    <h2 class="mb-5 tovari-v">Товары в заказе</h2>
                    <div style="position: relative; display: flex; flex-direction: column; width: 100%;">
                        <div class="oformit-carddd p-3" style="display: flex; position: absolute; top: -50px;">
                            <!-- <div>
                                <p></p>
                            </div> -->
                            <div>
                                <p class="naim"
                                    style="font-weight: 100; font-size: 14px; margin-left: 9px; margin-top: 18px; color: #A7B7C6;">
                                    Наименование
                                </p>
                            </div>
                            <div>
                                <p class="vid"
                                    style="font-weight: 100; font-size: 14px; margin-left: 200px; margin-top: 18px; color: #A7B7C6;">
                                    Вид
                                </p>
                            </div>
                            <div>
                                <p class="proiz"
                                    style="font-weight: 100; font-size: 14px; margin-left: 105px; margin-top: 18px; color: #A7B7C6;">
                                    Производитель</p>
                            </div>
                            <div>
                                <p class="kolic"
                                    style="font-weight: 100; font-size: 14px; margin-left: 20px; margin-top: 18px; color: #A7B7C6;">
                                    Количество</p>
                            </div>
                        </div>
                        <div v-for="item in cartStore.items" :key="item.id" class="oformit-tovar px-4 py-3"
                            style="display: flex; justify-content: space-between">
                            <img :src="item.image" :alt="item.name" class=""
                                style="width: 90px; height: 80px; border-radius: 5px; object-fit: cover" />
                            <div>
                                <p class="oformit-name" style="margin-left: -50px; font-family: Bebas Neue, sans-serif">
                                    {{ item.article_number }}</p>
                            </div>
                            <div>
                                <p style="">{{ item.type }}</p>
                            </div>
                            <div>
                                <p style="">{{ item.firm }}</p>
                            </div>
                            <div>
                                <p style="">{{ item.quantity }} шт</p>
                            </div>
                        </div>
                        <div v-for="item in cartStore.items" :key="item.id" class="mobile-oformit-tovar"
                            style="display: flex; justify-content: space-between">
                            <div>
                                <img :src="item.image" :alt="item.name" class=""
                                    style="width: 90px; height: 70px; border-radius: 10px; object-fit: cover" />
                            </div>
                            <div class="oformit-infoo">
                                <div>
                                    <p style="">{{ item.article_number }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ item.type }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ item.firm }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ item.quantity }} шт</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg width="0" height="0">
            <defs>
                <clipPath id="custooomClip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M3.57864 33.8381C1.31037 35.7381 0 38.5452 0 41.5041V684C0 978.523 14.47714 992 29.99999 99000004H318C323.523 992 800 979.523 900 684V10C328 0 780.523 0 2424244 0H47.6099C45.2618 0 42.9886 0.826292 41.1885 2.3341L3.57864 33.8381Z" />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0">
            <defs>
                <clipPath id="customCliip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M11.7915 92.2331C4.36007 97.9086 0 106.725 0 116.075V962C0 978.569 13.4315 992 30 992H1122C1138.57 992 1152 978.569 1152 962V30C1152 13.4315 1138.57 0 1122 0H142.707C136.126 0 129.728 2.16372 124.498 6.15782L11.7915 92.2331Z" />
                </clipPath>
            </defs>
        </svg>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';
import axios from "axios";
import emailjs from "@emailjs/browser";
import API_ENDPOINTS from "@/api/api";

const isSubmitting = ref(false);
const showModal = ref(false);
const phoneError = ref("");
const cartStore = useCartStore();
const products = computed(() => cartStore.items);
const router = useRouter();

const isValidPhoneNumber = (phone) => {
    return phone.startsWith("+") && phone.replace(/\D/g, "").length >= 12;
};
const formData = ref({
    name: "",
    phone_number: "",
    email: "",
    address: "",
});
const sendOformitProducts = async () => {
    if (isSubmitting.value) return;
    if (!isValidPhoneNumber(formData.value.phone_number)) {
        phoneError.value = "Iltimos, to‘liq telefon raqamingizni kiriting!";
        return;
    }
    phoneError.value = "";
    isSubmitting.value = true;
    try {
        const requestData = {
            ...formData.value,
            products: products.value.map(item => ({
                product_id: item.id,
                article_number: item.article_number,
                type: item.type,
                firm: item.firm,
                quantity: item.quantity
            }))
        };
        console.log("Yuborilayotgan ma'lumotlar:", JSON.stringify(requestData, null, 2));
        console.log("So‘rov yuborilmoqda...");
        const response = await axios.post(API_ENDPOINTS.OFORMIT_PRODUCTS, requestData, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("Backend javobi:", response.data);
        if (response.data.success) {
            console.log("Email yuborish boshlanmoqda...");
            try {
                const emailResponse = await emailjs.send(
                    "service_gpd70mo",
                    "template_c3947wy",
                    {
                        name: formData.value.name,
                        phone_number: formData.value.phone_number,
                        email: formData.value.email,
                        address: formData.value.address,
                        products: products.value.map(item =>
                            `${item.firm} - ${item.type} (${item.article_number}), Soni: ${item.quantity}`
                        ).join("\n")
                    },
                    "MB119DkcMFoYBYPFo"
                );
                console.log("EmailJS javobi:", emailResponse);
            } catch (emailError) {
                console.error("Email yuborishda xato yuz berdi:", emailError);
            }
            console.log("Forma tozalanyapti...");
            formData.value = { name: "", phone_number: "", email: "", address: "" };
            cartStore.clearCart();
            showModal.value = true;
            console.log("Modal oyna ko‘rsatildi:", showModal.value);
            setTimeout(() => {
                showModal.value = false;
                console.log("Modal oyna yopildi:", showModal.value);
                router.push('/catalog');
            }, 3000);
        }
    } catch (error) {
        console.error("Backend so‘rovda xato:", error.response ? error.response.data : error.message);
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {
    cartStore.loadFromLocalStorage();
});
watch(products, (newValue) => {
    console.log('Mahsulotlar o‘zgardi:', newValue);
}, { immediate: true });
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
