import * as React from 'react';

import { contentText } from './styles';
const TopContent: React.FC = () => {
  return (
    <div>
      <h5 style={{ marginBottom: '12px' }}>Validasi Hasil</h5>
      <p css={contentText}>
        Dengan ini menyatakan bahwa hasil pemeriksaan tervalidasi.
      </p>
    </div>
  );
};

export default TopContent;
