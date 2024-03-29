
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
    <div className="container mbc ">
    <header className="d-flex flex-wrap align-items-center  justify-content-center justify-content-md-between py-3 mb-4 ">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/>
        </Link>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {/* <li><Link to="#" className="nav-link px-2 link-secondary">Home</Link></li> */}
        <li><Link to="/Men" className="nav-link px-2">Men</Link></li>
        <li><Link to="/Women" className="nav-link px-2">Women</Link></li>
        <li><Link to="#" className="nav-link px-2">Kids</Link></li>
        <li><Link to="/Beauty" className="nav-link px-2">Beauty</Link></li>
        <li><Link to="#" className="nav-link px-2">Studio <sup>New</sup></Link></li>
      </ul>

      <div class="col-md-3 text-end">
        
     

            <Link className="action_container" to="/Beg">
            <FiShoppingCart/>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{itemnumber.length}</span>
            </Link>

      </div>
      
    </header>
  </div>

  )
}
export default Header
