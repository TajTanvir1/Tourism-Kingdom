import { useEffect, useState } from 'react';
import SpotsCard from '../Home/SpotsCard';
import { Helmet } from 'react-helmet';


const AllTouristSpot = () => {
   const [spots, setSpots] = useState([]);

   useEffect(() => {
      fetch('https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/')
         .then(res => res.json())
         .then(data => setSpots(data))
   }, [])


   return (
      <div>
         <Helmet>
            <title>Tourism Kingdom | All Tourist Spot</title>
         </Helmet>

         <h2 className="text-4xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8 font-kanit dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">All Tourist Spot</h2>

         <div className='mx-auto text-center'>
            <details className="dropdown mx-auto text-center my-4 justify-center">
               <summary className="m-1 btn  btn-accent btn-outline btn-wide">Sort by Average Cost</summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li><button className='btn btn-ghost'>Low to High</button></li>
                  <li><button className='btn btn-ghost'>High to Low</button></li>
               </ul>
            </details>
         </div>

         <div className="grid md:grid-cols-2 justify-around">

            {
               spots.map(spot => <SpotsCard key={spot.id} spot={spot}></SpotsCard>)
            }
         </div>
      </div>
   );
};

export default AllTouristSpot;