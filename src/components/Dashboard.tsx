import { FC, memo } from 'react';
import DashboardSwitcher from './Modules/DashboardSwitcher';

const Dashboard: FC = memo(() => {
  return (
    <div>
      <DashboardSwitcher />
    </div>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
