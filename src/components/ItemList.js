import React from "react";
import Item from "./Item";

function ItemList(){
  return (
    <>
      <div class="p-10 md:container md:mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        <Item />
      </div>
    </>
  )
}

export default ItemList;