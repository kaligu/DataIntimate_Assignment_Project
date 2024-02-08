import React from 'react'

function Register() {
  return (
    <>
    <div className="bg-gradient-primary min-h-screen flex justify-center items-center bg-[#4e73df]">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12 ">
            <div className="w-full xl:w-7/12 lg:w-10/12 flex shadow-2xl">
              <div
                className="w-4/12 h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/Mv9hjnEUHR4/450x800")',
                }}
              ></div>
              <div className="w-full lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center text-black">Create an Account!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className='mb-4 flex flex-row space-x-2'>
                    <div>
                      <input
                       className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                       id="text"
                       type="text"
                       placeholder="First Name"
                      />
                    </div>
                    <div>
                      <input
                       className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                       id="text"
                       type="text"
                       placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                      id="email"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className='mb-4 flex flex-row space-x-2'>
                    <div>
                      <input
                       className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                       id="text"
                       type="text"
                       placeholder="First Name"
                      />
                    </div>
                    <div>
                      <input
                       className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-500 border-4 focus:border-gray-400 focus:border-4  rounded-3xl appearance-none focus:outline-none focus:shadow-outline focus:border-blue-200"
                       id="text"
                       type="text"
                       placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full w-full text-sm"
                  
                    >
                      Register Account
                    </button>
                  </div>

                  <div className="mb-4">
                    <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full w-full text-sm">
                      Register with Google
                    </button>
                    <button className="mt-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-4 text-sm rounded-full w-full">
                      Register with Facebook
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
                      Already have an account? Login!
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

export default Register