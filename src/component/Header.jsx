
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
const Header = () => {

    const {login} = useContext(DataContext)
    const {GptSearch,setGptSearch} = useContext(DataContext)
    function handleSignOut(){

        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        // setislogin(false)
        window.location.href = "/"
   
    }

    function handleGpt(){
        setGptSearch(!GptSearch)
        
    }

    return (
        <div className="flex justify-between absolute  w-full p-2 z-20">
            <div className="flex">
                <img
                    alt="LOGO"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    className="sm:w-48 w-24"
                />
            </div>
            <div className="">
                { login && <>
                <button onClick={(handleGpt)} className="sm:w-40 w-16 text-white bg-teal-700 m-2 p-2 rounded-lg animate-bounce cursor-pointer sm:text-xl">{!GptSearch ? "GPT Search": "Home page"}</button>
                <button onClick={handleSignOut} className="sm:text-xl text-red-50 bg-red-700   right-8 m-2 p-2 rounded-md cursor-pointer">Sign out</button>
                </>}
            </div>
        </div>
    );
}

export default Header;
