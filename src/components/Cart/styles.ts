import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  padding: 32px 8px;
  width: 100%;
  z-index: 1;
  background-color: ${cores.rose};
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  color: ${cores.rose};
  background-color: ${cores.beige};
  width: 344px;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  gap: 8px;

  img {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 12px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: none;
    background-image: url(${lixeira});
    background-color: transparent;
  }
`

export const ValorTotal = styled.div`
  margin: 40px 0 16px;
  color: ${cores.beige};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`

export const ButtonContinuar = styled.button`
  border: none;
  background-color: ${cores.beige};
  color: ${cores.rose};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
`
