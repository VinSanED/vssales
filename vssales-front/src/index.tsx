import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from 'styles/globalSty';
import { ThemeProvider } from 'styled-components';
import { theme1 } from 'styles/theme';
import Nav from 'components/navbar/navInd';
import Foot from 'components/footer/footInd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}>
      <GlobalStyles/>
      <Nav/>
      <App />
      <Foot/>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals(console.log);
