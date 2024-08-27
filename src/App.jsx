import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./componentes/navbar/NavBar";
import { ItemDetailConteiner } from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import { ItemListConteiner } from "./componentes/ItemListConteiner/itemListConteiner";
import { Error } from "./componentes/error/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListConteiner />} />

          <Route path="/category/:categoryId" element={<ItemListConteiner />} />

          <Route path="/item/:id" element={<ItemDetailConteiner />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
