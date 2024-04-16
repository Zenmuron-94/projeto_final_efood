import { createGlobalStyle } from 'styled-components'

export const cores = {
  beige: '#FFEBD9',
  rose: '#E66767',
  white: '#FFFFFF',
  white2: '#FFF8F2'
}

const GlobalStyle = createGlobalStyle`
*{
  marign: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}

body{
  background-color: ${cores.white2};
  color: ${cores.rose};


}

.container {
  width: 100%;
  margin: 0 auto;
}

`

export default GlobalStyle
