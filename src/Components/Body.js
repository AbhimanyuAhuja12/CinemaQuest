import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase";
import {addUser, removeUser} from "../utils/userSlice"
import {useDispatch} from "react-redux"

const Body = () => {
const dispatch =useDispatch();
// const navigate =useNavigate();

  const appRouter = createBrowserRouter([
    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path:"/",
        element:<Login/>
    }
  ]);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
     //Sign In And Sign Up
      const {uid,displayName,email} = user;

      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      // navigate("/browse");
      
    } else {
      // User is signed out
      dispatch(removeUser())
      // navigate("/")
      
    }
  });
},[])


  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
