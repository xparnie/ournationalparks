import React from 'react'

import { ArrowWrapper } from './arrows.styles'

type ArrowProps = {
  direction: string
  clickFunction: () => void
}

const Arrow = ({ direction, clickFunction }: ArrowProps) => (
  <ArrowWrapper onClick={clickFunction}>
    <i className={`fas fa-chevron-${direction}`}></i>
  </ArrowWrapper>
)

export default Arrow
