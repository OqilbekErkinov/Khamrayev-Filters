import { $api } from '@/http/interceptor';

const getBrand = () => {
  return $api.get('/brands_of_equipments');
};


export default {
    getBrand
};