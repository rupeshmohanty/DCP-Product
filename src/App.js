import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/Product/AddProduct";
import EditProduct from "./Components/Admin/Product/EditProduct";
import ViewProducts from "./Components/Admin/Product/ViewProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "//add" element={<AddProduct/>}/>
          <Route path = "/edit" element={<EditProduct/>}/>
          <Route path = "/" element={<ViewProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
