import { useDispatch, useSelector } from "react-redux";
import { ItemListing } from "./ItemListing";
import { clearCart, removeItem } from "../utils/CartSlice";

const Cart = () =>{

    const itemsList = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    const handleRemoveItem = () =>{
        dispatch(removeItem());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold"> Cart</h1>
        <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 m-auto">
          
              {itemsList.length===0 ? <h1>Cart is Empty.. Please Add your Favourite Dish!!</h1>:  
              <div >
                <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleRemoveItem}> Remove item</button>
              <ItemListing items={itemsList}/>
              </div>
              }  
            
        </div>
    </div>
}

export default Cart;