import axios from 'axios';

const getProducts = async () =>
  await axios
    .get(`${process.env.PUNK_API_URL}/beers`)
    .then((res) => ({
      error: false,
      products: res.data,
    }))
    .catch(() => ({
      error: true,
      products: null,
    }));

export default getProducts;
