import { useRef, useState } from "react";
import Validation from "../utils/Validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";


const Login = ()=>{

    // state variable for signin signup

    const navigate = useNavigate()
    const {login,setlogin}  = useContext(DataContext)
  
    const [isSignIn, setisSignIn] = useState(true)
    const [validation,setvalidation] = useState("");
    const [authErrorMsg,setauthErrorMsg] = useState(false);

    const email = useRef(null)
    const password = useRef(null)


    function handleValidation(){
   
        const check = Validation(email.current.value,password.current.value)
        // console.log(check)
        setvalidation(check)

        // sign up
        if(!isSignIn){
            


createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setauthErrorMsg(errorMessage)

});



        }else{
         
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setauthErrorMsg(errorMessage)
            });
            
        }
        // console.log(authErrorMsg,validation)
        if((authErrorMsg==false|| null) &&(validation==null )){
            // console.log("hello")
            
            setlogin(true)
            navigate("/browse")
            
    }

    }

    return(
        <div className="bg-black h-screen w-screen sm:bg-none sm:h-0">
            <div className="absolute sm:relative">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                className=" absolute -z-10"
                />
            </div>
            <div className="">
                <form onSubmit={(e)=>e.preventDefault()} className="bg-black sm:absolute sm:top-44 sm:left-[40%] sm:w-3/12 sm:p-4  text-white bg-opacity-80 pt-20 w-11/12 pl-11">
                    <h1 className="text-4xl font-bold mx-3 my-2">{isSignIn? "Sign In":"Sign Up"}</h1>
                    {!isSignIn &&
                    <input required type="text" placeholder="Enter full name " className="w-full mx-1 my-3 p-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md"/>
                    }
                    <input ref={email} type="email" placeholder="Email  " className="w-full mx-1 my-3 p-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md"/>

                    <input ref={password} type="password" placeholder="Password" className="w-full p-3 mx-1 my-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md" />

                    <p className="text-red-700 text-2xl m-2 p-2">{validation}</p>
                    <p className="text-red-700 text-2xl m-2 p-2">{authErrorMsg}</p>
                    
                    <button 
                    onClick={handleValidation}
                    className="mx-1 my-3 bg-red-600 w-full p-3 text-lg rounded-md ">{isSignIn? "Sign In":"Sign Up"}</button>

                    <p className="mt-16 cursor-pointer ">{isSignIn? "New to Netflix? ":"Already registered "  }
                    <p onClick={()=>{
                        setisSignIn(!isSignIn)
                    }} className="inline text-cyan-600 hover:underline">{isSignIn?"sign up now.":"sign in now."}</p></p>
                </form>
            </div>
        </div>
    )
}


export default Login;