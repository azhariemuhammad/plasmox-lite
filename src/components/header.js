import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { BgTopHeader } from './styles'
import BgTopImage1 from '../assets/images/bg-top-1.svg'
import BgTopImage from '../assets/images/bg-top.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      maxWidth: '500px',
      margin: '0 auto',
    }}
  >
    <BgTopHeader src={BgTopImage} />
    <h1
      style={{
        margin: 0,
        padding: '32px 16px',
        width: '100%',
        fontSize: '24px',
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
