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
    onAuthStateChanged(auth, (user) => {
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
  },[])

  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-44' src={LOGO} alt='CinemaQuest_Logo' />

        {/* Sign out section */}
        {user &&
        <div className='relative'>
          {/* Clickable image to toggle dropdown */}
          <img
            className='w-12 h-12 m-2 cursor-pointer'
            src={signoutImg}
            alt='SignOutImg'
            onClick={toggleDropdown} // Toggle the dropdown on click
          />

          {/* Dropdown */}
          {isOpen && (
            <div className='absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 z-20'>
              {/* User Information */}
              <div className='flex items-center px-4 py-4'>
                {user?.photoURL ? (
                  <img className='w-16 h-16 rounded-full' src={user.photoURL} alt='User Profile' />
                ) : (
                  <div className='w-16 h-16 bg-gray-300 rounded-full'></div> // Placeholder for no photo
                )}
                <div className='ml-4'>
                  <p className='text-sm font-semibold'>{user?.displayName || 'Guest'}</p>
                </div>
              </div>
              <hr className='my-2' />

              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
}
      </div>
        
    </>
        
  );
};

export default Header;
