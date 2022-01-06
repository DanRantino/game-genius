import { FC, useEffect } from 'react'
import { DivRed } from './styles'
import { funcProps } from '../../../types/funcProps'

export const Red: FC<funcProps> = ({click,style}) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(()=>{
  },[style])
  return <DivRed changeOpacity={style} onClick={()=>click(1)}/>
}
