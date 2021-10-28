import { IProduct } from './../types';
import request from 'services/httpService';

class ProductService {
  // here we will call  product related api

  getProducts(): Promise<any> {
    // here instead of <any> , it should be <IProduct>
    return request.get('/product'); // https://fvaly.herokuapp.com/api/product this api is provided by programming hero
  }

  
  getMerchantsProducts(): Promise<IProduct[]> {
    return request.get('/merchant/products');
  }

  getProductByID(id: string): Promise<any> {
    return request.get('/product/' + id);
  }

  addProduct(body: object): Promise<any> {
    return request.post('/product', body);
  }

  deleteProductByID(id: string): Promise<any> {
    return request._delete('/product/' + id);
  }
}

export default new ProductService();
