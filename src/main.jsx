import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Beg from './routes/Beg.jsx'
import Home from './routes/Home.jsx'
import Men from './routes/Men.jsx'
import Women from './routes/Women.jsx'
import Beauty from './routes/Beauty.jsx'
import { Provider } from 'react-redux'
import mintraStore from './store/index.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
       path: "/",
       element: <App/>,
       children:
       [
       {
        path: "/",
        element: <Home/>,
       },
       {
        path: "/Beg",
        element: <Beg/>,
       },
       {
        path: "/Men",
        element: <Men/>,
       },
       {
        path: "/Women",
        element: <Women/>,
       },
       {
        path: "/Beauty",
        element: <Beauty/>,
       }
          ]
    }
   


  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={mintraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
    
  </React.StrictMode>
)
