<template>
    <div class="oformit-page container">
        <h1 class="oformit-title">ОФОРМЛЕНИЯ ЗАКАЗА</h1>
        <div class="container oformit-container">
            <div class="oformit-form">
                <div class="oformit-card">
                    <h2>Покупатель</h2>
                    <form @submit.prevent="submitForm" style="margin-top: -25px;">
                        <div class="form-group">
                            <input type="text" v-model="formData.name" placeholder="Ваше имя" required />
                        </div>
                        <div class="form-group">
                            <input type="tel" v-model="formData.phone" placeholder="Номер телефона" required />
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="formData.email" placeholder="Ваша почта" required />
                        </div>
                        <div class="form-group">
                            <textarea v-model="formData.message" placeholder="Адрес доставки" rows="4"
                                required></textarea>
                        </div>
                        <button type="submit" class="submit-btnnn">Отправить запрос</button>
                    </form>
                    <h2 class="mb-5">Товары в заказе</h2>
                    <div style="position: relative; display: flex; flex-direction: column; width: 100%;">
                        <div class="oformit-carddd p-3" style="display: flex; position: absolute; top: -50px;">
                            <div>
                                <p></p>
                            </div>
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
                        <div v-for="product in products" :key="product.id" class="oformit-tovar px-4 py-3"
                            style="display: flex; justify-content: space-between">
                            <img :src="product.image" :alt="product.name" class=""
                                style="width: 90px; height: 80px; border-radius: 5px" />
                            <div>
                                <p class="oformit-name" style="margin-left: -50px; font-family: Bebas Neue, sans-serif">{{ product.name }}</p>
                            </div>
                            <div>
                                <p style="">{{ product.type }}</p>
                            </div>
                            <div>
                                <p style="">{{ product.firm }}</p>
                            </div>
                            <div>
                                <p style="">{{ product.quantity }} шт</p>
                            </div>
                        </div>
                        <div v-for="product in products" :key="product.id" class="mobile-oformit-tovar"
                            style="display: flex; justify-content: space-between">
                            <div>
                                <img :src="product.image" :alt="product.name" class=""
                                    style="width: 90px; height: 70px; border-radius: 10px" />
                            </div>
                            <div class="oformit-infoo">
                                <div>
                                    <p style="">{{ product.name }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ product.type }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ product.firm }}</p>
                                </div>
                                <div>
                                    <p style="margin-top: -0.8rem">{{ product.quantity }} шт</p>
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
                        d="M3.57864 33.8381C1.31037 35.7381 0 38.5452 0 41.5041V684C0 978.523 4.47714 992 9.99999 99000004H318C323.523 992 780 979.523 780 684V10C328 4.47715 780.523 0 318 0H47.6099C45.2618 0 42.9886 0.826292 41.1885 2.3341L3.57864 33.8381Z" />
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

<script>
import { products } from '@/stores/productStore'
export default {
    name: 'OformitPage',
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                email: '',
                message: ''
            },
            products: products.value || []
        }
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.formData)
        }
    }
}
</script>