import React,{useState,useEffect} from "react";

function Item({items, updatedItem}){
  const {id,name,description,image_url,likes,views,needs,type} = items;
  const [likeState, setLikeState] = useState(likes);
  const [btnIcon, setBtnIcon] = useState(false);

  let likeCount = likeState;

  function handleClick(e){
    setLikeState(likeState+1);
    setBtnIcon(true);
    // alert(likeCount);
  }

  useEffect(()=>{
    fetch(`http://localhost:3000/swaps/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: parseInt(likeCount) ,
      }),
    })
    .then(r=>r.json())
    .then(data=>updatedItem(data))
  },[likeCount,id])

  return (
    <>
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg">
        <div className="h-3/5 card-image-layer relative" >
          <img className="h-full w-full object-cover" src={image_url} alt={name}/>
          <div className="absolute bottom-0 left-0 right-0 py-10 bg-gradient-to-t from-gray-900">
            <div onClick={handleClick} className="absolute bottom-0 bg-white rounded-full right-0 m-3 p-1">
              <span className="flex">
                {
                  btnIcon ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mx-1 text-red-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  )
                }
                 {likeCount}
              </span>
            </div>
            <span className="absolute bottom-0  bg-teal-200 text-teal-800 text-xs ml-3 mb-3 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              {type}
            </span>
          </div>
        </div>
        <div className="py-4 border-b mx-6">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
          <div className="pt-4">
            <p>Swap with</p>
            {
              needs.map((need,index)=>(
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{need}</span>
              ))
            }
          </div>
        </div>
        <div className="mx-6 pt-4 pb-2 flex justify-between">
          <div>
            <h6 className="flex mb-1 border-b pb-1 text-gray-500 font-semibold text-sm">
              {views} views
            </h6>
            <h6 className="flex leading-none align-middle text-green-700 items-center font-semibold text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
              2 offers</h6>
          </div>
          
          <button type="button" className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-900 bg-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
            Make an Offer
          </button>
        </div>
      </div>

    </>
  )
}

export default Item;