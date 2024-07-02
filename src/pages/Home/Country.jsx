import { useEffect, useState } from 'react';
import 'animate.css';
import CountryCard from './CountryCard';


const Country = () => {

    const [countries, setCountries] = useState([]);

   useEffect(() => {
      fetch('https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/countryDetails')
      .then(res => res.json())
      .then(data => setCountries(data))
   }, [])


    return (
        <div>
         <h2  className="text-4xl font-bold text-center mt-6 underline lg:mt-16 mb-4 lg:mb-8 font-kanit dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">Countries</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-around">
            {
               countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
            }
         </div>
      </div>
        
    );
};

export default Country;