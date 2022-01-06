import styled, { css } from 'styled-components'
import { stylesProps } from '../../../types/stylesProps'

export const DivRed = styled.div<stylesProps>`
  ${({changeOpacity}) => css`
    grid-area: vermelho;
    background-color: red;
    border-top-right-radius: 100%;
    opacity:${changeOpacity==true?'0.7;':'1'} ;

  `}
`
