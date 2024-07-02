import { useEffect, useState } from 'react';
// import 'animate.css';
import SpotsCard from './SpotsCard';

const Spots = () => {
   const [spots, setSpots] = useState([]);

   useEffect(() => {
      fetch('https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/spot')
      .then(res => res.json())
      .then(data => setSpots(data))
   }, [])

   return (
      <div>
         <h2  className="text-4xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8 font-kanit dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">Tourists Spots</h2>
         <div className="grid md:grid-cols-2 justify-around">
            
            {
               spots.slice(0,6).map(spot => <SpotsCard key={spot._id} spot={spot}></SpotsCard>)
            }
         </div>
      </div>
   );
};

export default Spots;