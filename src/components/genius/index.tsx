import React, { FC, useEffect, useState } from 'react'
import { Game } from './styles'
import { Blue } from './blue'
import { Yellow } from './yellow'
import { Red } from './red'
import { Green } from './green'


interface obj {
  [key: string]: boolean
}

export const Genius: FC = () => {
  const [order, setOrder] = useState<number[]>([])
  const [clickedOrder, setClickedOrder] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [shine, setShine] = useState<obj>({
    Blue: false,
    Red: false,
    Yellow: false,
    Green: false,
  })

  const shuffleOrder = () => {
    order[order.length] = Math.floor(Math.random() * 4)
    console.log(order)
    setOrder([...order])
    setClickedOrder([])
    for (const i in order) {
      const elementColor = createColorElement(order[i])
      if (elementColor) {
        lightColor(elementColor, Number(i) + 1)
      }
    }
  }

  const lightColor = (element: string, number:number) => {
    number = number * 500
    let prevShine;

    setTimeout(()=>{
      prevShine = shine
      prevShine[element] = true
      setShine({ ...prevShine })
    },number-250)

    setTimeout(()=>{
      prevShine = shine
      prevShine[element] = false
      setShine({ ...prevShine })
    })
  }

  const checkOrder = () => {
      for (const i in clickedOrder){
        if (clickedOrder[Number(i)] != order[Number(i)])
        {
          gameOver()
          break
        }
      }

    if(clickedOrder.length == order.length)
    {
      alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo level!`)
      nextLevel()
    }
  }

  const click = (color:number) => {
    clickedOrder&&(clickedOrder[clickedOrder?.length] = color)
    const prevShine = shine
    prevShine[color] = true
    setShine(prevShine)
    setTimeout(()=>{
      const prevShine = shine
      prevShine[color] = false
      setShine({ ...prevShine })
      checkOrder()
    },250)
  }

  const createColorElement = (color:number) =>{
    if (color == 0) return 'Green'
    if (color == 1) return 'Red'
    if (color == 2) return 'Yellow'
    if (color == 3) return 'Blue'
  }

  const nextLevel = () => {
    setScore( () => score+1)
    shuffleOrder()
  }
  const gameOver = () =>{
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!`)
    const arr: never[] = []
    setOrder(()=>[...arr])
    setClickedOrder([])
    console.log('game order', order)
    console.log('game clickedorder', clickedOrder)
    console.log('game score', score)
    console.log('game shine', shine)
    playGame()
  }

  const playGame = () =>{
    alert('Novo jogo')
    const newScore = 0
    setScore(newScore)
    nextLevel()
  }

  useEffect(()=>{
''
  },[{ ...shine }])


    return(
      <>
      <Game>
        <Blue key={`Blue${shine.Blue}`} style={shine.Blue} click={click}/>
        <Red key={`Red${shine.Red}`} style={shine.Red} click={click}/>
        <Yellow key={`Yellow${shine.Yellow}`} style={shine.Yellow} click={click}/>
        <Green key={`Green${shine.Green}`} style={shine.Green} click={click}/>
      </Game>
      <button onClick={playGame}>start</button>
    </>
    )


}
