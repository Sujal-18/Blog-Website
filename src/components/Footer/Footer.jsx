// import React from 'react'
// import {Link} from 'react-router'
// import Logo from '../Logo'
// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-6 bg-[#e5e0e0] border border-t-1 border-t-gray">
//       <div className="relative z-10 mx-auto max-w-7xl px-4">
//         <div className="-m-6 flex flex-wrap">
//           <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//             <div className="flex h-full flex-col justify-between">
//               <div className="mb-4 inline-flex items-center">
//                 <Logo width="100px" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">
                  
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Company
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Features
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Affiliate Program
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Press Kit
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Support
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Account
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Help
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Customer Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Legals
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Licensing
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Footer


import React from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden pt-11 bg-[#e5e0e0] border-t border-gray-300">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between">
              <div className="mb-3 inline-flex items-center">
                <Logo width="80px" />
              </div>
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} MegaBlog. All rights reserved.
              </p>
            </div>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-gray-700" to="/">Features</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Pricing</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Affiliate Program</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Press Kit</Link></li>
            </ul>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-gray-700" to="/">Account</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Help</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Contact Us</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Customer Support</Link></li>
            </ul>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-3/12">
            <h3 className="mb-3 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-gray-700" to="/">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-gray-700" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer


