import { FC, memo } from 'react';

import HeaderButton from './Elements/HeaderButton';

const Header: FC = memo(() => {
  return (
    <header>
      ヘッダー
      <HeaderButton />
    </header>
  );
});

export default Header;
