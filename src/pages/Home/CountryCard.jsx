import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {


   return (
       <div className="mb-10 ml-6 p-4">
           <Link to='/countrySpots'>
           <div className="p-4 rounded-md border border-[#13131326] max-w-[350px] mx-auto bg-blue-50 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-50% dark:bg-slate-800 min-h-[400px]">
               <div className="relative">
                   <img src={country.image} alt="" className="rounded-sm bg-[#1313130D] mx-auto" />
                   <div className="absolute bg-opacity-50 bg-gray-600 top-0 flex justify-center items-center align-middle w-full h-full">
                       <h1 className="text-3xl font-kanit font-bold bg-gray-600 bg-opacity-60 p-4 rounded-xl text-green-300">{country.countryName}</h1>
                   </div>
               </div>
               <p className="text-lg p-2">{country.description}</p>
           </div>
           </Link>
       </div>
   );
};

export default CountryCard;