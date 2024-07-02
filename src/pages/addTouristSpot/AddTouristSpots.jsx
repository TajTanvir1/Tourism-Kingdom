import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';


const AddTouristSpots = () => {

   
   const { user } = useContext(AuthContext);

   // console.log(user)

   const handleAddSpot = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const image = form.get('image');
      const spotName = form.get('spotName');
      const countryName = form.get('countryName');
      const location = form.get('location');
      const shortDescription = form.get('shortDescription');
      const averageCost = form.get('averageCost');
      const seasonality = form.get('seasonality');
      const travelTime = form.get('travelTime');
      const totalVisitor = form.get('totalVisitor');
      const userName = user.displayName;
      const email = user.email;

      const spotDetails = { image, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitor, userName, email };
      console.log(spotDetails);

      toast("Tourism Spot Added Successfully.");

      // Data send to server
      fetch('https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/spot', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(spotDetails)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })

   }


   return (
      <div className="lg:p-10 md:p-4 px-2 py-6 h-vh rounded-b-lg ">
         <Helmet>
            <title>Tourism Kingdom | Add Tourist Spot</title>
         </Helmet>
         <div className=''>
            <div className="w-full  p-6 space-y-3 rounded-2xl dark:bg-gray-100 dark:text-gray-800 border-2 shadow-xl lg:mr-10">
               <h1 className="text-3xl font-kanit font-bold text-center underline mb-6">Add Tourist Spot</h1>
               <form onSubmit={handleAddSpot}
                  className="space-y-2">
                  <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                     {/* Image */}
                     <div className='space-y-1'>
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">Image</label>
                        <input type="photo" name="image" placeholder="Image URL" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                     {/* Tourist Spot Name */}
                     <div className='space-y-1'>
                        <label className="dark-text text-xl font-semibold font-kanit p-3">Tourist Spot Name</label>
                        <input type="text" name="spotName" placeholder="Tourist Spot Name" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>
                  <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                     {/* Country Name */}
                     <div className='space-y-1'>
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">Country Name</label>
                        
                        <select name="countryName" className='w-full px-4 font-semibold py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success space-y-4'>
                           <option value="France" className='text-lg'>France</option>
                           <option value="Italy" className='text-lg'>Italy</option>
                           <option value="Spain" className='text-lg'>Spain</option>
                           <option value="England" className='text-lg'>England</option>
                           <option value="Netherlands" className='text-lg'>Netherlands</option>
                           <option value="Switzerland" className='text-lg'>Switzerland</option>
                           
                           
                        </select>
                     </div>
                     {/* Location */}
                     <div className='space-y-1'>
                        <label className="dark-text text-xl font-semibold font-kanit p-3">Location</label>
                        <input type="text" name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>
                  <div className="text-sm">
                     {/* Short Description */}
                     <div className='space-y-1'>
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">Short Description</label>
                        <input type="text" name="shortDescription" placeholder="Short Description" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>
                  <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                     {/* Average Cost */}
                     <div className='space-y-1'>
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">Average Cost</label>
                        <input type="text" name="averageCost" placeholder="Average Cost" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                     {/* Seasonality */}
                     <div className='space-y-1'>
                        <label className="dark-text text-xl font-semibold font-kanit p-3">Seasonality</label>
                        <input type="text" name="seasonality" placeholder="Seasonality" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>
                  <div className="text-sm grid md:grid-cols-2 md:gap-4 lg:gap-8">
                     <div className='space-y-1'>
                        {/* Travel Time */}
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">Travel Time</label>
                        <input type="text" name="travelTime" placeholder="Travel Time" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                     {/* Total Visitor Per Year */}
                     <div className='space-y-1'>
                        <label className="dark-text text-xl font-semibold font-kanit p-3">Total Visitor Per Year</label>
                        <input type="text" name="totalVisitor" placeholder="Total Visitor Per Year" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>
                  <div className="text-sm grid md:grid-cols-2 pb-2 md:gap-4 lg:gap-8">
                     <div className='space-y-1'>
                        {/* User Email */}
                        <label className=" dark-text text-xl font-semibold font-kanit p-3">User Email</label>
                        <input type="text" readOnly name="userEmail" placeholder="User Email" defaultValue={user.email} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                     {/* User Name */}
                     <div className='space-y-1'>
                        <label className="dark-text text-xl font-semibold font-kanit p-3">User Name</label>
                        <input type="text" readOnly name="userName" placeholder="User Name" defaultValue={user.displayName} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success" />
                     </div>
                  </div>

                  <button to="/login" className="btn lg:btn-md w-full bg-[#477f3b] text-white lg:mr-6 text-center">Add Tourist Spot</button>
               </form>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default AddTouristSpots;