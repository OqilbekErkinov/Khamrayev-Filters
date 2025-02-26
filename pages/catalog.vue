<template>
  <div class="container w-100">
    <h1 class="catalog-title">КАТАЛОГ ФИЛЬТРОВ</h1>
    <div class="catalog-dropdown-content">
      <!-- Sidebar -->
      <div class="catalog-sidebar">
        <div v-for="category in sidebarCategories" :key="category.id"
          :class="['sidebar-item', { 'active': activeCategory === category.id }]" @click="activeCategory = category.id">
          <component :is="category.icon" class="sidebar-icon"
            :class="{ 'active-icon': activeCategory === category.id }" />
          <span>{{ category.title }}</span>
        </div>
      </div>
      <div class="ms-3 mt-4">
        <svg width="1" height="400" viewBox="0 0 1 637" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="637.006" x2="0.5" y2="-0.00628662" stroke="url(#paint0_linear_41_2626)" />
          <defs>
            <linearGradient id="paint0_linear_41_2626" x1="1.5" y1="-0.00628662" x2="1.5" y2="637.006"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#CDCDCD" />
              <stop offset="1" stop-color="#676767" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Main Content -->
      <div class="catalog-content-wrapper">
        <h2 class="category_title">{{ getCategoryData(activeCategory).title }}</h2>

        <!-- Manufacturers Layout -->
        <div v-if="activeCategory === 'manufacturers'" class="manufacturers-grid mb-5">
          <div v-for="manufacturer in getCategoryData(activeCategory).data" :key="manufacturer.id"
            class="manufacturer-item">
            <NuxtLink to="/products" class="" style="text-decoration: none;">
              <img v-if="typeof manufacturer.logo === 'string'" :src="manufacturer.logo" class="manufacturer-logo" />
              <span v-else class="manufacturer-title">{{ manufacturer.title }}</span>
            </NuxtLink>
          </div>

          <button class="ps-4">Все бренды фильтров <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                fill="#04315B" />
            </svg>
            <div class="manafactures-border-button" />
          </button>
        </div>


        <!-- Equipment Brands Layout -->
        <div v-else-if="activeCategory === 'equipment'" class="brands-grid">
          <div v-for="brand in getCategoryData(activeCategory).data" :key="brand.id" class="brand-item">
            <NuxtLink to="/products" class="" style="text-decoration: none;">
              <span class="brand-title">{{ brand.title }}</span>
            </NuxtLink>
          </div>
          <button class="ps-4">Все марки техники <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                fill="#04315B" />
            </svg>
            <div class="brands-border-button" />
          </button>
        </div>

        <!-- Equipment Types Layout -->
        <div v-else-if="activeCategory === 'applications'" class="equipment-types-grid">
          <div v-for="type in getCategoryData(activeCategory).data" :key="type.id" class="equipment-type-card"
            :class="{ 'title-only': !type.image }">

            <div class="card-content">
              <NuxtLink to="/products" class="equipment-title" style="text-decoration: none;">
                <h3>{{ type.title }}</h3>
              </NuxtLink>
              <img v-if="type.image" :src="type.image" :alt="type.title" class="equipment-image" />
            </div>
          </div>
          <button class="ps-4">Все виды техники <svg class="ps-2" width="28" height="14" viewBox="0 0 31 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                fill="#04315B" />
            </svg>
            <div class="equipments-border-button" />
          </button>
        </div>

        <!-- Default Filter Categories Layout -->
        <div v-else class="catalog-filter-categories">
          <div class="catalog-main-content">
            <div v-for="(category, index) in getCategoryData(activeCategory).data" :key="index" class="filter-category">
              <div class="category-header d-flex">
                <div>
                  <component :is="category.icon" class="category-icon" />
                </div>
                <div class="title-with-text ms-3">
                  <NuxtLink to="/products" class="" style="text-decoration: none;">
                    <h5>{{ category.title }}</h5>
                  </NuxtLink>
                  <span class="item-count">{{ category.count }}</span>
                  <NuxtLink to="/products" class="" style="text-decoration: none;">
                    <ul v-if="category.subcategories" class="subcategories">
                      <li v-for="(sub, idx) in category.subcategories" :key="idx">{{ sub }}</li>
                    </ul>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto p-6 bottomm" style="margin-top: 5rem; width: 100%;">
      <div class="catalog-carddd p-3 mb-2 py-4">
        <div>
          <p class="mt-3 first-second" style="color: #658099; letter-spacing: 1.4px; font-size: 14px; font-weight: 300">
            Название
            <span class="px-2">/</span> Популярность <span class="px-2">/</span> Вид
          </p>
        </div>
        <div>
          <p class="mt-3 second-first" style="color: #658099; letter-spacing: 1.4px; font-size: 15px; font-weight: 300">
            <span style="color: #04315b;">12</span> <span class="px-2">/</span> 12 <span class="px-2">/</span> 12</p>
        </div>
      </div>

      <div class="space">
        <div v-for="product in products" :key="product.id" class="product_card flex items-center p-4 border rounded-lg">
          <img :src="product.image" :alt="product.name" class="mb-3" style="width: 90px; height: 60px;" />
          <div class="" style="margin-left: -50px;">
            <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
              <h3 class="" style="color: #003366">{{ product.name }}</h3>
            </NuxtLink>
            <p style="font-weight: 200; font-family: Bebas Neue Pro, sans-serif;" class="">{{ product.firm }}</p>
          </div>
          <div class="product_icon">
            <svg class="mb-3" width="62" height="62" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="46" cy="46" r="46" fill="#04315B" fill-opacity="0.1" />
              <path
                d="M38.4782 34.3535C40.3706 35.2959 42.8649 35.8149 45.5016 35.8149C48.1383 35.8149 50.6325 35.2959 52.525 34.3535C54.6332 33.3036 55.7942 31.8293 55.7942 30.2022C55.7942 28.5752 54.6332 27.1009 52.525 26.051C50.6325 25.1086 48.1383 24.5895 45.5016 24.5895C42.8649 24.5895 40.3706 25.1086 38.4782 26.051C36.37 27.1009 35.209 28.5752 35.209 30.2022C35.209 31.8293 36.37 33.3036 38.4782 34.3535ZM45.5015 26.5426C50.4083 26.5426 53.8277 28.4713 53.8277 30.2022C53.8277 31.9332 50.4083 33.8618 45.5015 33.8618C40.5947 33.8618 37.1753 31.9331 37.1753 30.2021C37.1753 28.4712 40.5947 26.5426 45.5015 26.5426Z"
                fill="#04315B" />
              <path
                d="M62.8895 29.1448C61.9212 24.5006 54.6318 21 45.5 21C35.6869 21 28 25.0421 28 30.2021C28 30.4236 28.0152 30.6428 28.0431 30.8599L28.0001 58.6514L28 58.6524V62.0581C28 65.6913 30.4851 68.8166 34.045 69.6585L34.0913 69.6694C37.8243 70.5523 41.6627 71 45.5 71C49.3374 71 53.1758 70.5523 56.9071 69.6698L56.9566 69.6583C60.5149 68.8167 63 65.6914 63 62.0582V29.5938C63.0001 29.4374 62.9622 29.2834 62.8895 29.1448ZM34.2615 25.2588C37.247 23.772 41.2383 22.9531 45.5 22.9531C49.7618 22.9531 53.7531 23.772 56.7386 25.2588C59.4682 26.6182 61.0338 28.4199 61.0338 30.2021C61.0338 31.9844 59.4682 33.7861 56.7386 35.1456C53.7531 36.6324 49.7618 37.4513 45.5 37.4513C41.2383 37.4513 37.247 36.6324 34.2615 35.1456C31.7941 33.9168 30.2782 32.3265 30.0096 30.7159L30.0111 29.6799C30.2837 28.0723 31.7984 26.4854 34.2615 25.2588ZM54.3398 59.7437L54.3239 38.1876C55.0291 37.9752 55.7021 37.7377 56.3384 37.4772L56.3076 59.3283C55.6547 59.4806 54.9986 59.6191 54.3398 59.7437ZM34.6773 59.3224L34.6615 37.4771C35.2831 37.7316 35.9398 37.9639 36.6271 38.1725L36.6432 59.7384C35.9849 59.6137 35.3295 59.475 34.6773 59.3224ZM38.6096 60.0686L38.5938 38.685C39.2448 38.8277 39.9005 38.9482 40.5598 39.0462L40.5759 60.3144C39.9189 60.2461 39.2633 60.1642 38.6096 60.0686ZM42.5423 60.4775L42.5263 39.2769C43.1696 39.3325 43.8256 39.3705 44.4927 39.3896L44.5087 60.5594C43.8528 60.5457 43.1972 60.5184 42.5423 60.4775ZM46.475 60.5599L46.459 39.3911C47.1427 39.3726 47.8146 39.3339 48.4733 39.277L48.4427 60.4791C47.7883 60.5194 47.1324 60.5466 46.475 60.5599ZM50.4399 39.0462C51.083 38.9506 51.7227 38.8337 52.3579 38.6956L52.3737 60.0726C51.7207 60.1677 51.0656 60.2493 50.4091 60.3171L50.4399 39.0462ZM32.6945 36.5337L32.7106 58.8178C31.7877 58.5598 30.8729 58.2741 29.9674 57.961L30.0037 34.5436C30.7302 35.2728 31.6367 35.9412 32.6945 36.5337ZM61.0338 62.0582C61.0338 64.7831 59.1699 67.127 56.5028 67.7579L56.4533 67.7694C52.8693 68.6172 49.1842 69.0469 45.5 69.0469C41.8159 69.0469 38.1308 68.6172 34.5452 67.7691L34.4989 67.7582C31.8302 67.127 29.9663 64.7831 29.9663 62.0582V60.0266C34.9825 61.6839 40.2016 62.5231 45.5001 62.5231C50.7993 62.5231 56.0178 61.6839 61.0338 60.0267V62.0582ZM61.0338 57.9629C60.1231 58.2778 59.2029 58.5651 58.2746 58.8244L58.3059 36.6049C58.3059 36.5814 58.304 36.5585 58.3024 36.5354C59.3798 35.9322 60.3004 35.2504 61.0337 34.5059V57.9629H61.0338Z"
                fill="#04315B" />
            </svg>
          </div>
          <div>
            <p style="max-width: 30px; margin-left: -80px;">{{ product.type }}</p>
          </div>
          <div>
            <p class="" style="margin-right: -40px;">{{ product.money }}</p>
          </div>
          <div class="adding">
            <button @click="decrementQuantity(product)" class="" style="margin-left: -15px; margin-top: 4px">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_41_2375)">
                  <path
                    d="M1.08031 10.0801H16.9203C17.0621 10.0801 17.2026 10.0522 17.3336 9.99786C17.4647 9.94357 17.5838 9.864 17.6841 9.76369C17.7844 9.66337 17.8639 9.54429 17.9182 9.41323C17.9725 9.28216 18.0004 9.1417 18.0004 8.99984C18.0004 8.858 17.9725 8.71753 17.9182 8.58648C17.8639 8.45543 17.7843 8.33635 17.684 8.23605C17.5837 8.13575 17.4647 8.05619 17.3336 8.00192C17.2026 7.94764 17.0621 7.91972 16.9203 7.91974H1.08031C0.796019 7.92306 0.524499 8.03833 0.32464 8.24054C0.12478 8.44275 0.0126953 8.7156 0.0126953 8.99992C0.0126953 9.28423 0.12478 9.55708 0.32464 9.75929C0.524499 9.9615 0.796019 10.0768 1.08031 10.0801Z"
                    fill="#04315B" />
                </g>
                <defs>
                  <clipPath id="clip0_41_2375">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span class="px-2" style="margin-left: 13px;">
              {{ product.quantity }}
            </span>
            <button @click="incrementQuantity(product)" class=" ps-1" style="margin-left: 35px; margin-top: 3px">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_41_2372)">
                  <path
                    d="M17.0999 8.09999H9.90005V0.899943C9.90005 0.40327 9.49678 0 8.99994 0C8.50326 0 8.09999 0.40327 8.09999 0.899943V8.09999H0.899943C0.40327 8.09999 0 8.50326 0 8.99994C0 9.49678 0.40327 9.90005 0.899943 9.90005H8.09999V17.0999C8.09999 17.5968 8.50326 18 8.99994 18C9.49678 18 9.90005 17.5968 9.90005 17.0999V9.90005H17.0999C17.5968 9.90005 18 9.49678 18 8.99994C18 8.50326 17.5968 8.09999 17.0999 8.09999Z"
                    fill="#04315B" />
                </g>
                <defs>
                  <clipPath id="clip0_41_2372">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div class="dobavit flex items-center">
            <button class="px-4 py-2 mb-3 ps-5" @click="addToCart">
              Добавить в корзину
              <div class="dobavit-border-button" />
            </button>
          </div>
          <CartModal :show="showCartModal" :product-name="product.name" :product-image="product.image"
            :quantity="product.quantity" @close="closeModal" @continue-shopping="continueShopping"
            @checkout="goToCheckout" />
        </div>
      </div>
      <div class="mobile-space">
        <div v-for="product in products" :key="product.id" class="product_card flex items-center p-4 border rounded-lg">
          <div class="product-imagee-back">
            <img :src="product.image" :alt="product.name" class="mb-3 product-imagee"
              style="width: 90px; height: 60px;" />
          </div>
          <div class="first-row">
            <div class="">
              <NuxtLink to="/product_detail" class="" style="text-decoration: none;">
                <h3 class="" style="color: #003366">{{ product.name }}</h3>
              </NuxtLink>
              <p style="font-weight: 200; font-family: Bebas Neue Pro, sans-serif;" class="">{{ product.firm }}</p>
            </div>
            <div>
              <p style="max-width: 30px; margin-left: 8.4em">{{ product.type }}</p>
            </div>
          </div>
          <div class="second-row">
            <div>
              <p class="moneyy" style="margin-left: 0rem; color: #6A849C">{{ product.money }}</p>
            </div>
            <div class="adding" style="margin-left: 7.8rem">
              <button @click="decrementQuantity(product)" class="" style="margin-left: -15px; margin-top: 4px">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_41_2375)">
                    <path
                      d="M1.08031 10.0801H16.9203C17.0621 10.0801 17.2026 10.0522 17.3336 9.99786C17.4647 9.94357 17.5838 9.864 17.6841 9.76369C17.7844 9.66337 17.8639 9.54429 17.9182 9.41323C17.9725 9.28216 18.0004 9.1417 18.0004 8.99984C18.0004 8.858 17.9725 8.71753 17.9182 8.58648C17.8639 8.45543 17.7843 8.33635 17.684 8.23605C17.5837 8.13575 17.4647 8.05619 17.3336 8.00192C17.2026 7.94764 17.0621 7.91972 16.9203 7.91974H1.08031C0.796019 7.92306 0.524499 8.03833 0.32464 8.24054C0.12478 8.44275 0.0126953 8.7156 0.0126953 8.99992C0.0126953 9.28423 0.12478 9.55708 0.32464 9.75929C0.524499 9.9615 0.796019 10.0768 1.08031 10.0801Z"
                      fill="#04315B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_2375">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span class="px-2" style="margin-left: 13px;">
                {{ product.quantity }}
              </span>
              <button @click="incrementQuantity(product)" class=" ps-1" style="margin-left: 35px; margin-top: 3px">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_41_2372)">
                    <path
                      d="M17.0999 8.09999H9.90005V0.899943C9.90005 0.40327 9.49678 0 8.99994 0C8.50326 0 8.09999 0.40327 8.09999 0.899943V8.09999H0.899943C0.40327 8.09999 0 8.50326 0 8.99994C0 9.49678 0.40327 9.90005 0.899943 9.90005H8.09999V17.0999C8.09999 17.5968 8.50326 18 8.99994 18C9.49678 18 9.90005 17.5968 9.90005 17.0999V9.90005H17.0999C17.5968 9.90005 18 9.49678 18 8.99994C18 8.50326 17.5968 8.09999 17.0999 8.09999Z"
                      fill="#04315B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_2372">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div class="dobavit flex items-center">
            <button class="px-4 py-2 mb-3 ps-5" @click="addToCart">
              Добавить в корзину
              <div class="dobavit-border-button" />
            </button>
          </div>
          <CartModal :show="showCartModal" :product-name="product.name" :product-image="product.image"
            :quantity="product.quantity" @close="closeModal" @continue-shopping="continueShopping"
            @checkout="goToCheckout" />
        </div>
      </div>
      <!-- Pagination -->
      <div class="pagination d-flex justify-content-center mt-5 align-items-center pb-5" style="color: #04315B">
        <svg class="me-3" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.00168896 4.50706C0.00136328 4.657 0.0594578 4.80231 0.16589 4.91777L3.73547 8.76817C3.85665 8.89922 4.03079 8.98164 4.21956 8.99728C4.40834 9.01293 4.5963 8.96052 4.7421 8.8516C4.88789 8.74267 4.97957 8.58614 4.99698 8.41645C5.01438 8.24676 4.95608 8.07781 4.83491 7.94675L1.63656 4.50706L4.72068 1.06736C4.77998 1.00172 4.82427 0.926192 4.85099 0.845117C4.87771 0.76404 4.88635 0.679017 4.87639 0.594932C4.86644 0.510846 4.8381 0.429357 4.793 0.355148C4.7479 0.280941 4.68693 0.215477 4.61359 0.162519C4.54019 0.103749 4.45407 0.0592394 4.36063 0.0317774C4.2672 0.00431633 4.16847 -0.00550461 4.07062 0.00292969C3.97276 0.011364 3.8779 0.0378714 3.79198 0.0807934C3.70605 0.123714 3.63092 0.182124 3.57127 0.252362L0.123055 4.10277C0.0334468 4.22154 -0.0092845 4.36389 0.00168896 4.50706Z"
            fill="#002B5B" />
        </svg>
        <button v-for="page in totalPages" :key="page" class="ps-3"
          :class="['btn', 'btn-sm', currentPage === page ? 'text-white' : 'btn-outline']" @click="currentPage = page">
          {{ page }}
        </button>
        <svg class="ms-3" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.99831 4.50706C4.99864 4.657 4.94054 4.80231 4.83411 4.91777L1.26453 8.76817C1.14335 8.89922 0.969215 8.98164 0.780437 8.99728C0.591658 9.01293 0.403697 8.96052 0.257904 8.8516C0.11211 8.74267 0.020426 8.58614 0.00302095 8.41645C-0.0143841 8.24676 0.0439153 8.07781 0.165095 7.94675L3.36344 4.50706L0.279322 1.06736C0.22002 1.00172 0.175734 0.926192 0.149011 0.845117C0.122288 0.76404 0.113654 0.679017 0.123605 0.594932C0.133557 0.510846 0.161897 0.429357 0.206998 0.355148C0.252099 0.280941 0.313071 0.215477 0.386409 0.162519C0.459815 0.103749 0.545932 0.0592394 0.639365 0.0317774C0.732798 0.00431633 0.831533 -0.00550461 0.929385 0.00292969C1.02724 0.011364 1.1221 0.0378714 1.20802 0.0807934C1.29395 0.123714 1.36908 0.182124 1.42873 0.252362L4.87695 4.10277C4.96655 4.22154 5.00928 4.36389 4.99831 4.50706Z"
            fill="#002B5B" />
        </svg>
      </div>
    </div>
    <FilterSearch />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { MainSvgs } from "@/public/icons/landing.tsx"
