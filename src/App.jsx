import NavBar from './componentes/navbar/navbar'
import ItemListConteiner from './componentes/ItemListConteiner/itemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './componentes/error/error'

function App() {

  return (
    <>

      <BrowserRouter>

      <NavBar/>
      
      <ItemListConteiner/>

        <Routes>

          <Route path='/' element={<ItemListConteiner/>}/>

          <Route path='/productos' element={<ItemListConteiner/>}/>

          <Route path='/item/:id' element={<ItemDetailConteiner/>}/>

          <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>

           <Route path='*' element={<Error/>} />

         </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
