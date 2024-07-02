import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <div className='items-end align-bottom'>
         <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
               <div className="lg:w-1/3">
                  <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                     
                     <span className="self-center  font-kanit text-3xl font-bold dark-color underline">
                     <img src="https://i.ibb.co/6WB36Bb/A10-Logo.png" alt="" className="w-12 mx-auto" />
                        Tourism Kigndom</span>
                  </a>
               </div>
               <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                  <div className="space-y-3">
                     <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Product</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Features</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Integrations</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Pricing</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">FAQ</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold">Company</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Terms of Service</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h3 className="uppercase dark:text-gray-900 font-bold">Developers</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Public API</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Documentation</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Guides</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <div className="uppercase dark:text-gray-900 font-bold">Social media</div>
                     <div className="flex justify-start space-x-3 text-xl">
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                        <FaFacebook /> 
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                        <FaTwitter /> 
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                        <FaInstagram />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© All rights reserved.</div>
         </footer>
      </div>
   );
};

export default Footer;