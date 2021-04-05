import React from 'react';

import LayoutUI from './components/LayoutUI'
import PageUI from './components/PageUI'

import { pages } from './content.json'

function App() {
  return (
    <>
      <LayoutUI pages={pages} />
      <PageUI />
    </>
  );
}

export default App;
