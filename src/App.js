import React,{useEffect, useState} from "react";
import Navbar from "./components/NavBar";
import ItemCategory from "./components/ItemCategory";
import ItemList from "./components/ItemList";
// import itemData from "../db.json";

function App() {
  const [itemState, setItemState] = useState([]);
  const [searchState, setSearchState] = useState("");
  const [categoryState, setCategoryState] = useState("All");

  useEffect(()=>{
    fetch("http://localhost:3000/swaps")
    .then(r=> r.json())
    .then((data)=>{
      setItemState(data)
    })
  },[])

  function getSearchValue(value){
    setSearchState(value);
  }
  function getCategoryValue(value){
    setCategoryState(value);
  }

    const filteredItemData = itemState.filter((item)=>{
      return (
          item.name.toLowerCase().includes(searchState.toLowerCase()) ? true : null
      )
      
      // return (item.category !== "All")
    })

  return (
    <>
      <Navbar sendSearchValue = {getSearchValue} />
      <ItemCategory sendCategoryValue = {getCategoryValue}  />
      <ItemList itemData = {filteredItemData} />
    </>
  );
}

export default App;
