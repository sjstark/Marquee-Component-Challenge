import React, { useEffect } from 'react'

import LayoutUI from '../LayoutUI'
import PageUI from '../PageUI'

import { pages } from '../../content.json'

import './MainContent.scss'
import { Route, Switch } from 'react-router'

export default function MainContent() {

  return (
    <div className="main-content">
      {/* <div style={{ backgroundColor: "#303030", width: "100vw", height: "100vh", position: "absolute", zIndex: -20, left: 0 }} /> */}
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
          <PageUI blocks={[{}]} />
        </Route>
      </Switch>
    </div>
  )
}
