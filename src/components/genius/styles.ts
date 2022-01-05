import styled, { css } from 'styled-components'

export const Game = styled.div`
  ${() => css`
    display: grid;
    grid-template-areas: 'verde vermelho' 'amarelo azul';
    grid-gap: 10px;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    border-radius: 100%;
    width: 600px;
    height: 600px;
  `}
`
