import { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // const navigate = useNavigate();
  const dispatch=useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const phoneNo = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current?.value || '';
    const passwordValue = password.current?.value || '';
    const nameValue = name.current?.value || '';
    const phoneNoValue = phoneNo.current?.value || '';
  
    const message = checkValidData(
      emailValue, 
      passwordValue, 
      phoneNoValue, 
      nameValue, 
      isSignInForm
    );
  
    if (message) {
      setErrorMessage(message);
      return;
    }
  
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          }).then(() => {
            const { uid, displayName, email, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            // navigate("/browse");
          });
        })
        .catch((error) => {
          // console.log('Error during signup:', error);
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await user.reload(); // Ensure latest user data is loaded
          const { uid, displayName, email, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          // navigate("/browse");
        })
        .catch((error) => {
          console.log('Error during sign-in:', error);
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };
  

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='' src={BG_URL} alt='Background_Image' />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black text-white w-3/12 my-36 mx-auto right-0 left-0 py-4 rounded-lg bg-opacity-80'
      >
        <h1 className='font-bold text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {/* Name */}
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700'
          />
        )}

        {/* Email */}
        <input
          ref={email}
          type='text'
          placeholder={isSignInForm ? 'Email or phone number' : 'Email Address'}
          className='p-4 my-4 w-full bg-gray-700'
        />

        {/* Phone Number */}
        {!isSignInForm && (
          <input
            ref={phoneNo}
            type='text'
            placeholder='Phone Number'
            className='p-4 my-4 w-full bg-gray-700'
          />
        )}

        {/* Password */}
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />

        <p className='text-red-500 font-bold text-m'>{errorMessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p>
          <span className='py-4'>{isSignInForm ? 'New to Netflix?' : 'Already Registered?'}</span>
          <span
            className='py-4 cursor-pointer underline px-1'
            onClick={toggleSignInForm}
          >
            {isSignInForm ? 'Sign Up Now' : 'Sign In Now'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
