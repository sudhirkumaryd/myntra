import { useSelector } from "react-redux"
const BegSummery=()=>
{
  const items=useSelector((store)=>store.items)
  const beg=useSelector((store)=>store.beg)
  const finalitems=items.filter(item =>{
    const index=beg.indexOf(item.id);
    return index >= 0;
  })
  const CONVENIENCE_FEES=99;
  let totalItem = finalitems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    
    return(
        <div className="bag-summary">
       
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  <h4   className="saving">You will save ₹{totalDiscount} on this order </h4>
  </div>)
}
export default BegSummery