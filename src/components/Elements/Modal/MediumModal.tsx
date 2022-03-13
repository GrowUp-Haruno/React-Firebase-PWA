import { FC, memo } from 'react';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  Stack,
  Spacer,
  ModalProps,
} from '@chakra-ui/react';
import { CloseButton } from '../../Elements/Button/CloseButton';
import { PrimaryModalCloseButton } from '../../Atoms/Modal/PrimaryModalCloseButton';
import { PrimaryModal } from '../../Atoms/Modal/PrimaryModal';

//Propsの型定義
type PropType = {
  modalTitle?: string;
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
};
/**
 * ### propテンプレート
 * - isOpen={isOpen} onClose={onClose} modalTitle={""}
 *
 * ### 使用方法
 * - childrenは必須prop
 * - isOpenとonCloseは呼び出し先でchakrauiのカスタムフックuseDisclosure()を用いること
 *
 * ### prop説明
 * - isOpen: boolean;
 * - onClose: () => void;
 * - modalTitle?: string;
 *    - モーダルのタイトル
 *    - 指定しなかった場合は表示されない
 * - children: ReactNode
 */
export const MediumModal: FC<PropType> = memo(({ isOpen, onClose, modalTitle, children }) => {
  return (
    <PrimaryModal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight" size={'md'}>
      <ModalOverlay />
      <ModalContent as={Stack}>
        <HStack>
          {modalTitle && <ModalHeader flex={1}>{modalTitle}</ModalHeader>}
          <Spacer />
          <PrimaryModalCloseButton size="md" />
        </HStack>

        <ModalBody>{children}</ModalBody>

        <ModalFooter as={Stack} alignItems="left">
          <CloseButton onClose={onClose} />
        </ModalFooter>
      </ModalContent>
    </PrimaryModal>
  );
});
