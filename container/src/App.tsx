import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Micro1App = React.lazy(() => import('micro1/App'))
const Micro2App = React.lazy(() => import('micro2/App'))

const Micro1 = () => (
  <React.Suspense fallback='Loading Micro1'>
    <Micro1App />
  </React.Suspense>
)

const Micro2 = (props: any) => (
  <React.Suspense fallback='Loading Micro2'>
    <Micro2App handleInputChange={props.handleInputChange} />
  </React.Suspense>
)

const App = () => {
  const [message, setMessages] = useState('');
  
  const handleInputChange = (e: any) => {
    setMessages(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Micro Frontend Architecture Test</h1>
      <h2>Container Service</h2>
      <div>
        <ol>
          <li>
            <Link to='/micro1'>Micro1</Link>
          </li>
          <li>
            <Link to='/micro2'>Micro2</Link>
          </li>
        </ol>
      </div>
      <div>
        <p>CommunicationTest: {message}</p>
      </div>
      <br />
      <Routes>
        <Route
          path='micro1/*'
          element={<Micro1 />}
        />
        <Route
          path='micro2/*'
          element={<Micro2 handleInputChange={handleInputChange} />}
        />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
        }
        />
      </Routes>
    </div>
  )
}

export default App
