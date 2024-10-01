// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Home'
import Detail from './assets/Components/Detail'

const App = () => {
  return (
      <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
      </BrowserRouter>
      </>
      
  )
}

export default App
