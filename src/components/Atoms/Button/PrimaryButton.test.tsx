// import { Button, ButtonProps } from '@chakra-ui/react';
// import { FC, memo, useContext } from 'react';
// import { CommunicatingContext } from '../../../providers/CommunicatingProvider';

// type PropsType = {
//   onClick?: ButtonProps['onClick'];
//   type?: ButtonProps['type'];
//   leftIcon?: ButtonProps['leftIcon'];
//   variant?: ButtonProps['variant'];
//   isDisabled?: ButtonProps['isDisabled'];
//   loadingText?: ButtonProps['loadingText'];
//   as?: ButtonProps['as'];
// };

// export const PrimaryButton: FC<PropsType> = memo(
//   ({ children, onClick, type, leftIcon, variant, isDisabled, loadingText, as }) => {
//     const { communicating } = useContext(CommunicatingContext);

//     return (
//       <Button
//         isDisabled={isDisabled}
//         isLoading={communicating}
//         onClick={onClick}
//         type={type}
//         colorScheme="blue"
//         w="full"
//         variant={variant}
//         leftIcon={leftIcon}
//         loadingText={loadingText}
//         as={as}
//       >
//         {children}
//       </Button>
//     );
//   }
// );

import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { PrimaryButton } from './PrimaryButton';
import { CommunicatingContext } from '../../../providers/CommunicatingProvider';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

describe('PrimaryAvatar', () => {
  it('No Props', () => {
    render(<PrimaryButton />);
    const testComponent = screen.getByTestId('PrimaryButton');
    expect(testComponent).toBeTruthy();
  });
  it('comunicating context is false', async() => {
    const [ communicating, setCommunicating ] = renderHook(() => useState<boolean>(false));
    render(
      <ChakraProvider>
        <CommunicatingContext.Provider value={{communicating, setCommunicating}}>
          <PrimaryButton onClick={()=>{setCommunicating(true)}}/>
        </CommunicatingContext.Provider>
      </ChakraProvider>
    );
    const button = screen.getByTestId('PrimaryButton');
    userEvent.click(button);
    await screen.findByTestId('PrimaryButton');
    screen.debug()
    // expect(testComponent).toHaveTextContent('ロード中です');
  });
});
