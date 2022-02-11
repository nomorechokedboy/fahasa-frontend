import axiosClient from '../../lib/axiosClient';

export const GetAllProduct = () =>
    axiosClient.get('product/').then((data) => data);
