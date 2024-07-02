import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {

   const spots = useLoaderData();
   const { image, spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitor, shortDescription } = spots;

   return (
      <div className="mx-2">
         <Helmet>
            <title>Tourism Kingdom | Spot Details</title>
         </Helmet>
         <h2 className="title-text pb-6 underline">Spot Details</h2>
         <div className="flex justify-center mx-auto">
            <img src={image} alt="" className="rounded-xl lg:h-[500px]" />
         </div>
         <div>
            <h1 className="text-xl md:text-3xl font-kanit font-semibold border-y p-2 my-2 text-center dark-text">Spot Name : {spotName}</h1>
         </div>
         <div className="max-w-[600px] mx-auto">
            <div className="text-center border-b pb-2 flex justify-between">
               <h1>Location : <span className="font-bold">{location}</span></h1>
               <h1>Country Name : <span className="font-bold">{countryName}</span></h1>
            </div>
            <div className="text-center border-b p-2 flex justify-between">
               <h1>Average Cost : <span className="font-bold">${averageCost}</span></h1>
               <h1>Travel Time : <span className="font-bold">{travelTime}</span></h1>
            </div>
            <div className="text-center border-b p-2 md:flex justify-between">
               <h1>Seasonality : <span className="font-bold">{seasonality}</span></h1>
               <h1>Visitor Per Year : <span className="font-bold">{totalVisitor}</span></h1>
            </div>
            <div className="text-center border-b p-2">
               <h1>Short Description : <span className="font-bold">{shortDescription}</span></h1>
            </div>
         </div>



      </div>
   );
};

export default SpotDetails;