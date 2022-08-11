import React from "react";
import { NavLink } from "react-router-dom";

function Register(){
  return (
    <>
          <div className="flex items-center justify-center content-center bg-gray-100">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div className="flex justify-center text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-teal-600">Register for an account now</h3>
              <form action="">
                <div className="mt-4">
                  <div>
                    <label className="block" for="Name">Name</label>
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="mt-4">
                    <label className="block" for="email">Email</label>
                    <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="mt-4">
                    <label className="block">Password</label>
                      <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="mt-4">
                    <label className="block">Confirm Password</label>
                      <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">Get Started</button>
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Already have an account? <span> 
                      <NavLink className="text-teal-600 hover:underline" to="/login">
                        Log in
                      </NavLink>
                    </span>
                    
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Go back to <span> 
                      <NavLink className="text-teal-600 hover:underline" to="/">
                        HomePage
                      </NavLink>
                    </span>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default Register