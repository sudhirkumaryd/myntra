import BegSummery from "../components/BegSummery"
import BegItem from "../components/BegItem"
import { useSelector } from "react-redux"
const Beg = () => {
  const items=useSelector((store)=>store.items)
  const beg=useSelector((store)=>store.beg)
  const finalitems=items.filter(item =>{
    const index=beg.indexOf(item.id);
    return index >= 0;
  })
  return (
    <><main>
      <div className="bag-page d-flex flex-wrap align-items-center  justify-content-center">
        <div>
      <div className="bag-items-container">
      {finalitems.map((item)=><BegItem   key={item.id} item={item}/>)}
      </div>
      </div>
      <BegSummery/>
      </div>
    </main>
    </>
  )
}
export default Beg
