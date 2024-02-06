
import { IoMdPerson } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";
import Homeicon from "./Homeicon";
function Header()
{
    const itemnumber=useSelector((store)=>store.beg)

    const [chome,sethome]=useState(0);
    const homehandler=()=>
    {
        if(chome===0)
        sethome(1);
       else
       sethome(0)
    }
  return (
  <header>
    <div className="threedish">
<button type="button" className="btn  btn-light"onClick={homehandler  } > <IoReorderThreeSharp/> </button>
   {chome===1 && <Homeicon/>} 
    </div>
      
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/Men">Men</Link>
            <Link to="/Women">Women</Link>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <Link to="/Beauty">Beauty</Link>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoMdPerson />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaRegHeart />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/Beg">
            <FiShoppingCart/>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{itemnumber.length}</span>
            </Link>
        </div>
    </header>
  )
}
export default Header