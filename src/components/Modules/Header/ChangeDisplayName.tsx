import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { PrimaryInputText } from '../../Atoms/Input/PrimaryInputText';
import { useChangeDisplayName } from './hooks/useChangeDisplayName';

//Propsの型定義
type PropsType = { changeDisplayNameState: [string, React.Dispatch<React.SetStateAction<string>>] };

export const ChangeDisplayName: FC<PropsType> = memo(
  ({ changeDisplayNameState: [changeDisplayName, setChangeDisplayName] }) => {
    const currentUser = useContext(AuthContext);

    const { changeUserProfileHandler } = useChangeDisplayName(setChangeDisplayName);

    return (
      <>
        {currentUser ? (
          <FormControl key="displayName">
            <FormLabel>ユーザー名</FormLabel>
            <PrimaryInputText
              placeholder="ユーザー名"
              key={1}
              value={changeDisplayName}
              onChange={changeUserProfileHandler}
            />
            <FormHelperText>現在の設定： {currentUser.displayName}</FormHelperText>
          </FormControl>
        ) : (
          <></>
        )}
      </>
    );
  }
);
