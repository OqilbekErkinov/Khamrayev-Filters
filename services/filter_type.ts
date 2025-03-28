import { $api } from '@/http/interceptor';

const getFilter_type = () => {
  return $api.get('/filter-types');
};

export default {
    getFilter_type
};