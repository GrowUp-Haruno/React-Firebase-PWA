import { Button, MenuButton, MenuButtonProps } from '@chakra-ui/react';
import { FC, memo, ReactNode, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

//Propsの型定義
type PropsType = {
  as?: MenuButtonProps['as'];
  icon?: ReactNode;
};

export const PrimaryMenuButton: FC<PropsType> = memo(({ as = Button, icon }) => {
  const { communicating } = useContext(CommunicatingContext);

  return <MenuButton as={as} icon={icon} disabled={communicating} />;
});
