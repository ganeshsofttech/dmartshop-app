import { NavLink } from "react-router-dom";

export default function Navbar() {

   const activeStyle = {
       color: "red",
       fontWeight: "bold"
   };

   return (

       <nav>

           <NavLink
               to="/"
               style={({isActive}) =>
                   isActive ? activeStyle : {}
               }
           >
               Home
           </NavLink>

           {" | "}

           <NavLink
               to="/products"
               style={({isActive}) =>
                   isActive ? activeStyle : {}
               }
           >
               Products
           </NavLink>

           {" | "}

           <NavLink
               to="/categories"
               style={({isActive}) =>
                   isActive ? activeStyle : {}
               }
           >
               Categories
           </NavLink>

           {" | "}

           <NavLink
               to="/cart"
               style={({isActive}) =>
                   isActive ? activeStyle : {}
               }
           >
               Cart
           </NavLink>

           {" | "}

           <NavLink
               to="/about"
               style={({isActive}) =>
                   isActive ? activeStyle : {}
               }
           >
               About
           </NavLink>

       </nav>

   );

}
