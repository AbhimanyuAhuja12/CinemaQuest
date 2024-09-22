import React, { useEffect, useState } from 'react';
import { LOGO } from '../utils/constants';
import signoutImg from '../Assets/—Pngtree—vector logout icon_4233257.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for showing/hiding the dropdown
  const navigate = useNavigate();
  const dispatch =useDispatch();

  // Correctly use useSelector as a function to access Redux state
  const user = useSelector(store => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate('/');
      })
      .catch(() => {
        navigate('/error');
      });
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle dropdown visibility
  };


  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       //Sign In And Sign Up
        const {uid,displayName,email,photoURL} = user;
  
        dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        
      }
    });
    // unsubscribe when component unmounts
    return ()=>unsubscribe();

  },[])

  return (
    <div className="absolute top-0  w-screen px-8 py-2 bg-transparent bg-gradient from-black to-transparent z-10  flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt='CinemaQuest_Logo' />

      {user && (
        <div className='flex p-2 justify-between'>
          <img
            className='w-12 h-12 m-2 cursor-pointer'
            src={signoutImg}
            alt='SignOutImg'
            onClick={toggleDropdown} 
          />
          {isOpen && (
            <div className='absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 z-20'>
              <div className='flex items-center px-4 py-4'>
                {user?.photoURL ? (
                  <img className='w-16 h-16 rounded-full' src={user.photoURL} alt='User Profile' />
                ) : (
                  <div className='w-16 h-16 bg-gray-300 rounded-full'></div>
                )}
                <div className='ml-4'>
                  <p className='text-sm font-semibold'>{user?.displayName || 'Guest'}</p>
                </div>
              </div>
              <hr className='my-2' />
              <button
                onClick={handleSignOut}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;