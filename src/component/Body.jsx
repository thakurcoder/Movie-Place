import { Children } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Error from "./Error";
import Login from "./Login";
import Review from "./Review";

const Body = ()=>{

    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>,
        },
           
        {
            path:"/review/:id",
            element:<Review/>,
            errorElement:<Error/>
        },
        {
            path:'*',
            element:<Error/>
        }
            
    ]) 

    return(
        <div>
            <RouterProvider router={approuter} />
        </div>
    )
}

export default Body;