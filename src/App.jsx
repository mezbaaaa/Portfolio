import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {

  return (
    <div className='syne-font mx-auto container mt-12 grid-cols-4 grid gap-5'>
      <div className='col-span-1'>
        <Profile></Profile>
      </div>
      <div className='col-span-3'>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </div>
  )
}

export default App
