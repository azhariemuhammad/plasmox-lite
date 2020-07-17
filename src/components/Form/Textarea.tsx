import * as React from 'react'

import { TextField } from './styles'

export interface ITextarea {
  placeholder?: string
  name?: string
  value?: string
  handleOnChange: any
}

const TextAreaField: React.FC<ITextarea> = ({
  placeholder,
  name,
  handleOnChange,
  value,
}) => {
  return (
    <TextField>
      <textarea
        className="input__textarea"
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        name={name}
      />
    </TextField>
  )
}

export default TextAreaField
