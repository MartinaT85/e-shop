import { createContext, useReducer } from "react";

function addCartItem(cartItems, itemToAdd) {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

function removeCartItem(cartItems, itemToRemove) {
  const removeItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (removeItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

function clearCartItem(cartItems, itemToClear) {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}

const INITIAL_STATE = {
  cartItems: [],
  isOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
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

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
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

  function setIsOpen(bool) {
    dispach({ type: "SET_IS_OPEN", payload: bool });
  }

  function cartItemsReducerUpdate(newCartItems) {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
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

  function addItemToCart(itemToAdd) {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    cartItemsReducerUpdate(newCartItems);
  }

  function removeItemFromCart(itemToRemove) {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    cartItemsReducerUpdate(newCartItems);
  }

  function clearItemFromCart(itemToClear) {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    cartItemsReducerUpdate(newCartItems);
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
