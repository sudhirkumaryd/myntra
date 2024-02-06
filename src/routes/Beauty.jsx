import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"
const Beauty=()=>
{
    const items=useSelector((store)=>store.items)
    const finalitems=items.filter(item => item.gender=="beauty"
        
        
      )

      return (
        <main>
        <div className="items-container">
            {finalitems.map((val)=><HomeItem key={val.id} item={val}></HomeItem>)}
                
        </div>
    </main>
    )
    

}
export default Beauty