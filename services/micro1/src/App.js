import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Button from './Button'

import Test1 from './pages/test1'
import Test2 from './pages/test2'

const App = () => (
  <div>
    <h1>Micro Service 1</h1>
    <Link to='page1'>Page1</Link>
    <Link to='page2'>Page2</Link>
    <Routes>
      <Route
        path='page1'
        element={<Test1 />}
      />
      <Route
        path='page2'
        element={<Test2 />}
      />
    </Routes>
  </div>
)

export default App
