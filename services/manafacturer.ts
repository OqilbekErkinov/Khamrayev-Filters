import { $api } from '@/http/interceptor';

const getManafacturer = () => {
  return $api.get('/manafacturers');
};


export default {
    getManafacturer
};