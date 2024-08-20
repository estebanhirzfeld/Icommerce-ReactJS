import NavBar from './componentes/navbar/navbar'
import ItemListConteiner from './componentes/ItemListConteiner/itemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './componentes/error/error'

function App() {

  return (
    <>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListConteiner />} />

          <Route path='/category/:categoryId' element={<ItemListConteiner />} />

          <Route path='*' element={<Error/>} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
