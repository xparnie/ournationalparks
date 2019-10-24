import styled from 'styled-components'

export const CarouselListItemWrapper = styled.li`
  margin: 0 var(--slide-margin);
  position: relative;
  transition: opacity calc(600ms / 2) cubic-bezier(0.25, 1, 0.35, 1),
    transform calc(600ms / 2) cubic-bezier(0.25, 1, 0.35, 1);
  width: var(--slide-size);
  z-index: 1;
`

export const CarouselListItemImage = styled.img`
  display: block;
  position: relative;
`

export const CarouselListItemHeadlineWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px 50px;
  background-color: rgba(172, 169, 162, 0.25);

  @media (min-width: 1025px) {
    padding: 30px 50px;
  }
`

export const CarouselListItemTitleText = styled.span`
  display: block;
  font-size: 3vw;
  color: white;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
`

export const CarouselListItemSubtitleText = styled.span`
  display: block;
  font-size: 1.25vw;
  color: #ffffff;
  font-weight: bold;
  line-height: 2;
`
