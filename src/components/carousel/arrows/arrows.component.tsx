import React from 'react'

import styled from 'styled-components'

const ArrowWrapper = styled.div`
  cursor: pointer;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1.5vw;
  font-size: 2rem;
  position: absolute;
  top: 45%;
  line-height: 0;
  z-index: 2;

  @media (min-width: 1281px) {
    top: 45%;
  }

  :first-child {
    left: 0;
  }

  :last-child {
    right: 0;
  }
`

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