import { computed } from 'vue'
import CartModal from '/components/CartModal.vue'
import { products, getProductById, getProductsByFirm } from '~/stores/productStore'

const isOpen = ref(false);
const activeCategory = ref('filters');
const catalogRef = ref(null);

const toggleDropdown = (event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.dropdown-menu');
  const catalogButton = document.querySelector('.catalog-btn');

  if (dropdownElement && catalogButton) {
    const isClickInside = dropdownElement.contains(event.target) ||
      catalogButton.contains(event.target);

    if (!isClickInside) {
      isOpen.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const sidebarCategories = [
  { id: 'filters', title: 'Виды фильтров', icon: MainSvgs.category1 },
  { id: 'manufacturers', title: 'Производители', icon: MainSvgs.category2 },
  { id: 'equipment', title: 'Марки техники', icon: MainSvgs.category3 },
  { id: 'applications', title: 'Применение', icon: MainSvgs.category4 }
];

const filterCategories = [
  { icon: MainSvgs.gidro, title: 'Гидравлические', count: '123423 товара', subcategories: ['Всасывающие', 'Сливные', 'Напорные'] },
  { icon: MainSvgs.vozdush, title: 'Воздушные', count: '123423 товара' },
  { icon: MainSvgs.gazoviy, title: 'Газовые', count: '123423 товара' },
  { icon: MainSvgs.maslyanni, title: 'Масляные', count: '123423 товара' },
  { icon: MainSvgs.topliviy, title: 'Топливные', count: '123423 товара' },
  { icon: MainSvgs.salonniy, title: 'Салонные', count: '123423 товара' },
  { icon: MainSvgs.sapuni, title: 'Сапуны', count: '123423 товара' },
  { icon: MainSvgs.separatori, title: 'Сепараторы', count: '123423 товара', subcategories: ['Воздушно-масляные', 'Судовые'] },
  { icon: MainSvgs.osushiteli, title: 'Осушители тормозов', count: '123423 товара' }
];

const manufacturerCategories = [
  { logo: "/images/doring.png" },
  { logo: "/images/hi-fi-filter.png" },
  { logo: "/images/donaldson.png" },
  { logo: "/images/fil-filter.png" },
  { title: 'Argo Hytos' },
  { title: 'Baldwin' },
  { title: 'Bosch' },
  { title: 'Fil Filter' },
  { title: 'Fleetguard' },
  { title: 'Hi-Fi Filter' },
  { title: 'Hydac' },
  { title: 'MANN Filter' },

];

const equipmentCategories = [
  { title: 'Bobcat' },
  { title: 'Bomag ' },
  { title: 'Caterpillar' },
  { title: 'Doosan' },
  { title: 'Hitachi' },
  { title: 'JCB' },
  { title: 'John Deere' },
  { title: 'Komatsu' },
  { title: 'Terex' },
  { title: 'Zoomlion' },
  { title: 'XCMG' },
  { title: 'МТЗ' },
];

const applicationCategories = [
  { title: 'Бульдозеры', image: '/images/buldozer.png' },
  { title: 'Погрузчики', image: '/images/pogruzchik.png' },
  { title: 'Экскаваторы', image: '/images/ekskavator.png' },
  { title: 'Генератор, ДГУ', image: '/images/generator.png' },
  { title: 'Дизельные двигатели' },
  { title: 'Компрессор' },
  { title: 'Промышленное оборудование' },

];

const getCategoryData = (categoryId) => {
  switch (categoryId) {
    case 'filters':
      return { title: 'Виды фильтров', data: filterCategories };
    case 'manufacturers':
      return { title: 'Производители', data: manufacturerCategories };
    case 'equipment':
      return { title: 'Марки техники', data: equipmentCategories };
    case 'applications':
      return { title: 'Применение', data: applicationCategories };
    default:
      return { title: 'Виды фильтров', data: filterCategories };
  }
};

const route = useRoute()
const currentPage = ref(1)
const totalPages = ref(6)
const showCartModal = ref(false)

const incrementQuantity = (product) => {
  const productToUpdate = getProductById(product.id)
  if (productToUpdate) {
    productToUpdate.quantity++
  }
}

const decrementQuantity = (product) => {
  const productToUpdate = getProductById(product.id)
  if (productToUpdate && productToUpdate.quantity > 1) {
    productToUpdate.quantity--
  }
}

const addToCart = () => {
  showCartModal.value = true
}

const closeModal = () => {
  showCartModal.value = false
}

const continueShopping = () => {
  showCartModal.value = false
}

const goToCheckout = () => {
  showCartModal.value = false
}

</script>