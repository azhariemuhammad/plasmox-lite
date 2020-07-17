import * as React from 'react'

import { TextField } from './styles'

export interface ITextInput {
  placeholder?: string
  name?: string
  value?: string
  handleOnChange: any
}

const TextInput: React.FC<ITextInput> = ({
  placeholder,
  name,
  value,
  handleOnChange,
}) => {
  return (
    <TextField>
      <input
        className="input__field"
        type="text"
        value={value}
        name={name}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </TextField>
  )
}

export default TextInput
