import { createBrowserRouter , RouterProvider} from 'react-router-dom' 
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Contact from "./pages/Contact.jsx"
import Layout from './pages/layout.jsx'
import './App.css'


const router = createBrowserRouter([
  {
    path:'/', element: <Layout/>, children:[
      { index: true, element: <Home/>},
      { path : 'home', element: <Home/>},
      { path: 'about', element: <About/>},
      { path: 'portfolio', element: <Portfolio/>},
      { path: 'contact', element: <Contact/>}
    ]
  }
])

function App() {
  return(
    <RouterProvider router={router} />
  )

}

export default App
