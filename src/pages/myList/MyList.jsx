import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyList = () => {

   const { user } = useContext(AuthContext);
   const [spots, setSpots] = useState([]);
   
   useEffect(() => {
      fetch(`https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/myList/${user?.email}`)
      .then(res => res.json())
      .then(data => {
         setSpots(data)
      })
   }, [user]);
   

   // console.log(allSpot);
   
   const handleDelete = id => {
      console.log(id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {


            fetch(`https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/spot/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  // console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your Spot has been deleted.",
                        icon: "success"
                     });
                     const spotLeft = spots.filter(spot => spot._id !== id);
                     setSpots(spotLeft);
                  }
               })
         }
      });
   }


   return (
      <div className="md:my-10 my-4">
         <Helmet>
            <title>Tourism Kingdom | My List</title>
         </Helmet>
         <h1 className="title-text pb-6 underline">My List</h1>
         <div className=" flex justify-center text-center mx-auto ">
            <div className="w-[95%] lg::w-[90%] text-center align-middle items-center overflow-x-auto">
               <table className="table table-zebra text-center border-2 rounded-lg">
                  {/* head */}
                  <thead className="border">
                     <tr className="text-lg font-bold font-kanit text-green-900 bg-sky-100">
                        <th className="border">Sl No</th>
                        <th className="border">Spot Name</th>
                        <th className="border">Country</th>
                        <th className="border">Location</th>
                        <th className="border">Average Cost</th>
                        <th className="border">Update</th>
                        <th className="border">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        spots?.map((spot, i) => <tr key={i}>
                           <th className="border">{i + 1}</th>
                           <td className="border">{spot.spotName}</td>
                           <td className="border">{spot.countryName}</td>
                           <td className="border">{spot.location}</td>
                           <td className="border">{spot.averageCost}</td>
                           <td className="border"><Link to={`/updatePage/${spot._id}`}><button className="btn btn-sm btn-outline btn-info">Update</button></Link></td>
                           <td className="border">
                              <button
                                 onClick={() => handleDelete(spot._id)}
                                 className="btn btn-sm btn-outline btn-warning">Delete</button>
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyList;