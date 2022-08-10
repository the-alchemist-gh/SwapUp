import React from "react";

function Item(){
  const itemImg = "https://res.cloudinary.com/malikbanks/image/upload/v1653926520/swap-images/hipster-bicycle-morning-sunrise-by-sea.jpg"


  return (
    <>
      {/* <!--Card 1--> */}
      <div className="max-w-md h-auto rounded overflow-hidden shadow-lg">
        <div className="card-image-layer relative" >
          <img className="" src="https://res.cloudinary.com/malikbanks/image/upload/v1653926520/swap-images/hipster-bicycle-morning-sunrise-by-sea.jpg" alt="Mountain"/>
          <div className="absolute bottom-0 left-0 right-0 py-10 bg-gradient-to-t from-gray-900">
            <div className="absolute bottom-0 bg-white rounded-full right-0 m-3 p-1">
              <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg> 30
              </span>
            </div>
            <span className="absolute bottom-0  bg-teal-200 text-teal-800 text-xs ml-3 mb-3 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              Free
            </span>
          </div>
        </div>
        <div className="py-4 border-b mx-6">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! 
          </p>
          <div className="pt-4">
            <p>Swap with</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div className="mx-6 pt-4 pb-2 flex justify-between">
          <div>
            <h6 className="flex mb-1 border-b pb-1 text-gray-500 font-semibold text-sm">
              10 views
            </h6>
            <h6 class="flex leading-none align-middle text-green-700 items-center font-semibold text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
              2 offers</h6>
          </div>
          
          <button type="button" class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-900 bg-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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