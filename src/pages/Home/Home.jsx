import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Spots from "./Spots";
import { Link } from "react-router-dom";
import Country from "./Country";
import TypewriterText from "./TypewriterText";
import Blogs from "./Blogs";
import Quotes from "./Quotes";
import TravelYearly from "./TravelYearly";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Tourism Kingdom | Home</title>
         </Helmet>
         <Banner></Banner>
         <TypewriterText></TypewriterText>
         <Spots></Spots>
         <div className="mx-auto text-center">
         <Link to='/allTouristSpot' className="btn btn-accent btn-wide">View All Spots</Link>
         </div>
         <Country></Country>
         <Blogs></Blogs>
         <Quotes></Quotes>
         <TravelYearly></TravelYearly>
      </div>
   );
};

export default Home;