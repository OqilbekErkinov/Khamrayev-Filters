import { ref } from 'vue'

export const products = ref([
  {
    id: 'DA19800',
    name: 'DA19800',
    firm: 'DORING',
    type: 'Воздушный фильтр',
    money: 'В наличии',
    image: '/images/LF3657.png',
    quantity: 1
  },
  {
    id: 'SN70248',
    name: 'SN70248',
    firm: 'DORING',
    type: 'Топливные фильтр',
    money: 'В наличии',
    image: '/images/LF3657.png',
    quantity: 1
  }
])

// Helper functions to get specific data
export const getProductNames = () => {
  return products.value.map(product => ({
    name: product.name,
    quantity: product.quantity
  }))
}

export const getProductById = (id) => {
  return products.value.find(product => product.id === id)
}

export const getProductsByFirm = (firm) => {
  return products.value.filter(product => product.firm === firm)
}

// Function to get custom fields
export const getProductFields = (fields) => {
  return products.value.map(product => {
    const selectedFields = {}
    fields.forEach(field => {
      if (field in product) {
        selectedFields[field] = product[field]
      }
    })
    return selectedFields
  })
}