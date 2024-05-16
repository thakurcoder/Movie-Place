const NetworkError = ()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops!</h1>
          <p className="text-lg text-gray-600">It might be happening because the TMDB website does not work on the Jio network in some conditions. Please switch to another network.</p>
        </div>
      </div>
    )
}

export default NetworkError;