import { useRef, useState } from "react";
import Validation from "../utils/Validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import {useNavigate ,Link} from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";


const Login = ()=>{

    // state variable for signin signup
    
    const navigate = useNavigate()
    const {login,setlogin}  = useContext(DataContext)

    
    const [validation,setvalidation] = useState("");
    const [authErrorMsg,setauthErrorMsg] = useState(false);
    
    const email = useRef(null)
    const password = useRef(null)
    // console.log(login)
    if(login==true) return window.location.href = '/browse'
    // console.log('login from login ',login)

    async function handleValidation(){
   
        // const check = Validation(email.current.value,password.current.value)
        // // console.log(check)
        // setvalidation(check)

        // sign up
       
        //  console.log(email.current.value)
        //  console.log(password.current.value)
        await signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setlogin(true)
            window.localStorage.setItem('user_login',true)
            navigate("/browse")
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setauthErrorMsg(errorMessage)
        });
        
        
        // console.log(authErrorMsg,validation)
        // if((authErrorMsg==false|| null)){
            // console.log("hello")
            // console.log(login)
            
            
    // }

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
                    <h1 className="text-4xl font-bold mx-3 my-2">Sign In</h1>
               
                    
                    <input ref={email} type="email" placeholder="Email  " className="w-full mx-1 my-3 p-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md"/>

                    <input ref={password} type="password" placeholder="Password" className="w-full p-3 mx-1 my-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md" />

                    {/* <p className="text-red-700 text-2xl m-2 p-2">{validation}</p> */}
                    <p className="text-red-700 text-2xl m-2 p-2">{authErrorMsg}</p>
                    
                    <button 
                    onClick={handleValidation}
                    className="mx-1 my-3 bg-red-600 w-full p-3 text-lg rounded-md ">Sign In</button>

                    <p className="inline-block m-2 p-2 mr-0 pr-0">New to Netflix&nbsp;</p>
                  <Link to='/sign-up' > <p className="inline-block m-2 p-2 ml-0 pl-0 text-cyan-700 hover:underline"> sign up now</p> </Link>

                    <p className="m-1">login using-</p>
                    <p className="m-1">email - user@gmail.com</p>
                    <p className="m-1">password - user@123</p>
                </form>
            </div>
        </div>
    )
}


export default Login;