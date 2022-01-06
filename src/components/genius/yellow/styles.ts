import styled, { css } from 'styled-components'
import { stylesProps } from '../../../types/stylesProps'

export const DivYellow = styled.div<stylesProps>`
  ${({changeOpacity}) => css`
    grid-area: amarelo;
    background-color: yellow;
    border-bottom-left-radius: 100%;
    opacity:${changeOpacity==true?'0.7;':'1'} ;

  `}
`
