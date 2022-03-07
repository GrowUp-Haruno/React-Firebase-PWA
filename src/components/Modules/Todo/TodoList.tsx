import { Box, HStack, VStack } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { todoGetDataType } from '../../../models/todoGetDataType';
import { PicKey } from '../../../models/UtilityType';
import { PrimaryCheckBox } from '../../Atoms/Input/PrimaryCheckBox';
import { DeleteButton } from '../../Elements/Button/DeleteButton';

type propsType = {
  todos: todoGetDataType[] | undefined;
  checkBoxChangeHandler: (index: number, changeKey: PicKey<todoGetDataType, boolean>) => void;
};

export const TodoList: FC<propsType> = memo(({ todos, checkBoxChangeHandler }) => {
  const list =
    todos &&
    todos.map((todo, index) => (
      <HStack key={index} justifyContent={'space-between'}>
        <PrimaryCheckBox
          isChecked={todo.isCompleted}
          onChange={() => {
            checkBoxChangeHandler(index, 'isCompleted');
          }}
        />
        <Box alignItems='flex-start' flexGrow={1}>{todo.isDeleted ? <del>{todo.task}</del> : todo.task}</Box>
        <DeleteButton
          isDeleted={todo.isDeleted}
          onClick={() => {
            checkBoxChangeHandler(index, 'isDeleted');
          }}
        />
      </HStack>
    ));

  return <VStack align="stretch">{list}</VStack>;
});
