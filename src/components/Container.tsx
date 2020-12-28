import * as React from 'react';
import { bool } from 'prop-types';

import TopContent from './TopContent';
import SubHeaderComponent from './SubHeader';
import FormContainer from './Form';

const Container: React.FC = () => {
  return (
    <div style={{ margin: '53px 0px' }}>
      <SubHeaderComponent />
      <TopContent />
      <FormContainer />
    </div>
  );
};

export default Container;
