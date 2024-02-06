

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fecthAction } from "../store/FecthStatusSllice";
import { ItemAction } from "../store/ItemSlice";


const Fecthitem = () => {
  const fetchStatus = useSelector((store) => store.fecthstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
  

    dispatch(fecthAction.markFetchingStarted());
    
   
        /* item store*/
        const items= [
          
          {
            "id": "001",
            "gender": "women",
            "image": "images/1.jpg",
            "company": "Carlton London",
            "item_name": "Rhodium-Plated CZ Floral Studs",
            "original_price": 1045,
            "current_price": 606,
            "discount_percentage": 42,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.5,
              "count": 1400
            }
          },
          {
            "id": "002",
            "gender": "women",
            "image": "images/2.jpg",
            "company": "CUKOO",
            "item_name": "Women Padded Halter Neck Swimming Dress",
            "original_price": 2599,
            "current_price": 1507,
            "discount_percentage": 42,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.3,
              "count": 24
            }
          },
          {
            "id": "003",
            "gender": "women",
            "image": "images/3.jpg",
            "company": "NUEVOSDAMAS",
            "item_name": "Women Red & White Printed A-Line Knee-Length Skirts",
            "original_price": 1599,
            "current_price": 495,
            "discount_percentage": 69,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.1,
              "count": 249
            }
          },
          {
            "id": "004",
            "gender": "men",
            "image": "images/4.jpg",
            "company": "ADIDAS",
            "item_name": "Indian Cricket ODI Jersey",
            "original_price": 999,
            "current_price": 999,
            "discount_percentage": 0,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 5,
              "count": 10
            }
          },
          {
            "id": "005",
            "gender": "men",
            "image": "images/5.jpg",
            "company": "Roadster",
            "item_name": "Pure Cotton T-shirt",
            "original_price": 1399,
            "current_price": 489,
            "discount_percentage": 65,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.2,
              "count": 3500
            }
          },
          {
            "id": "006",
            "gender": "men",
            "image": "images/6.jpg",
            "company": "Nike",
            "item_name": "Men ReactX Running Shoes",
            "original_price": 14995,
            "current_price": 14995,
            "discount_percentage": 0,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 0,
              "count": 0
            }
          },
          {
            "id": "007",
            "gender": "men",
            "image": "images/7.jpg",
            "company": "The Indian Garage Co",
            "item_name": "Men Slim Fit Regular Shorts",
            "original_price": 1599,
            "current_price": 639,
            "discount_percentage": 60,
            "rating": {
              "stars": 4.2,
              "count": 388
            }
          },
          {
            "id": "008",
            "gender": "beauty",
            "image": "images/8.jpg",
            "company": "Nivea",
            "item_name": "Men Fresh Deodrant 150ml",
            "original_price": 285,
            "current_price": 142,
            "discount_percentage": 50,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.2,
              "count": 5200
            }
          },
          {
            "id": "009",
            "gender": "women",
            "image": "images/9.jpg",
            "company": "CUKOO",
            "item_name": "Women top Neck Swimming Dress",
            "original_price": 499,
            "current_price": 249,
            "discount_percentage": 50,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 5,
              "count": 20
            }
          },
          {
            "id": "010",
            "gender": "women",
            "image": "images/10.jpg",
            "company": "roster",
            "item_name": "Women top Dress",
            "original_price": 599,
            "current_price": 399,
            "discount_percentage": 42,
            "return_period": 14,
            "delivery_date": "10 Oct 2023",
            "rating": {
              "stars": 4.3,
              "count": 24
            }
          }
        ]
        dispatch(fecthAction.markFetchDone());
        dispatch(fecthAction.markFetchingFinished());
       
        dispatch(ItemAction.addinitalvalue(items));
        
      
   /* const signal = controller.signal;
  

    dispatch(fecthAction.markFetchingStarted());
    
    fetch("http://localhost:8080/items", { signal })
   
      .then((res) => res.json())
     
      .then(({ items }) => {
        
        dispatch(fecthAction.markFetchDone());
        dispatch(fecthAction.markFetchingFinished());
       
        dispatch(ItemAction.addinitalvalue(items));
        
      });*/

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default Fecthitem;