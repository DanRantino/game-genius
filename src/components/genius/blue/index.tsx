import { FC, useEffect } from 'react'
import { DivBlue } from './styles'
import { funcProps } from '../../../types/funcProps'



export const Blue: FC<funcProps> = ({click,style}) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(()=>{

  },[style])
  return <DivBlue changeOpacity={style} onClick={()=>click(3)}/>
}
