import React, { useState } from 'react'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<Layout/>} />
        </Routes>
      </BrowserRouter>
      {/* <div className='h-24 w-24 bg-black'>
        rehan
      </div> */}
    </div >
  )
}

export default App
