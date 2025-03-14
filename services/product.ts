import { $api } from '@/http/interceptor';

const getProducts = () => {
  return $api.get('/products');
};

const getProductById = (id: number) => {
  return $api.get(`/products/${id}`);
}

export default {
  getProducts,
  getProductById
};