import React from 'react'

export default function Marquee({ headline, subhead }) {
  return (
    <div className="marquee">
      <div className="marquee__container">
        <h1>
          {headline}
        </h1>
        <h2>
          {subhead}
        </h2>
      </div>
    </div>
  )
}
