
import './App.css'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from './Pages/Business'


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/gallery' element={<Gallery/>}/> 
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
