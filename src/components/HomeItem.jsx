import { BegAction } from "../store/BegSlice"
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const beg = useSelector((store) => store.beg);
  const yes = beg.indexOf(item.id);
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {yes === -1 ? <button type="button" onClick={() => { dispatch(BegAction.additembeg(item.id)) }} 
      className="btn-add-bag btn btn-success"><IoIosAddCircleOutline /> Add to Bag</button> : 
      <button type="button"  onClick={() => { dispatch(BegAction.deleteitem(item.id)) }} className="btn-add-bag btn btn-danger"><MdDelete />remove</button>}


    </div>
  )
}
export default HomeItem