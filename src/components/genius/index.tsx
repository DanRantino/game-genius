import { FC, useState } from 'react'
import { Game } from './styles'
import { Blue } from './blue'
import { Yellow } from './yellow'
import { Red } from './red'
import { Green } from './green'

const obj: {
  [index: string]: boolean
} = {
  Blue: false,
  Red: false,
  Yellow: false,
  Green: false,
}

export const Genius: FC = () => {
  const [order, setOrder] = useState<number[]>([])
  const [clickedOrder, setClickedOrder] = useState<number[]>()
  const [score, setScore] = useState(0)
  //new Map([['Blue',0],['Red',0],['Yellow',0],['Green',0]])
  const [shine, setShine] = useState(obj)

  const suffleOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4)
    setOrder((prevState) => [...prevState, (order[order.length] = colorOrder)])
    setClickedOrder([])

    for (const i in order) {
      const elementColor = createColorElement(order[i])
      ligthColor(elementColor, i + 1)
    }
  }
  const createColorElement = (order) => {}

  const ligthColor = (element: string, number: number) => {
    number = number * 500
    setTimeout(() => {
      const prevShine = shine
      prevShine[element] = true
      setShine(prevShine)
    }, number - 250)
    setTimeout(() => {
      const prevShine = shine
      prevShine[element] = true
      setShine(prevShine)
    })
  }
  const chekOrder = () => {
    for (const i in clickedOrder) {
      if (clickedOrder[Number(i)] != order[Number(i)]) {
        lose()
        break
      }
    }
    if (clickedOrder?.length == order.length) {
      alert(`Pontuação: ${score}\n você acertou! Começando próximo nível`)
      nextLevel()
    }
  }
  return (
    <Game>
      <Blue />
      <Red />
      <Yellow />
      <Green />
    </Game>
  )
}
