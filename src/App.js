import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemCategory from "./components/ItemCategory";
import ItemList from "./components/ItemList";
import Login from "./components/Login";
import Register from "./components/Register";
import NewItem from "./components/NewItem";
import ItemDetails from "./components/ItemDetails";

// import itemData from "../db.json";

function App() {
  // let loginRedirect = useNavigate();
  const [logInState, setLogInState] = useState(false);
  const [logInName, setLogInName] = useState("");
  const [itemState, setItemState] = useState([]);
  const [offerState,setOfferState] = useState([])
  const [searchState, setSearchState] = useState("");
  const [categoryState, setCategoryState] = useState("All");

  function confirmLogin(value, name){
    setLogInState(value)
    setLogInName(name)
  }

  useEffect(()=>{
    // logInState ? (
      fetch("https://swapup-api.herokuapp.com/swaps")
      .then(r=> r.json())
      .then((data)=>{

      fetch("https://swapup-api.herokuapp.com/offers")
      .then(resp=>resp.json())
      .then(offerData=>{
        setOfferState(offerData)
      })
        setItemState(data)
      })
    // ) : (
    //   window.location.pathname !== "/register" ? loginRedirect("/login") : loginRedirect("/register")
      
    // )
  },[])

  // console.log(window.location.href); 
  // console.log(window.location.pathname); 
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

  function addNewItem(value){
    setItemState([...itemState, value])
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
      <Navbar sendSearchValue = {getSearchValue} isLoggedIn={logInState} loginName = {logInName} />
      <Routes>
        <Route path="/item/:category/:id" element={<ItemDetails updatedItem={onUpdateItem} offerData = {offerState}/>}></Route>
        <Route path="/item/add-new" element={<NewItem getFormData={addNewItem} />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login confirmLogin={confirmLogin} />}></Route>
        <Route exact path="/" element={
          <>
            <ItemCategory sendCategoryValue = {getCategoryValue}  />
            <ItemList isLoggedIn={logInState} updatedItem={onUpdateItem} offerData = {offerState} itemData = {filteredItemData} />
          </>
        }>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
