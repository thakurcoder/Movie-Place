const Title = (props) => {
    if (!props?.data?.original_title) return null;

    return (
        <div className=" -mt-24 block bg-black bottom-4 left-0 w-full text-center text-white z-10">
        <h1 className=" bg-black mt-24 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight sm:leading-tight text-shadow">{props.data.original_title}</h1>
        <p className=" block p-11    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic text-shadow">{props.data.overview}</p>
    </div>
    );
};

export default Title;
