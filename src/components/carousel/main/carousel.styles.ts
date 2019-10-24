import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  --slide-size: 95vmin;
  --slide-margin: 4vmin;
  height: calc(var(--slide-size) / 1.5);
  width: var(--slide-size);
  position: relative;
  margin: 0 auto;
`

export const CarouselListWrapper = styled.ul`
  display: flex;
  margin: 0 calc(var(--slide-margin) * -1);
  position: absolute;
  transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);
`
