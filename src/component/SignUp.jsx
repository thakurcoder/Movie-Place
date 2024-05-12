import {Link } from "react-router-dom"
import { auth } from "../utils/Firebase";
import { useRef ,useState } from "react";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"

const SignUp = ()=>{

    
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const {login,setlogin}  = useContext(DataContext)
    const [validation,setvalidation] = useState("");
    const [authErrorMsg,setauthErrorMsg] = useState(false);
    
    if(login==true) return window.location.href = '/browse'

    async function handleValidation(){
   
        // const check = Validation(email.current.value,password.current.value)
        // // console.log(check)
        // setvalidation(check)

        // // sign up
      
    
        await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            setlogin(true)
            navigate("/browse")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setauthErrorMsg(errorMessage)

        });



        // console.log(authErrorMsg,validation)
    //     if((authErrorMsg==false|| null) ){
    //         // console.log("hello")
            
           
            
    // }

    }

    return(
        <div>
            <div className="absolute sm:relative">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                className=" absolute -z-10"
                />
            </div>
            <div className="">
                <form onSubmit={(e)=>e.preventDefault()} className="bg-black sm:absolute sm:top-44 sm:left-[40%] sm:w-3/12 sm:p-4  text-white bg-opacity-80 pt-20 w-11/12 pl-11">
                    <h1 className="text-4xl font-bold mx-3 my-2">Sign Up</h1>
                   
                    <input required type="text" placeholder="Enter full name " className="w-full mx-1 my-3 p-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md"/>
                    
                    <input ref={email} type="email" placeholder="Email  " className="w-full mx-1 my-3 p-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md"/>

                    <input ref={password} type="password" placeholder="Password" className="w-full p-3 mx-1 my-3 text-lg bg-neutral-800 bg-opacity-30 border border-white border-spacing-1 rounded-md" />

                    {/* <p className="text-red-700 text-2xl m-2 p-2">{validation}</p>  */}
                    <p className="text-red-700 text-2xl m-2 p-2">{authErrorMsg}</p>
                    
                    <button 
                    onClick={handleValidation}
                    className="mx-1 my-3 bg-red-600 w-full p-3 text-lg rounded-md ">Sign Up</button>

                    <p className="inline-block m-2 p-2 mr-0 pr-0">Already a user&nbsp;</p>
                  <Link to='/' > <p className="inline-block m-2 p-2 ml-0 pl-0 text-cyan-700 hover:underline"> login now</p> </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;