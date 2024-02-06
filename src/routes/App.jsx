import Footer from "../components/Footer"
import Header from "../components/Header"
import Fecth from "../components/Fecthitem"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpiner"
import Slider from "./Slider"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const fetchStatus = useSelector((store) => store.fecthstatus);
   
 return (
  <div>
    <Header></Header>
   <Fecth></Fecth>
 <Slider></Slider>
  
   {fetchStatus.currentlyFetching ?<LoadingSpinner/> :  <Outlet/>}
     
     
     <Footer></Footer>
    </div>
    )
}


export default App
