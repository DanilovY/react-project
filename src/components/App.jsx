// import Product from './Product';
import { Alert } from './Alert';
import { UserMenu } from './Icon';

export const App = () => {
  return (
    <>
      <UserMenu />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};
