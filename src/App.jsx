import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Pages/Home'
import { Admin } from './Pages/Admin'
import  Add  from './Pages/Add'
import  Edit  from './Pages/Edit'
import { Favorit } from './Pages/Favorit'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/Add' element={<Add />}/>
          <Route path='/Edit/:id' element={<Edit />} />
          <Route path='/Favorit' element={<Favorit />} />
        </Route>
       
      </Routes>

    </>
  )
}

export default App
