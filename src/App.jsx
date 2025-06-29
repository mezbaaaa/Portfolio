import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'

function App() {

  return (
    <div className='syne-font mx-auto container mt-12 grid-cols-4 grid gap-5 scroll-smooth max-sm:grid-cols-1 max-sm:mt-8 max-sm:gap-0'>
      <div className='col-span-1'>
        <Profile></Profile>
      </div>
      <div className='col-span-3'>
        <Navbar></Navbar>
        <Home></Home>
        <Portfolio></Portfolio>
      </div>
    </div>
  )
}

export default App
