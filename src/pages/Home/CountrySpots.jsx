import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CountrySpots = () => {


   const { user } = useContext(AuthContext);
   const [spots, setSpots] = useState([]);
   
   useEffect(() => {
      fetch(`https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app//myList/${countryName}`)
      .then(res => res.json())
      .then(data => {
         setSpots(data)
      })
   }, [user]);

   return (
      <div>
         {/* <h1>Country Spots Data</h1> */}
      </div>
   );
};

export default CountrySpots;