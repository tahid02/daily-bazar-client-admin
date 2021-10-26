import request from 'services/httpService';

class StoreService {
  // here we will call  Store related api

  getStore(): Promise<any> {
    // here instead of <any> , it should be <IStore>
    return request.get('/store'); // https://fvaly.herokuapp.com/Store this api is provided by programming hero
  }

  getStoreByID(id: string): Promise<any> {
    return request.get('/store/' + id);
  }

  addStore(body: object): Promise<any> {
    return request.post('/store', body);
  }

  deleteStoreByID(id: string): Promise<any> {
    return request._delete('/store/' + id);
  }
}

export default new StoreService();
