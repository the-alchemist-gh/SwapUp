import React,{useEffect} from "react";
import Navbar from "./components/NavBar";
import ItemCategory from "./components/ItemCategory";
import ItemList from "./components/ItemList";
// import itemData from "../db.json";

function App() {
  useEffect(()=>{
    fetch("")
  })

  return (
    <>
      <Navbar />
      <ItemCategory />
      <ItemList />
    </>
  );
}

export default App;
