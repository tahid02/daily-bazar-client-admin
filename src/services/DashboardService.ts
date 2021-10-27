import requests from 'services/httpService';
import { IDashboardState } from 'types';
class DashboardService {
  getDashboardState(): Promise<IDashboardState> {
    return requests.get(`/dashboard/stats`);
  }
}

export default new DashboardService();
