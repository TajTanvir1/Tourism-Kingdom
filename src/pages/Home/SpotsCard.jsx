import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

const SpotsCard = ({ spot }) => {



   const { _id, image, spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitor } = spot;
   return (
      <div>
         <div className="mb-10 ml-6">
            <div className="p-4 lg:p-6 rounded-md border border-[#13131326] max-w-[550px] mx-auto relative">
               <img src={image} alt="" className="rounded-md bg-[#1313130D] lg:h-[250px] mx-auto" />
               <div className="mx-auto flex justify-center">
                  <div className="md:top-48 lg:top-60 top-44 absolute">
                     <h2 className="text-2xl font-bold dark-color mt-4 font-kanit
                   bg-green-300 px-4 max-w-56 text-center rounded-lg
                  ">{spotName}</h2>
                  </div>
               </div>
               <div className="mt-6 mb-2 flex justify-between border-y p-2">
                  <h1 className="flex items-center"><span className="px-1 text-green-700"><IoLocationOutline /></span> Location: <span className="font-bold px-1">{location}</span></h1>
                  <h1 className="flex items-center"><span className="px-1 text-green-700"><FaMapLocationDot /></span>Country: <span className="font-bold px-1">{countryName}</span></h1>
               </div>
               <div className="flex justify-around pt-1">
                  <div className="text-center">
                     <h1>Average Cost: <span className="font-bold p-2 rounded bg-green-100">${averageCost}</span></h1>
                  </div>
                  <div className="text-center">
                     <h1>Travel Time: <span className="font-bold p-2 rounded bg-green-100">{travelTime}</span></h1>
                  </div>
               </div>
               <div className="text-center my-4 border-y p-2">
                     <h1>Seasonality: <span className="font-bold rounded">{seasonality}</span></h1>
                  </div>

               <Link to={`/spot/${_id}`}>
                  <button className="btn btn-accent btn-outline btn-wide flex mx-auto my-4"><span className="dark-color text-lg">View Details</span></button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SpotsCard;