import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background}; /* фон градієнт */
    color: #071b2e; /* колір тексту */
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1; /* Це гарантує, що головний контент займає доступну висоту */
  }

  footer {
    margin-top: auto; /* Це змусить футер бути внизу */
  }
`;

export default GlobalStyle;
