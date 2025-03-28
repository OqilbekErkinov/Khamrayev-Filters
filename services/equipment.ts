import { $api } from '@/http/interceptor';

const getEquipment = () => {
  return $api.get('/equipments');
};

export default {
    getEquipment
};