import React, { useState } from 'react'
import PreloadImage from 'react-preload-image'

import Marquee from './Marquee'
import CTA from './CTA'

import './PageUI.scss'

export default function PageUI({ blocks }) {

  // Use state for current block allows us to paginate blocks in the future
  // I noticed that blocks were arrays rather than just an object, so there's
  // potential for more than one block per page.
  // setCurrentBlock is removed for build
  const [currentBlock, /*setCurrentBlock */] = useState(blocks[0])

  return (
    <>
      <Marquee headline={currentBlock.headline} subhead={currentBlock.subhead} />
      {currentBlock.cta &&
        <CTA message={currentBlock.cta} />
      }

      {/*
        This could very easily be just a div or an img tag, but I find that
        with large background images, it helps to preload and then fade in.
        An alternative could be to have an isLoaded state and the page doesn't
        change until all parts are loaded. A loading spinner would need to be
        added to inform users that progress is being made.
      */}
      <PreloadImage
        className="page__background"
        lazy
        src={`../media/backgrounds/${currentBlock.background}`}
        duration="1000ms"
      />
    </>
  )
}
