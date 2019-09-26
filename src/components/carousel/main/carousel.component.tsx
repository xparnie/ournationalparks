import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import Arrow from '../arrows/arrows.component'
import CarouselListItem from './carousel-item.component'

const CarouselWrapper = styled.div`
  --slide-size: 95vmin;
  --slide-margin: 4vmin;
  height: calc(var(--slide-size) / 1.5);
  width: var(--slide-size);
  position: relative;
  margin: 0 auto;
`

const CarouselListWrapper = styled.ul`
  display: flex;
  margin: 0 calc(var(--slide-margin) * -1);
  position: absolute;
  transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);
`

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
