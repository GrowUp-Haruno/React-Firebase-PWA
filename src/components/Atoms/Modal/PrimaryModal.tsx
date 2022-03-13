import { Modal, ModalProps } from '@chakra-ui/react';
import { FC, memo, useContext } from 'react';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

//Propsの型定義
type PropsType = {
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
  size?: ModalProps['size'];
  motionPreset?: ModalProps['motionPreset'];
};

export const PrimaryModal: FC<PropsType> = memo(
  ({ children, isOpen, onClose, size = 'md', motionPreset = 'slideInRight' }) => {
    const { communicating } = useContext(CommunicatingContext);

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        motionPreset={motionPreset}
        // 通信中はモーダル外側をクリックしても閉じない
        closeOnOverlayClick={!communicating}
      >
        {children}
      </Modal>
    );
  }
);
