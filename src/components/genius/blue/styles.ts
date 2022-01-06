import styled, { css } from 'styled-components'
import { stylesProps } from '../../../types/stylesProps'


export const DivBlue = styled.div<stylesProps>`
  ${({changeOpacity}) => css`
    grid-area: azul;
    background-color: blue;
    border-bottom-right-radius: 100%;
    opacity:${changeOpacity==true?'0.7;':'1'} ;
    
  `}
`
