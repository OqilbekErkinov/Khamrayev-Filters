<template>
    <div class="contact-page">
        <!-- Modal -->
        <div v-if="showModal" class="toast-container">
            <div class="toast alert show" role="alert">
                ✅ Ваш запрос отправлен! Мы скоро свяжемся с вами!
            </div>
        </div>
        <h1 class="contact-title">КОНТАКТЫ</h1>
        <div class="contact-container">
            <!-- Contact Information Section -->
            <div class="contact-info">
                <h2>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
                <p class="info-text">Если у вас есть вопросы или требуется <br> консультация, свяжитесь с нашими <br>
                    специалистами. Мы всегда готовы помочь.</p>
                <div class="info-items">
                    <div class="info-item">
                        <svg class="icons mb-2" width="40" height="40" viewBox="0 0 50 50" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                            <path
                                d="M24.9993 9C18.609 9 13.4102 14.1989 13.4102 20.5891C13.4102 28.5196 23.7813 40.1621 24.2229 40.6538C24.6377 41.1157 25.3618 41.1149 25.7758 40.6538C26.2173 40.1621 36.5885 28.5196 36.5885 20.5891C36.5884 14.1989 31.3896 9 24.9993 9ZM24.9993 38.3581C21.5089 34.2119 15.4972 26.032 15.4972 20.5892C15.4972 15.3496 19.7598 11.087 24.9993 11.087C30.2389 11.087 34.5015 15.3496 34.5015 20.5892C34.5015 26.0322 28.4907 34.2106 24.9993 38.3581Z"
                                fill="white" />
                            <path
                                d="M24.9987 14.7584C21.7836 14.7584 19.168 17.374 19.168 20.5892C19.168 23.8043 21.7837 26.42 24.9987 26.42C28.2138 26.42 30.8294 23.8043 30.8294 20.5892C30.8294 17.374 28.2138 14.7584 24.9987 14.7584ZM24.9987 24.333C22.9343 24.333 21.255 22.6535 21.255 20.5892C21.255 18.5248 22.9344 16.8454 24.9987 16.8454C27.063 16.8454 28.7425 18.5248 28.7425 20.5892C28.7425 22.6535 27.063 24.333 24.9987 24.333Z"
                                fill="white" />
                        </svg>
                        <div class="content">
                            <h4>Адрес</h4>
                            <p>Где-то</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <svg class="icons mb-2" width="40" height="40" viewBox="0 0 50 51" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                            <g clip-path="url(#clip0_32_852)">
                                <path
                                    d="M15.5188 30.7714C18.675 34.5443 22.4744 37.5149 26.8109 39.6169C28.462 40.3993 30.67 41.3276 33.13 41.4867C33.2825 41.4934 33.4284 41.5 33.5809 41.5C35.232 41.5 36.5581 40.9298 37.6389 39.7561C37.6456 39.7495 37.6588 39.7362 37.6655 39.723C38.05 39.2588 38.4877 38.8411 38.9452 38.3968C39.2568 38.0984 39.5751 37.7868 39.8801 37.4685C41.2925 35.9965 41.2925 34.1266 39.8669 32.701L35.8818 28.7159C35.2055 28.0131 34.3965 27.6417 33.5478 27.6417C32.699 27.6417 31.8835 28.0131 31.1872 28.7093L28.8134 31.0831C28.5946 30.9571 28.3692 30.8444 28.157 30.7383C27.8917 30.6057 27.6464 30.4797 27.4276 30.3404C25.266 28.9679 23.3033 27.1776 21.4268 24.8767C20.4786 23.6765 19.842 22.6687 19.3977 21.6409C20.021 21.0773 20.6045 20.4872 21.1682 19.9103C21.3671 19.7047 21.5726 19.4992 21.7782 19.2936C22.4943 18.5775 22.8789 17.7487 22.8789 16.9065C22.8789 16.0644 22.5009 15.2356 21.7782 14.5195L19.8022 12.5435C19.5701 12.3114 19.3513 12.086 19.1259 11.8539C18.6883 11.403 18.2307 10.9389 17.7798 10.5211C17.0969 9.85143 16.2946 9.5 15.4458 9.5C14.6037 9.5 13.7948 9.85143 13.0853 10.5278L10.6054 13.0077C9.70359 13.9094 9.19303 15.0035 9.08693 16.27C8.96095 17.8547 9.2527 19.539 10.0086 21.5746C11.169 24.7242 12.9195 27.6484 15.5188 30.7714ZM10.7048 16.4092C10.7844 15.5274 11.1226 14.7913 11.7591 14.1548L14.2258 11.6881C14.6103 11.3168 15.0347 11.1245 15.4458 11.1245C15.8503 11.1245 16.2614 11.3168 16.6394 11.7014C17.0836 12.1125 17.5014 12.5435 17.9522 13.001C18.1777 13.2331 18.4098 13.4652 18.6418 13.7039L20.6178 15.6799C21.0289 16.091 21.2411 16.5087 21.2411 16.9198C21.2411 17.3309 21.0289 17.7487 20.6178 18.1598C20.4123 18.3653 20.2067 18.5775 20.0011 18.783C19.3845 19.4063 18.8076 19.9965 18.1711 20.5601L18.1379 20.5932C17.5876 21.1436 17.6738 21.6674 17.8064 22.0653C17.813 22.0852 17.8196 22.0984 17.8263 22.1183C18.3368 23.345 19.0463 24.512 20.1537 25.9045C22.1429 28.3579 24.2382 30.2609 26.5457 31.7263C26.8308 31.9119 27.1358 32.0578 27.421 32.2037C27.6862 32.3363 27.9315 32.4623 28.1503 32.6015C28.1769 32.6148 28.1968 32.6281 28.2233 32.6413C28.4421 32.754 28.6543 32.8071 28.8665 32.8071C29.3969 32.8071 29.7417 32.4689 29.8544 32.3562L32.3343 29.8763C32.7189 29.4917 33.1367 29.2862 33.5478 29.2862C34.0517 29.2862 34.4628 29.5978 34.7214 29.8763L38.7198 33.868C39.5154 34.6637 39.5088 35.5257 38.6999 36.3678C38.4214 36.6662 38.1296 36.9513 37.818 37.2497C37.3538 37.7006 36.8698 38.1647 36.4321 38.6886C35.6696 39.5108 34.7612 39.8954 33.5876 39.8954C33.4748 39.8954 33.3555 39.8887 33.2428 39.8821C31.0679 39.7429 29.0455 38.8941 27.527 38.1714C23.4027 36.1755 19.7823 33.3442 16.7786 29.7503C14.3053 26.7731 12.641 24.0014 11.5403 21.0309C10.8573 19.2074 10.5987 17.742 10.7048 16.4092Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_32_852">
                                    <rect width="32" height="32" fill="white" transform="translate(9 9.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="content">
                            <h4>Номер телефона</h4>
                            <p>+998 99 999 99 99</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <svg class="icons mb-2" width="40" height="40" viewBox="0 0 50 50" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                            <path
                                d="M38.1875 13.75H11.8125C10.2649 13.75 9 15.0093 9 16.5625V33.4375C9 34.9912 10.2657 36.25 11.8125 36.25H38.1875C39.7351 36.25 41 34.9907 41 33.4375V16.5625C41 15.0089 39.7345 13.75 38.1875 13.75ZM37.7556 15.625L25.7265 27.6934C25.36 28.061 24.6402 28.0612 24.2735 27.6934L12.2444 15.625H37.7556ZM10.875 33.0928V16.9072L18.9416 25L10.875 33.0928ZM12.2444 34.375L20.2653 26.328L22.9456 29.0171C24.0439 30.119 25.9565 30.1186 27.0545 29.0171L29.7348 26.3281L37.7556 34.375H12.2444ZM39.125 33.0928L31.0584 25L39.125 16.9072V33.0928Z"
                                fill="white" />
                        </svg>
                        <div class="content">
                            <h4>Почта</h4>
                            <p>khamrayevfilters.com</p>
                        </div>
                    </div>
                </div>
                <div class="social-networks">
                    <h3 style="font-size: 20px; font-weight: 600; letter-spacing: 1px">Социальные сети</h3>
                    <div class="social-icons">
                        <a href="https://t.me/king_006x" class="social-icon">
                            <svg class="mt-3" width="40" height="40" viewBox="0 0 50 50" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                                <g clip-path="url(#clip0_32_870)">
                                    <path
                                        d="M40.5101 12.4397C40.1195 11.9602 39.5333 11.696 38.8593 11.696C38.4956 11.696 38.1104 11.7722 37.7142 11.9222L10.6223 22.187C9.18181 22.7329 8.98793 23.5546 9.00055 23.9958C9.01312 24.4348 9.25131 25.2382 10.7012 25.702L16.4468 27.8075L19.4748 34.7388C19.7792 35.6975 20.4152 36.37 21.227 36.5881C21.4131 36.6381 21.605 36.6634 21.7977 36.6632C22.4569 36.6632 23.132 36.3729 23.7149 35.8254L26.2236 33.4684L32.3448 37.6816C32.8961 38.089 33.4959 38.3041 34.0808 38.304C35.268 38.304 36.2148 37.4349 36.493 36.09L40.9239 14.6603C41.1059 13.7796 40.959 12.991 40.5101 12.4397ZM18.3509 27.4822L26.1694 23.2895L20.7204 28.2877C20.625 28.3755 20.5489 28.4822 20.4968 28.6009C20.4448 28.7197 20.4179 28.848 20.418 28.9776C20.4177 28.9872 20.4165 28.9966 20.4164 29.0062L20.3976 32.1671L18.3509 27.4822ZM22.4311 34.4587C22.3765 34.5102 22.3187 34.5581 22.2581 34.6023L22.281 30.7546L24.6431 32.3804L22.4311 34.4587ZM39.0876 14.2806L34.6568 35.7102C34.6121 35.9263 34.4665 36.429 34.0807 36.429C33.9005 36.429 33.677 36.3362 33.4513 36.1677C33.4417 36.1605 33.4319 36.1534 33.4219 36.1466L26.6736 31.5018L26.6708 31.4999L22.8554 28.8737L32.9343 19.6286C33.1026 19.4742 33.2087 19.2637 33.2328 19.0366C33.2569 18.8095 33.1972 18.5813 33.065 18.3951C32.9328 18.2088 32.7372 18.0773 32.5148 18.025C32.2925 17.9728 32.0587 18.0036 31.8574 18.1115L17.0729 26.0399L11.3272 23.9344C11.323 23.9329 11.3188 23.9313 11.3146 23.9299L38.3786 13.6757C38.6067 13.5892 38.7659 13.5711 38.8593 13.5711C38.9056 13.5711 39.0175 13.5762 39.0561 13.6237C39.1057 13.6845 39.168 13.8914 39.0876 14.2806Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_32_870">
                                        <rect width="32" height="32" fill="white" transform="translate(9 9)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/king_006x" class="social-icon">
                            <svg class="mt-3" width="40" height="40" viewBox="0 0 50 50" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                                <g clip-path="url(#clip0_32_874)">
                                    <path
                                        d="M26.4779 41V26.4044H31.3751L32.1098 20.7145H26.4779V17.0824C26.4779 15.4355 26.9334 14.3132 29.2976 14.3132L32.308 14.312V9.22277C31.7874 9.15511 30.0003 9 27.9203 9C23.577 9 20.6034 11.6511 20.6034 16.5188V20.7145H15.6914V26.4044H20.6034V41H26.4779Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_32_874">
                                        <rect width="32" height="32" fill="white" transform="translate(8 9)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/king_006x" class="social-icon">
                            <svg class="mt-3" width="40" height="40" viewBox="0 0 50 50" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.15" />
                                <path
                                    d="M19.4013 11.667H30.6013C34.868 11.667 38.3346 15.1337 38.3346 19.4003V30.6003C38.3346 32.6513 37.5199 34.6183 36.0696 36.0686C34.6193 37.5189 32.6523 38.3337 30.6013 38.3337H19.4013C15.1346 38.3337 11.668 34.867 11.668 30.6003V19.4003C11.668 17.3493 12.4827 15.3823 13.933 13.932C15.3833 12.4818 17.3503 11.667 19.4013 11.667ZM19.1346 14.3337C17.8616 14.3337 16.6407 14.8394 15.7405 15.7395C14.8403 16.6397 14.3346 17.8606 14.3346 19.1337V30.867C14.3346 33.5203 16.4813 35.667 19.1346 35.667H30.868C32.141 35.667 33.3619 35.1613 34.2621 34.2611C35.1623 33.3609 35.668 32.14 35.668 30.867V19.1337C35.668 16.4803 33.5213 14.3337 30.868 14.3337H19.1346ZM32.0013 16.3337C32.4433 16.3337 32.8673 16.5093 33.1798 16.8218C33.4924 17.1344 33.668 17.5583 33.668 18.0003C33.668 18.4424 33.4924 18.8663 33.1798 19.1788C32.8673 19.4914 32.4433 19.667 32.0013 19.667C31.5593 19.667 31.1353 19.4914 30.8228 19.1788C30.5102 18.8663 30.3346 18.4424 30.3346 18.0003C30.3346 17.5583 30.5102 17.1344 30.8228 16.8218C31.1353 16.5093 31.5593 16.3337 32.0013 16.3337ZM25.0013 18.3337C26.7694 18.3337 28.4651 19.036 29.7153 20.2863C30.9656 21.5365 31.668 23.2322 31.668 25.0003C31.668 26.7684 30.9656 28.4641 29.7153 29.7144C28.4651 30.9646 26.7694 31.667 25.0013 31.667C23.2332 31.667 21.5375 30.9646 20.2873 29.7144C19.037 28.4641 18.3346 26.7684 18.3346 25.0003C18.3346 23.2322 19.037 21.5365 20.2873 20.2863C21.5375 19.036 23.2332 18.3337 25.0013 18.3337ZM25.0013 21.0003C23.9404 21.0003 22.923 21.4218 22.1729 22.1719C21.4227 22.922 21.0013 23.9395 21.0013 25.0003C21.0013 26.0612 21.4227 27.0786 22.1729 27.8288C22.923 28.5789 23.9404 29.0003 25.0013 29.0003C26.0622 29.0003 27.0796 28.5789 27.8297 27.8288C28.5799 27.0786 29.0013 26.0612 29.0013 25.0003C29.0013 23.9395 28.5799 22.922 27.8297 22.1719C27.0796 21.4218 26.0622 21.0003 25.0013 21.0003Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Contact Form Section -->
            <div class="contact-form">
                <h2>СВЯЖИТЕСЬ С НАМИ</h2>
                <div class="contact-card">
                    <form @submit.prevent="sendContactForm">
                        <div class="form-group"><input type="text" id="name" v-model="formData.name"
                                placeholder="Ваше имя" required /></div>
                        <div class="form-group"><input type="tel" id="phone_number" v-model="formData.phone_number"
                                placeholder="Номер телефона" required />
                            <p v-if="phoneError" class="error-message">{{ phoneError }}</p>
                        </div>
                        <div class="form-group"><input type="email" id="email" v-model="formData.email"
                                placeholder="Ваша почта" required /></div>
                        <div class="form-group"><textarea id="message" v-model="formData.message"
                                placeholder="Сообщение" rows="4" required></textarea></div>
                        <button type="submit" :disabled="isSubmitting" class="otpravit-btn">
                            {{ isSubmitting ? "Отправка..." : "Отправить" }}</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- Map Section -->
        <div class="map">
            <div ref="mapContainer" class="yandex-map"></div>
        </div>
        <svg width="0" height="0">
            <defs>
                <clipPath id="customClip" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M10.3499 92.4704C3.77634 98.1686 0 106.44 0 115.139V805C0 821.569 13.4314 835 30 835H1646C1662.57 835 1676 821.569 1676 805V30C1676 13.4315 1662.57 0 1646 0H128.219C121 0 114.023 2.60291 108.569 7.33119L10.3499 92.4704Z" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import emailjs from "@emailjs/browser";
