import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; // Theme추가
import App from './App';

const darkTheme = { // 다크모드 사용
  textColor: '#ffffff',
  backgroundColor: '#111'
}

const lightTheme = { // 일반모드 사용
  textColor: '#111',
  backgroundColor: '#fff'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
