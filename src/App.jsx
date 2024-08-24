import NavBar from './componentes/navbar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import Error from './componentes/error/Error'

function App() {

  return (
    <>

      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route path='/' element={<ItemListConteiner/>} />

          <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>

           <Route path='/item/:id' element={<ItemDetailConteiner/>}/>

          <Route path='*' element={<Error/>} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
