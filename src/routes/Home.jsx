import HomeItem from "../components/HomeItem"
import { useSelector } from "react-redux";
const Home=()=>
{
    const items=useSelector((store)=>store.items);
   
    return (
        <main>
        <div className="items-container">
            {items.map((val)=><HomeItem key={val.id} item={val}></HomeItem>)}
        
        </div>
    </main>
    )
  
}
export default Home;