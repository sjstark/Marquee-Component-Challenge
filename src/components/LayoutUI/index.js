import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './LayoutUI.scss'

import abcLogo from '../../media/abc_logo.svg'

export default function LayoutUI({ pages }) {
  return (
    <div>
      <div>
        <img src={abcLogo} alt="abc logo" />
        <ul>
          {pages &&
            pages.map((page, idx) => (
              <li key={`pageLink-${page.slug}`}>
                <Link to={page.slug}>
                  {page.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
