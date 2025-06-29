import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='syne-font mx-auto container mt-12 grid-cols-4 grid'>
      <div className='col-span-1'>
        hello
      </div>
      <div className='col-span-3'>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

export default App
