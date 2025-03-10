import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
