import React from 'react'

import handleContact from '../../utils/email'

export default function CTA({ message }) {

  return (
    <div className="cta">
      <h3 className="cta__message">
        {message}
      </h3>
      <button className="cta__button" onClick={handleContact}>
        LET'S TALK.
        <span className="cta__button-arrow" >&#8594;</span>
      </button>
    </div>
  )
}
