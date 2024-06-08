import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import createCache from '@emotion/cache';

import { AuthContextProvider } from './context/AuthContext.jsx'
import { CacheProvider } from '@emotion/react';

import './index.css'



const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const cache = createCache({
  key: 'css',
  prepend: true,
});

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
