import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { PrimaryAvatar } from './PrimaryAvatar';

describe('PrimaryAvatar', () => {
  it('Normal operation', () => {
    render(
      <ChakraProvider>
        <PrimaryAvatar uid="testUID" photoURL="testPhotoURL" icon={<></>} />
      </ChakraProvider>
    );
    const testComponent = screen.getByTestId('PrimaryAvatar');
    expect(testComponent).toBeTruthy();
  });
});
