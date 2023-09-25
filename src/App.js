import { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

import todoz from "./data"


function App() {
  const [filterData, setFilterData] = useState(todoz)
  const [query, setQuery] = useState("")

  let filtTodoz = [];

  const onWrite = (e) => {
    setQuery(e.target.value)
    const newFilt = filterData.filter((todo) => todo.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)
    setFilterData(newFilt)
  }

  return (
    <>
    < Navbar onWrite={onWrite} />
    <Todos todoz ={filterData} filtTodoz={filtTodoz} />
    </>
  );
}

export default App;
