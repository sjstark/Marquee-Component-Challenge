import React from 'react'

import { useSpring, animated, config } from 'react-spring'

import handleContact from '../../utils/email'

export default function CTA({ message }) {

  const rise = useSpring({
    transform: "translate(0, 0vh)",
    from: {
      transform: "translate(0, 100%)",
    },
    delay: 200,
    config: config.gentle
  })

  return (
    <animated.div style={rise} className="cta">
      <h3 className="cta__message">
        {message}
      </h3>
      <button className="cta__button" onClick={handleContact}>
        LET'S TALK.
        <span className="cta__button-arrow" >&#8594;</span>
      </button>
    </animated.div>
  )
}