import API_ENDPOINTS from "@/api/api";
import { onMounted } from 'vue';

const { $initYandexMap } = useNuxtApp();
const mapContainer = ref(null);
const mapInstance = ref(null);
const phoneError = ref("");
const isSubmitting = ref(false);
const showModal = ref(false);

const isValidPhoneNumber = (phone) => {
    return phone.startsWith("+") && phone.replace(/\D/g, "").length >= 12;
};
const formData = ref({
    name: "",
    phone_number: "",
    email: "",
    message: "",
});
const sendContactForm = async () => {
    if (isSubmitting.value) return;
    if (!isValidPhoneNumber(formData.value.phone_number)) {
        phoneError.value = "Iltimos, to'liq telefon raqamingizni kiriting!";
        return;
    }
    phoneError.value = "";
    isSubmitting.value = true;
    try {
        console.log("Yuborilayotgan ma'lumotlar:", formData.value);
        const response = await axios.post(API_ENDPOINTS.CONTACT_FORM, formData.value);
        console.log("Backend javobi:", response.data);
        if (response.data.success) {
            try {
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
            } catch (emailError) {
                console.error("Email yuborishda xato yuz berdi:", emailError);
            }
            showModal.value = true;
            console.log("Modal ko'rsatildi");
            formData.value = {
                name: "",
                phone_number: "",
                email: "",
                message: "",
            };
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
const locations = [
  {
    coordinates: [41.278075, 69.262004],
    name: "Kleos"
  },
  {
    coordinates: [41.317795, 69.215579],
    name: "Oqlon Mosque"
  },
  {
    coordinates: [41.297942, 69.249454],
    name: "Next"
  },
];

watch(
    () => formData.value.phone_number,
    (newPhone) => {
        if (isValidPhoneNumber(newPhone)) {
            phoneError.value = "";
        }
    }
);
onMounted(async () => {
  if (mapContainer.value) {
    mapInstance.value = await $initYandexMap(mapContainer.value, locations, true); // true -> iconCaption qo'shish
  }
});
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
  .yandex-map {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .map {
    border-radius: 20px;
  }
</style>
