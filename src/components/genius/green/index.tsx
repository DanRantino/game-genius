import { FC, useEffect, useState } from 'react'
import { DivGreen } from './styles'
import { funcProps } from '../../../types/funcProps'

export const Green: FC<funcProps> = ({click,style}) => {
  const [ s ] = useState(style)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(()=>{
  },[s])
    return <DivGreen changeOpacity={style} onClick={() => click(0)} />

}
