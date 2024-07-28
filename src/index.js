import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import userClient from './clients/user'

userClient.init('https://logindb-a4df.restdb.io', '7d3ebc7e75ad59998d8cda1cbf02efc8a68e5', fetch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
