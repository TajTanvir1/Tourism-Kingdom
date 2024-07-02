import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'

const PrivetRoute = ({children}) => {

   const {user, loading} = useContext(AuthContext);

   const location = useLocation();

   if(loading){
      return <span className='flex mx-auto items-center justify-center h-60'>
         <Bars
         height="100"
         width="100"
         color="#22AACC66"
         ariaLabel="bars-loading"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
         />
      </span>
   }

   if(user){
      return children;
   }

   return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;