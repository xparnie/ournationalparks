import React from 'react'

import {
  CarouselListItemWrapper,
  CarouselListItemImage,
  CarouselListItemHeadlineWrapper,
  CarouselListItemTitleText,
  CarouselListItemSubtitleText
} from './carousel-item.styles'

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
    <CarouselListItemHeadlineWrapper>
      <CarouselListItemTitleText>{title}</CarouselListItemTitleText>
      <CarouselListItemSubtitleText>{subTitle}</CarouselListItemSubtitleText>
    </CarouselListItemHeadlineWrapper>
  </CarouselListItemWrapper>
)

export default CarouselListItem
