/** @jsx jsx */
import { jsx } from '@emotion/core'

import { useState, useEffect, useCallback } from 'react'
import TextField from './TextField'
import TextAreaField from './Textarea'
import { formContainer, labelInput, Button } from './styles'
import { getLinkWhastapp } from '../../utils/whatsapp-web'

const FormContainer = () => {
  const [formReport, setFormReport] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
  })
  const [errors, setErrors] = useState({
    name: 'Belum diisi',
    age: 'Belum diisi',
    gender: 'Belum diisi',
    address: 'Belum diisi',
  })
  const [isAllFilled, setIsAllFilled] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    event.preventDefault()
    console.log(e.target.name, e.target.value)
    const { name, value } = e.target
    const newVal = { [name]: value }
    const newErrors = errors
    switch (name) {
      case 'name':
        newErrors.name = value.length > 2 ? '' : 'Nama belum diisi'
        break
      case 'age':
        newErrors.age = value.length > 0 ? '' : 'Umur belum diisi'
        break
      case 'gender':
        newErrors.gender = value.length > 0 ? '' : 'Jenis Kelamin belum diisi'
        break
      case 'address':
        newErrors.address = value.length > 0 ? '' : 'Alamat belum diisi'
        break
      default:
        break
    }

    setErrors({ ...errors, ...newErrors })
    setFormReport({ ...formReport, ...newVal })
  }

  const handleValidation = useCallback(() => {
    let counter = 0
    Object.keys(formReport).map(item => {
      if (formReport[item].length > 1) counter++
    })

    if (counter === 4) {
      setIsAllFilled(true)
    } else {
      setIsAllFilled(false)
    }
  }, [errors])

  useEffect(() => {
    if (formReport) {
      handleValidation()
    }
  }, [formReport])

  const generateMsg = () => {
    const { name, age, gender, address } = formReport
    return `Lapor Malaria: ${name}, ${age}, ${gender}, ${address}`
  }

  const handleSubmit = e => {
    e.preventDefault()
    const link = getLinkWhastapp(generateMsg())
    console.log(link)
    if (link) {
      window.location.href = link
    }
  }

  return (
    <div>
      <div>
        <div css={formContainer}>
          <label css={labelInput} htmlFor="name">
            Nama
          </label>
          <TextField
            placeholder="Jhon Doe"
            name="name"
            handleOnChange={handleOnChange}
          />
        </div>
        <div css={formContainer}>
          <label css={labelInput} htmlFor="age">
            Umur
          </label>
          <TextField
            css={formContainer}
            placeholder="23"
            name="age"
            handleOnChange={handleOnChange}
          />
        </div>
        <div css={formContainer}>
          <label css={labelInput} htmlFor="gender">
            Jenis Kelamin
          </label>
          <TextField
            css={formContainer}
            handleOnChange={handleOnChange}
            placeholder="Laki-laki"
            name="gender"
          />
        </div>
        <div>
          <label css={labelInput} htmlFor="address">
            Alamat
          </label>
          <TextAreaField
            handleOnChange={handleOnChange}
            css={formContainer}
            placeholder="Jalan Baru"
            name="address"
          />
        </div>
      </div>
      <Button disabled={!isAllFilled} onClick={handleSubmit}>
        Lapor Sekarang
      </Button>
    </div>
  )
}

export default FormContainer
