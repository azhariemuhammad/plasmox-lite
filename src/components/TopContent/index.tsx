import * as React from 'react'

import { contentText } from './styles'
const TopContent: React.FC = () => {
  return (
    <div>
      <h5 style={{ marginBottom: '12px' }}>Apakah anda merasa sakit?</h5>
      <p css={contentText}>
        Jika anda merasa sakit dengan gejala demam. Mohon untuk melapor. Petugas
        kami akan menghubungi segera.
      </p>
    </div>
  )
}

export default TopContent
