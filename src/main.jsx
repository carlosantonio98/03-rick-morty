import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CharactersPage } from './cartoon/pages/CharactersPage'
import { CartoonApp } from './CartoonApp'
import { AppRoute } from './routes/AppRoute'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CartoonApp />
        </BrowserRouter>
    </React.StrictMode>
)