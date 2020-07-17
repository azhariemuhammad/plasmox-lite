import styled from '@emotion/styled'
import BgTopImage1 from '../assets/images/bg-top-1.svg'
import BgTopImage from '../assets/images/bg-top.svg'

export const BgTopHeader = styled('div')`
  height: 150px;
  width: 100%;
  z-index: -99;
  position: absolute;
  padding: 1.45rem 1.0875rem;
  background-image: url(${BgTopImage}), url(${BgTopImage1});
  background-repeat: no-repeat, no-repeat;
  background-size: 500px 190px;
`
