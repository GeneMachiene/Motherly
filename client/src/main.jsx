import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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
