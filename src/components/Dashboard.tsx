import { FC, memo } from 'react';
import Todo from './Modules/Todo';

const Dashboard: FC = memo(() => {
  return (
    <div>
      <Todo />
    </div>
  );
});

export default Dashboard;
