import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import userClient from './clients/user'

userClient.init('https://logindb-a4df.restdb.io', process.env.API_KEY, fetch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
