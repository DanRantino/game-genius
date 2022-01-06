import styled, { css } from 'styled-components'
import { stylesProps } from '../../../types/stylesProps'

export const DivGreen = styled.div<stylesProps>`
  ${({changeOpacity}) => css`
    grid-area: verde;
    background-color: green;
    border-top-left-radius: 100%;
    opacity:${changeOpacity==true?'0.7;':'1'} ;

  `}
`
