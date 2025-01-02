import React from 'react'
import ReactDOM from "react-dom/client";  //Ye line React components ko web browser ke page ke andar inject karne ke liye hoti hai. Pehle ke tarike (ReactDOM.render) ke comparison me, nayi API (react-dom/client) React 18 ke naye features ko unlock karti hai aur performance ko improve karti hai.
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from "react-router-dom";
import ShopContextProvider from './context/ShopContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  //  BrowserRouter allows you to define routes and navigate between different components or pages in your app using URL paths.
  <BrowserRouter> 
  <ShopContextProvider>
    <App />
    </ShopContextProvider>  
  </BrowserRouter>,
)
