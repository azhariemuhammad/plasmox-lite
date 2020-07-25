import * as React from 'react'

import { contentText } from './styles'
const TopContent: React.FC = () => {
  return (
    <div>
      <h5 style={{ marginBottom: '12px' }}>Apakah anda merasa sakit?</h5>
      <p css={contentText}>
        Jika anda merasa sakit dengan gejala demam. Mohon untuk mengisi formulir
        dibawah ini. Data akan dikirim melalui pesan Whatsaap ke petugas kami.
      </p>
    </div>
  )
}

export default TopContent
