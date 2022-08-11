import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemCategory from "./components/ItemCategory";
import ItemList from "./components/ItemList";
import Login from "./components/Login";
import Register from "./components/Register";

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

  function onUpdateItem(value){
    const updateItem = itemState.map((item)=>{
      if(item.id===value.id){
        return value
      } else {
        return item
      }
    })

    setItemState(updateItem)
  }

    const filteredItemData = itemState.filter((item)=>{

      if (categoryState === "All" && searchState === '') return true;

      if (categoryState === item.category && searchState === '') return true;

      if (categoryState === "All" && (item.name.toLowerCase().includes(searchState.toLowerCase()))) return true;

      return ((item.category === categoryState) && (item.name.toLowerCase().includes(searchState.toLowerCase())));
      // return (
      //     item.name.toLowerCase().includes(searchState.toLowerCase()) ? true : (
      //       item.category === categoryState ? true : null
      //     )
      // )
      
      // return (item.category !== "All")
    })

  return (
    <>
      <Navbar sendSearchValue = {getSearchValue} />
      <Routes>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path="/" element={
          <>
            <ItemCategory sendCategoryValue = {getCategoryValue}  />
            <ItemList updatedItem={onUpdateItem} itemData = {filteredItemData} />
          </>
        }>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
