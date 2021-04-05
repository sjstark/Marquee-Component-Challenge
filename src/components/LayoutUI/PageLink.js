import React from 'react'

import { NavLink } from 'react-router-dom'

export default function PageLink({ page }) {
  return (
    <li className="layout__menu-item">
      <NavLink to={page.slug} className="layout__navlink" activeStyle={{ color: "var(--gold)" }}>
        {page.title}
      </NavLink>
    </li>
  )
}
