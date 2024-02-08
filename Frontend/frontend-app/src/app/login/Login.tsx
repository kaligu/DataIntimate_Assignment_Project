'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function Login() {
    const loginButtonClicked:any = () => {
        
        alert("done");
        
    }

    useEffect(
        () => {

        }
    )


  return (
    <>
      <div className="bg-gradient-primary min-h-screen flex justify-center items-center bg-[#4e73df]">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12 ">
            <div className="w-full xl:w-7/12 lg:w-10/12 flex shadow-2xl">
              <div
                className="w-6/12 h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/K4mSJ7kc0As/600x800")',
                }}
              ></div>
              <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center text-black">Welcome Back!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <input
                      className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                      id="email"
                      type="text"
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4 rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label text-sm ml-1 text-gray-600"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full w-full text-sm"
                     onClick={loginButtonClicked}
                    >
                      Login
                    </button>
                  </div>

                  <div className="mb-4">
                    <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full w-full text-sm">
                      Login with Google
                    </button>
                    <button className="mt-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-4 text-sm rounded-full w-full">
                      Login with Facebook
                    </button>
                  </div>

                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Create an Account!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login