import React, { useState } from 'react'

import { animated, useSpring, config } from 'react-spring'

import './LayoutUI.scss'

import handleContact from '../../utils/email'

import abcLogo from '../../media/abc_logo.svg'
import PageLink from './PageLink'

export default function LayoutUI({ pages }) {

  const props = useSpring({
    transform: "translate(0, 0vh)",
    opacity: 1,
    from: {
      transform: "translate(0, -100%)",
      opacity: 0,
    },
    delay: 200,
    config: config.gentle
  })

  return (
    <animated.header style={props} className="layout">
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
    </animated.header>
  )
}
