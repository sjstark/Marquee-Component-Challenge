import React from 'react'

import LayoutUI from '../LayoutUI'
import PageUI from '../PageUI'

import { pages } from '../../content.json'

import './MainContent.scss'
import { Redirect, Route, Switch } from 'react-router'

export default function MainContent() {

  return (
    <div className="main-content">
      <LayoutUI pages={pages} />
      <Switch>
        {pages &&
          pages.map((page) => (
            <Route key={`routeFor-${page.slug}`} path={`/${page.slug}`}>
              <PageUI blocks={page.blocks} />
            </Route>
          ))
        }
        <Route path="/">
          <Redirect to="/industries" />
        </Route>
      </Switch>
    </div>
  )
}
