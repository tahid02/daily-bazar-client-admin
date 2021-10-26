import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { useEffect, useState } from 'react';
import { IProduct } from 'types';
import axios from 'axios';
import productService from 'services/ProductService';
import useAsync from 'hooks/useAsync';
import Header from 'components/common/Header';
const Home = () => {
  // AS USUAL APPROTCH TO CALL API.. WE HAD TO ADD LOADING , ERROR ETC STATE FOR EATCH API CALL IN EATCH FILE
  // const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  // useEffect(() => {
  //   productService.getProduct().then((res) => {
  //     console.log({ res });
  //     console.log('this is home page');
  //     setProducts(res.data);
  //   });
  //   // axios
  //   //   .get('https://fvaly.herokuapp.com/api/product')
  //   //   .then((res) => console.log(res.data));
  // }, []);

  // USING CUSTOM HOOK COMPONENT
  const { data, error, isError, isLoading, isSuccess } = useAsync(
    productService.getProducts
  );
  console.log('product data', data, isLoading, error);
  return (
    <div>
      <Banner />
      <Products
        isLoading={isLoading}
        products={data?.data}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default Home;
