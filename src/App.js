import { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

import todoz from "./data"
import Footer from "./components/Footer";


function App() {
  const [filtTodoz, setFiltTodoz] = useState(todoz)


  const onWrite = (e) => {
    e.preventDefault();
    const val = e.target.elements.theVal.value
    const filteredTodosz = todoz.filter((todo) => todo.title.toLowerCase().includes(val.toLowerCase()))
    
    setFiltTodoz(filteredTodosz)

  }

  return (
    <>
    < Navbar onWrite={onWrite} />
    <Todos todoz ={filtTodoz} />
    <Footer />
    </>
  );
}

export default App;
