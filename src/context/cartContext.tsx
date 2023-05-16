import { createContext, useReducer, PropsWithChildren } from "react";
// import { Product } from "../pages/category/Category";
import { CategoryItem } from "./productsContext";

type InitialState = {
  cartItems: CartItems[],
  isOpen: boolean,
  cartCount: number,
  cartTotal: number,
}

type SetIsOpenAction = {
  type:  'SET_IS_OPEN';
  payload: boolean
}

type setCartItems = {
  type: 'SET_CART_ITEMS';
  payload: {}
}

export const INITIAL_STATE: InitialState = {
  cartItems: [],
  isOpen: false,
  cartCount: 0,
  cartTotal: 0,
  
};

export type CartItems = CategoryItem & {quantity?: number}

function addCartItem(cartItems: CartItems[], itemToAdd: CartItems) {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

function removeCartItem(cartItems: CartItems[], itemToRemove: CartItems) {
  const removeItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (removeItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  } 
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity! - 1 }
      : cartItem
  );
}

function clearCartItem(cartItems: CartItems[], itemToClear: CartItems) {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}



const cartReducer = (state = INITIAL_STATE, action: SetIsOpenAction | setCartItems) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        payload,
      };
    case "SET_IS_OPEN":
      return {
        ...state,
        isOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`);
  }
};


export type CartContextType = {
  cartItems: CartItems[],
  addItemToCart: (itemToAdd: CartItems) => void,
  removeItemFromCart: (itemToRemove: CartItems) => void,
  clearItemFromCart: (itemToClear: CartItems) => void,
  isOpen: boolean,
  setIsOpen: (bool: boolean) => void,
  cartCount: number,
  cartTotal: number,
}

export const CartContext = createContext<CartContextType>({
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children } : PropsWithChildren) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [itemsCount, setItemsCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ cartItems, isOpen, cartCount, cartTotal }, dispach] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setItemsCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);

  

  

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  function setIsOpen(bool: boolean) {
    dispach({ type: "SET_IS_OPEN", payload: bool });
  }

  function cartItemsReducerUpdate(newCartItems: CartItems[]) {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity!,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity! * cartItem.price,
      0
    );

    dispach({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  }

  function addItemToCart(itemToAdd: CartItems) {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    cartItemsReducerUpdate(newCartItems);
  }

  function removeItemFromCart(itemToRemove: CartItems) {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    cartItemsReducerUpdate(newCartItems);
  }

  function clearItemFromCart(itemToClear: CartItems) {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    cartItemsReducerUpdate(newCartItems);
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
