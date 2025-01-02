import { createContext,useState } from "react";
// createContext: A function provided by React to create a new context. Context is a way to share data (like stateand props) across components without manually passing props down the tree.
import { products } from "../assets/assets";
// products: Data being imported, probably an array of products, from the ../assets/assets file.
export const ShopContext = createContext();
//e dono lines React Context API ka use karke ek global state banane aur usse components ke beech share karne ke liye hain. Context API ka use hota hai jab aapko prop drilling se bachna ho, yaani jab aapko ek hi state ko bohot saare components me manually props ke through pass karna pade.

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch]=useState('');
  const[showSearch,setShowSearch]=useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  } 

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
