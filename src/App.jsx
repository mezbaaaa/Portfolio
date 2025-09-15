import { ToastContainer } from 'react-toastify'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Profile from './components/Profile'

function App() {

  return (
    <div className='syne-font mx-auto container mt-12 grid-cols-4 grid gap-5 scroll-smooth max-sm:grid-cols-1 max-sm:mt-8 max-sm:gap-0'>
      <div className='col-span-1'>
        <Profile></Profile>
      </div>
      <div className='col-span-3'>
        <ToastContainer />
        <Navbar></Navbar>
        <Home></Home>
        <Portfolio></Portfolio>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
