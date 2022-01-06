import { FC, useEffect } from 'react'
import { DivYellow } from './styles'
import { funcProps } from '../../../types/funcProps'

export const Yellow: FC<funcProps> = ({click,style}) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(()=>{
  },[style])
  return <DivYellow changeOpacity={style} onClick={()=>click(2)}/>
}
