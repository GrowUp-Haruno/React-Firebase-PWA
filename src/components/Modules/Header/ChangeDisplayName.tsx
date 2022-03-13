import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { PrimaryInputText } from '../../Atoms/Input/PrimaryInputText';
import { useChangeDisplayName } from './hooks/useChangeDisplayName';

//Propsの型定義
type PropsType = {
  changeDisplayName: string;
  setChangeDisplayName: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeDisplayName: FC<PropsType> = memo(
  ({ changeDisplayName, setChangeDisplayName }) => {
    const { displayName, changeUserProfileHandler } = useChangeDisplayName(setChangeDisplayName);

    return (
      <FormControl key="displayName">
        <FormLabel>ユーザー名</FormLabel>
        <PrimaryInputText
          placeholder="ユーザー名"
          key={1}
          value={changeDisplayName}
          onChange={changeUserProfileHandler}
        />
        <FormHelperText>現在の設定： {displayName}</FormHelperText>
      </FormControl>
    );
  }
);
