import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {BrowserRouter} from 'react-router-dom';

import App from '@/pages/App';
import vars from '@/styles/vars';

interface Props {

}

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=block');

  * {
    font-family: 'Roboto', sans-serif;
    color: ${vars.colors.black};
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
`;
const Root: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>

      <App/>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root/>, document.getElementById('root'));
