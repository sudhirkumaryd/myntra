import { Link } from "react-router-dom"
const Homeicon=()=>
{
  return(
    <>
       <div className="homeicon add">
            <Link to="/Men">Men</Link>
            <Link to="/Women">Women</Link>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <Link to="/Beauty">Beauty</Link>
            <a href="#">Studio <sup>New</sup></a>
        </div>
    </>
  )

}
export default Homeicon