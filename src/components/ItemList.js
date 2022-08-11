import React from "react";
import Item from "./Item";

function ItemList({itemData, updatedItem}){
  return (
    <>
      <div class="p-10 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {
          itemData.map((item)=>(
            <Item key={item.id} updatedItem = {updatedItem} items={item}/>
          ))
        }
      </div>
    </>
  )
}

export default ItemList;