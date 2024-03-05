const Title = (props)=>{

    // console.log("in title ",props.data)

    if(!props?.data?.original_title) return

    return(
        <div className="absolute text-white w-screen aspect-video p-4  sm:pt-56 pt-56 bg-gradient-to-r from-black opacity-50">
            <h1 className=" sm:text-5xl text-2xl font-bold p-4">{props.data.original_title}</h1>
            <p className="sm:text-xl sm:w-[35%] p-4 italic ">{props.data.overview}</p>

        </div>
    )
}

export default Title;