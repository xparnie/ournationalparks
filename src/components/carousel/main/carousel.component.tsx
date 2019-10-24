import React, { useState, useEffect } from 'react'

import Arrow from '../arrows/arrows.component'
import CarouselListItem from './carousel-item.component'

import { CarouselWrapper, CarouselListWrapper } from './carousel.styles'

type CarouselProps = {
  items: (number | string | any)[]
  onSlideClickHandler: () => void
}

const Carsouel = ({ items }: CarouselProps) => {
  const [totalCarouselItems, setTotalCarouselItems] = useState<number>(0)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const slideTransform: any = {
    transform: `translateX(-${currentImageIndex * (100 / totalCarouselItems)}%)`
  }

  useEffect((): void => {
    setTotalCarouselItems(items.length)
  }, [items.length])

  const onSlideClickHandler = (direction: string) => {
    indexManager(direction)
  }

  const indexManager = (direction: string) => {
    let index: number = 0

    const zeroBaseTotalCarouselItems: number = totalCarouselItems - 1

    if (direction === 'left') {
      index =
        currentImageIndex <= 0
          ? zeroBaseTotalCarouselItems
          : currentImageIndex - 1
    } else {
      index =
        currentImageIndex === zeroBaseTotalCarouselItems
          ? 0
          : currentImageIndex + 1
    }

    setCurrentImageIndex(index)
  }

  return (
    <CarouselWrapper>
      <Arrow
        direction="left"
        clickFunction={() => onSlideClickHandler('left')}
      />
      <CarouselListWrapper style={slideTransform}>
        {items.map(({ id, ...otherProps }) => (
          <CarouselListItem key={id} {...otherProps} />
        ))}
      </CarouselListWrapper>
      <Arrow
        direction="right"
        clickFunction={() => onSlideClickHandler('right')}
      />
    </CarouselWrapper>
  )
}

export default Carsouel
