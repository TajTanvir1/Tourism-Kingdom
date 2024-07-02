import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const { signIn, googleLogin, githubLogin } = useContext(AuthContext)

   const handleSocialLogin = socialProvider => {
      socialProvider()
         .then(result => {
            toast("You Login Successfully");
            console.log(result.user);
            setTimeout(()=>{
               navigate(location?.state ? location.state : '/')
            }, 2000)
         })
         .catch(error => {
            console.error(error)
         })
      }

   const handleLogin = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password')
      console.log(email, password);
      signIn(email, password)
         .then(result => {
            console.log(result.user)
            toast("You Login Successfully");
            setTimeout(()=>{
               navigate(location?.state ? location.state : '/')
            }, 2000)
         })
         .catch(error => {
            console.error(error);
            toast.error("Kindly Provide Correct Email & Password");
         })
   }


   return (
      <div className="lg:p-10 md:p-4 px-2 py-6 h-vh bg-[url('https://i.ibb.co/BfwKPyn/A10-Banner3.png')] bg-no-repeat bg-cover bg-opacity-60 rounded-b-lg ">
         <Helmet>
            <title>Tourism Kingdom | Login</title>
         </Helmet>
         <div className='flex justify-end'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-2xl dark:bg-gray-50 dark:text-gray-800 border-2 shadow-xl lg:mr-10">
               <h1 className="text-3xl font-kanit font-bold text-center">Please Login</h1>
               <form onSubmit={handleLogin}
                  className="space-y-6">
                  <div className="space-y-1 text-sm">
                     <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                     <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-400 border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-info" required />
                  </div>
                  <div className="space-y-1 text-sm relative">
                     <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                     <input  type={showPassword ? "text" : "password"}
                      name="password" placeholder="Password" 
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 border border-gray-300 input-bordered input-info dark:text-gray-800 focus:dark:border-violet-600" required />
                      <span className="absolute bottom-8 -ml-8 items-center" onClick={() => setShowPassword(!showPassword)}>
                     {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                     }
                  </span>
                     <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                     </div>
                  </div>
                  <button to="/login" className="btn lg:btn-md w-full bg-[#22AACC] text-white lg:mr-6 text-center">Login</button>
               </form>
               <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                  <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
               </div>
               <div className="flex justify-center space-x-8">
                  <button
                     onClick={() => handleSocialLogin(googleLogin)}
                     className="btn btn-accent btn-outline px-4 rounded-lg">
                     <span className='dark-color flex items-center text-lg'><span className='px-2'><FcGoogle /></span> Google</span>
                  </button>
                  <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-accent btn-outline px-4 rounded-lg">
                  <span className='dark-color flex items-center text-lg'><span className='px-2 text-black'><FaGithub /></span> Github</span>
                  </button>
               </div>
               <p className="text-sm text-center sm:px-6 dark:text-gray-600 items-center">Don't have an account? Please
                  <Link to="/register" rel="noopener noreferrer" className="underline text-green-700 font-bold text-lg ml-4">Register</Link>
               </p>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Login;