import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Home />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
