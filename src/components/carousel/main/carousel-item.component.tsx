import React from 'react'

import styled from 'styled-components'

const CarouselListItemWrapper = styled.li`
  margin: 0 var(--slide-margin);
  position: relative;
  transition: opacity calc(600ms / 2) cubic-bezier(0.25, 1, 0.35, 1),
    transform calc(600ms / 2) cubic-bezier(0.25, 1, 0.35, 1);
  width: var(--slide-size);
  z-index: 1;
`

const CarouselListItemImage = styled.img`
  display: block;
  position: relative;
`

const CarouselListItemHeadline = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px 50px;
  background-color: rgba(172, 169, 162, 0.25);

  @media (min-width: 1025px) {
    padding: 30px 50px;
  }
`

const CarouselListItemTitle = styled.span`
  display: block;
  font-size: 3vw;
  color: white;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
`

const CarouselListItemSubtitle = styled.span`
  display: block;
  font-size: 1.25vw;
  color: #ffffff;
  font-weight: bold;
  line-height: 2;
`

type CarouselListItemProps = {
  id: number
  imageUrl: string
  altText?: string
  title: string
  subTitle: string
}

const CarouselListItem = ({
  id,
  imageUrl,
  altText,
  title,
  subTitle
}: CarouselListItemProps) => (
  <CarouselListItemWrapper key={id}>
    <CarouselListItemImage src={`${imageUrl}`} alt={`${altText}`} />
    <CarouselListItemHeadline>
      <CarouselListItemTitle>{title}</CarouselListItemTitle>
      <CarouselListItemSubtitle>{subTitle}</CarouselListItemSubtitle>
    </CarouselListItemHeadline>
  </CarouselListItemWrapper>
)

export default CarouselListItem
