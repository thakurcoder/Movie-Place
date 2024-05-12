
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
const Header = () => {

    const {login} = useContext(DataContext)
    console.log("login type",login)
    const {GptSearch,setGptSearch} = useContext(DataContext)
    function handleSignOut(){

        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          window.localStorage.setItem("user_login",false)
          window.location.href = "/"
        }).catch((error) => {
          // An error happened.
        });
        // setislogin(false)
        
   
    }

    function handleGpt(){
        setGptSearch(!GptSearch)
        
    }

    function handleLogo(){
        if(login==true){
            // window.location.href = "/browse"
            window.location.href = '/browse'
        }
    }



    return (
        <div className="flex justify-between absolute  w-full p-2 z-20">
            <div className="flex">
                <img
                    onClick={handleLogo}
                    alt="LOGO"
                    src=".\logo.png"
                    className="sm:w-48 w-24"
                />
            </div>
            <div className="">
                { login && window.location.pathname == '/browse' && <> 
                <button onClick={(handleGpt)} className="sm:w-40 w-16 text-white bg-teal-700 m-2 p-2 rounded-lg animate-bounce cursor-pointer sm:text-xl">{!GptSearch ? "GPT Search": "Home page"}</button>
                <button onClick={handleSignOut} className="sm:text-xl text-red-50 bg-red-700   right-8 m-2 p-2 rounded-md cursor-pointer">Sign out</button>
                </>}
            </div>
        </div>
    );
}

export default Header;
