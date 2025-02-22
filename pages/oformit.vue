<template>
    <div class="oformit-page">
        <h1 class="oformit-title">ОФОРМЛЕНИЯ ЗАКАЗА</h1>
        <div class="oformit-container">
            <div class="oformit-form">
                <div class="oformit-card">
                    <h2>Покупатель</h2>
                    <form @submit.prevent="submitForm" style="margin-top: -25px">
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
                        <button type="submit" class="submit-btnnn">Отправить</button>
                    </form>
                    <h2 class="mb-5">Товары в заказе</h2>
                    <div style="position: relative; display: flex; flex-direction: column; width: 100%;">
                        <div class="oformit-carddd p-3" style="display: flex; position: absolute; top: -50px;">
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p
                                    style="font-weight: 100; font-size: 14px; margin-left: 110px; margin-top: 35px; color: #A7B7C6;">
                                    Наименование
                                </p>
                            </div>
                            <div>
                                <p
                                    style="font-weight: 100; font-size: 14px; margin-left: 115px; margin-top: 35px; color: #A7B7C6;">
                                    Вид
                                </p>
                            </div>
                            <div>
                                <p
                                    style="font-weight: 100; font-size: 14px; margin-left: 125px; margin-top: 35px; color: #A7B7C6;">
                                    Производитель</p>
                            </div>
                            <div>
                                <p
                                    style="font-weight: 100; font-size: 14px; margin-left: 30px; margin-top: 35px; color: #A7B7C6;">
                                    Количество</p>
                            </div>
                        </div>
                        <div v-for="product in products" :key="product.id" class="oformit-tovar px-4 py-3"
                            style="display: flex; justify-content: space-between">
                            <img :src="product.image" :alt="product.name" class=""
                                style="width: 90px; height: 70px; border-radius: 10px" />
                            <div>
                                <p style="margin-left: -50px">{{ product.name }}</p>
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
                    </div>
                </div>
            </div>
        </div>
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