import { useState } from 'react'
import CardImage from './CardImage'
import CardImageFunds from './CardImageFunds'

const CardsArray = ({ payMets = null, funds }) => {
  const [position, setPosition] = useState(['cards__first', 'cards__second', 'cards__third'])

  const rotate = () => {
    const arr = position
    const first = arr.shift()
    arr.push(first)
    setPosition([...arr])
  }

  return (
    <div className="home-cards" onClick={rotate}>
      {payMets.length >= 3 && (
        <CardImage
          position={position[2]}
          cardInfo={payMets[1]}
          gradient="card__gradient--2"
          key="a"
        />
      )}
      {payMets.length >= 2 && (
        <CardImage
          position={position[1]}
          cardInfo={payMets[0]}
          gradient="card__gradient--1"
          key="b"
        />
      )}
      <CardImageFunds position={position[0]} funds={funds} key="c" />
    </div>
  )
}

export default CardsArray
