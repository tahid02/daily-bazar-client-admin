import { CCol, CRow, CWidgetStatsB } from '@coreui/react';
import useAsync from 'hooks/useAsync';
import DashboardService from 'services/DashboardService';

const Dashboard = () => {
  const { data } = useAsync(DashboardService.getDashboardState);
  console.log('get dashboard data', data);
  return (
    <div>
      <h1> Welcome to dashboard </h1>
      <CRow>
        <CCol xs={3}>
          <CWidgetStatsB
            className="mb-3"
            progress={{ color: 'success', value: data?.totalUser }}
            text="Widget helper text"
            title="Widget title"
            value={data?.totalUser || '89.9%'}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsB
            className="mb-3"
            color="primary"
            inverse
            progress={{ value: 75 }}
            text="Widget helper text"
            title="Widget title"
            value={data?.totalOrder || '89.9%'}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsB
            className="mb-3"
            color="primary"
            inverse
            progress={{ value: 75 }}
            text="Widget helper text"
            title="Widget title"
            value={data?.totalStore || '89.9%'}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsB
            className="mb-3"
            color="primary"
            inverse
            progress={{ value: 75 }}
            text="Widget helper text"
            title="Widget title"
            value={data?.totalProduct || '89.9%'}
          />
        </CCol>
      </CRow>
    </div>
  );
};

export default Dashboard;
