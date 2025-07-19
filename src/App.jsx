import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom' 
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Contact from "./pages/Contact.jsx"
import './App.css'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path:'/', children:[
      { index: true, element: <Home/>},
      { path : 'home', element: <Home/>},
      { path: 'about', element: <About/>},
      { path: 'portfolio', element: <Portfolio/>},
      { path: 'contact', element: <Contact/>}
    ]
  }
])


function App() {

  return (
    <>
      <Navbar /> 
      <RouterProvider router={router}>
      <Outlet /> 
      </RouterProvider>
    </>
  )
}

export default App
