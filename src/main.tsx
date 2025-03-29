import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { WalletProvider } from "@suiet/wallet-kit";
import '@suiet/wallet-kit/style.css';
import './suiet-wallet-kit-custom.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>,
)