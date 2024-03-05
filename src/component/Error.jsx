const Error = ()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-600">We apologize for the inconvenience. Please try again later.</p>
        </div>
      </div>
    )
}

export default Error;