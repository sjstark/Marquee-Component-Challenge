import React, { useState } from 'react'

import './LayoutUI.scss'

import abcLogo from '../../media/abc_logo.svg'
import PageLink from './PageLink'

export default function LayoutUI({ pages }) {

  const emailAddress = 'hello@samstark.me'

  const handleContact = () => {
    window.open(`mailto:${emailAddress}`, "_blank")
  }

  return (
    <header className="layout">
      <nav className="layout__navigation">
        <img src={abcLogo} alt="abc logo" className="layout__abc-logo" />
        <ul className="layout__menu">
          {pages &&
            pages.map((page, idx) => <PageLink key={`pageLink-${page.slug}`} page={page} />)
          }
        </ul>
      </nav>
      <button className="layout__contact-btn" onClick={handleContact}>
        Contact Us
      </button>
    </header>
  )
}
