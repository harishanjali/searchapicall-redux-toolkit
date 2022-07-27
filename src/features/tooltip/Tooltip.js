import React from 'react'
import ReactTooltip from 'react-tooltip';

export default function Tooltip() {
  return (
    <div>
        <p data-tip="hello world">Tooltip</p>
        <ReactTooltip />
    </div>
  )
}
