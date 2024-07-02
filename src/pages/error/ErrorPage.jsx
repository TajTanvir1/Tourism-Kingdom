import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="flex flex-col items-center h-svh justify-center align-middle">
         <Helmet>
            <title>Tourism Kingdom | Error</title>
         </Helmet>
         <img src={'https://i.ibb.co/5KKTJVF/Error-Page.png'} alt="" className="md:w-[60%]" />
         <h2 className="my-2 text-4xl font-bold">ERROR : Wrong Page</h2>
         <Link to="/"><button className="btn btn-outline btn-accent text-xl font-semibold"><span className="dark-color">Click here back to home</span></button></Link>
      </div>
   );
};

export default ErrorPage;