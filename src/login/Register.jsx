import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

   const [showPassword, setShowPassword] = useState(false);
   const { createUser } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

   const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password')
      console.log(name, photo, email, password);
      if(password.length < 6){
         toast.error('Password should be at Least 6 Characters or Longer');
         return;
      }
      else if(!/[A-Z]/.test(password)){
         toast.error('Password should contain at Least 1 Uppercase & 1 Lowercase letter');
         return;
      }
      else if(!/[a-z]/.test(password)){
         toast.error('Password should contain at Least 1 Uppercase & 1 Lowercase letter');
         return;
      }
      
      toast("You Register Successfully");

      createUser(email, password)
         .then(result => {
            console.log(result.user)
         })
         .catch(error => {
            console.error(error.Firebase)
            toast.error("Kindly give us proper information.", error[1]);
         })
         setTimeout(()=>{
            navigate(location?.state ? location.state : '/')
         }, 2000)
      }


   return (
      <div className="lg:p-10 h-vh bg-[url('https://i.ibb.co/4drcf4f/A10-Banner2.png')] bg-no-repeat bg-cover rounded-b-lg ">
         <Helmet>
            <title>Tourism Kingdom | Register</title>
         </Helmet>
         <div className='flex justify-center lg:justify-end'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-2xl dark:bg-gray-50 dark:text-gray-800 border-2 shadow-xl lg:mr-10 mt-4">
               <h1 className="text-3xl font-kanit font-bold text-center">Please Register</h1>
               <form onSubmit={handleRegister}
                  className="space-y-6">
                  <div className="space-y-1 text-sm">
                     <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                     <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                  </div>
                  <div className="space-y-1 text-sm">
                     <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
                     <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                  </div>
                  <div className="space-y-1 text-sm">
                     <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                     <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                  </div>
                  <div className="space-y-1 text-sm relative">
                     <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                     <input
                        type={showPassword ? "text" : "password"}
                        name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                     <span className="absolute top-1/2 -ml-8" onClick={() => setShowPassword(!showPassword)}>
                        {
                           showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                     </span>

                  </div>
                  <button className="btn lg:btn-md w-full bg-[#22AACC] text-white lg:mr-6 text-center">Register</button>
               </form>
               <p className="text-sm text-center sm:px-6 dark:text-gray-600">Already have an account? Please
                  <Link to="/login" rel="noopener noreferrer" href="#" className="underline text-green-700 font-bold text-lg ml-4">Login</Link>
               </p>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Register;