import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://88zypgg1anc1.usemoralis.com:2053/server" appId="uoHAU07gdCDSacUuM4B3wq0v4fz93JSWF76WGct9">
      <BrowserRouter>
          <App />
        </BrowserRouter>
    </MoralisProvider>
        </React.StrictMode>,
    
  document.getElementById('root')
)