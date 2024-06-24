import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import createCache from '@emotion/cache';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CacheProvider } from '@emotion/react';

import './index.css'
import { BrowserRouter } from 'react-router-dom';



const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const cache = createCache({
  key: 'css',
  prepend: true,
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CacheProvider value={cache}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
          </LocalizationProvider>
        </CacheProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
