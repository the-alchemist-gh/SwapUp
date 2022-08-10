import React,{useState} from "react";
import NavButton from "./NavButton";

function Navbar(){
  const [navbar, setNavbar] = useState(false);


  return (
    <div >
      
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:pb-0 pb-3 md:flex md:px-4">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="inline-flex">
                          <a href="javascript:void(0)">
                            {/* <img src="../src/assets/404.gif"/> */}
                              <h2 className="text-2xl font-bold">WEDEYSWAP</h2>
                          </a>
                          
                        </div>
                        

                        {/* Mobile resp hamburger */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                  <div>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-full border border-gray-300 sm:text-sm focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                  </div>
                  <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}>
                      <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                        <ul className="items-center lg-hidden flex justify-between md:flex md:space-x-6 md:space-y-0">
                            <li className="text-teal-600">
                                <a href="javascript:void(0)">Log In</a>
                            </li>
                            <li className="text-teal-600">
                                <a href="javascript:void(0)">Register</a>
                            </li>
                        </ul>
                        <NavButton />
                      </div>
                  </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      <ul className="items-center flex justify-between md:flex md:space-x-6 md:space-y-0">
                          <li>
                             <NavButton />
                          </li>
                          <li className="text-teal-600">
                              <a href="javascript:void(0)">Log In</a>
                          </li>
                          <li className="text-teal-600">
                              <a href="javascript:void(0)">Register</a>
                          </li>
                          
                      </ul>
                      
                    </div>
                    
                </div>
            </div>
        </nav>

    </div>
  );
}

export default Navbar;