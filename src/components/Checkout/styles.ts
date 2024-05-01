import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  h3 {
    color: ${cores.beige};
    margin-bottom: 16px;
    font-size: 16px;
  }
  .spaceBetween {
    display: flex;
    gap: 40px;
    input {
      width: 100%;
    }
  }
  .marginTop {
    margin-top: 16px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid ${cores.beige};
    background-color: ${cores.beige};
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    color: ${cores.beige};
    font-size: 14px;
    font-weight: bold;
  }
`

export const ButtonEntrega = styled.button`
  border: none;
  background-color: ${cores.beige};
  color: ${cores.rose};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
`
