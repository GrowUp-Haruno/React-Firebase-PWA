import { FC } from 'react';
import DashboardSwitcher from './Modules/DashboardSwitcher';

const Dashboard: FC = () => {
  return (
    <div>
      <DashboardSwitcher />
    </div>
  );
};

Dashboard.displayName = 'Dashboard';
export default Dashboard;
