import { Link, NavLink } from "react-router-dom";
import '../../shared/styles.css';
import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
   const [theme, setTheme] = useState('light')
   const { user, logOut } = useContext(AuthContext);

   const handleToggle = e =>{
      if(e.target.checked){
         setTheme('dark')
      } else{
         setTheme('light')
      }

   }

   const handleSignOut = () => {
      logOut()
         .then()
         .catch()
   }

   const links = <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>Home</NavLink></li>
      <li><NavLink to="/allTouristSpot" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>All Tourist Spot</NavLink></li>
      {/* <li><NavLink to="/addTouristSpot" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>Add Tourists Spot</NavLink></li>
      <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>My List</NavLink></li> */}

   </>


   return (
      <div>
         <div className="navbar lit-bg">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                     {links}
                     {
                        user && <li><NavLink to="/addTouristSpot" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>Add Tourists Spot</NavLink></li>
                     }
                     {
                        user && <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>My List</NavLink></li>
                     }
                  </ul>
               </div>
               <Link to="/" className="md:btn md:btn-ghost font-kanit md:text-2xl lg:text-3xl text-xl font-bold dark-color md:underline md:underline-offset-2 underline underline-offset-2 lg:ml-6">
                  <img src="https://i.ibb.co/6WB36Bb/A10-Logo.png" alt="" className="w-0 md:w-10" />
                  Tourism Kingdom</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal lg:text-lg px-1 gap-2">
                  {links}
                  {
                        user && <li><NavLink to="/addTouristSpot" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>Add Tourists Spot</NavLink></li>
                     }
                     {
                        user && <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'menu-active' : 'menu-inactive'}>My List</NavLink></li>
                     }
               </ul>
            </div>

            <div className="navbar-end gap-2">
               <label className="swap swap-rotate">

                  {/* this hidden checkbox controls the state */}
                  <input
                  onChange={handleToggle}
                  type="checkbox" className="theme-controller" value="dim" />

                  {/* sun icon */}
                  <svg className="swap-off fill-current w-6 md:w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                  {/* moon icon */}
                  <svg className="swap-on fill-current w-6 md:w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

               </label>

               {
                  user && <div className="tooltip tooltip-bottom rounded-full w-10 md:w-14" data-tip={user.displayName}>
                     <img src={user?.photoURL || <FaRegUserCircle />} alt="" className="rounded-full border-2 md:border-4 border-blue-400 md:w-14 md:h-14" />
                  </div>
               }


               {
                  user ?
                     <button onClick={handleSignOut} className="btn lg:btn-md btn-sm bg-[#187c95] text-white lg:mr-6">Log Out</button> :
                     <div>
                        <Link to="/login" className="btn btn-ghost lg:text-xl btn-sm dark-text">Login</Link>
                        <span>/</span>
                        <Link to="/register" className="btn btn-ghost lg:text-xl btn-sm dark-text lg:mr-6">Register</Link>
                     </div>
               }
            </div>
         </div>
      </div>
   );
};

export default NavBar;