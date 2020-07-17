import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const TextField = styled('div')`
  > .input__field,
  .input__textarea {
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    flex: 1 1 0%;
    overflow: hidden;
    transition: border-color 280ms ease 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(229, 231, 233);
    border-image: initial;
    width: 100%;
    padding: 0 4px;
    margin-top: 4px;
    outline-color: #63abff;
  }
  > .input__textarea {
    height: 87px;
    padding: 4px;
    margin-top: 4px;
  }
`

export const formContainer = css({
  margin: '16px 0',
})

export const labelInput = css({
  padding: '4px 0',
})

export const Button = styled('button')`
  width: 100%;
  height: 48px;
  background: #63abff;
  border: 1px solid #63abff;
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffff;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 16px;
  margin: 32px 0;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #519df5;
  }
  &:active {
    background-color: #63abff;
    background-size: 100%;
    transition: background 0s ease 0s;
  }
  &:disabled {
    background: rgba(49, 53, 59, 0.68);
    opacity: 0.5;
    color: rgb(255, 255, 255);
    border: none;
  }
`
