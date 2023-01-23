import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  itemsCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    itemsCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  function addItemToCart(itemToAdd) {
    setCartItems(addCartItem(cartItems, itemToAdd));
  }

  function removeItemFromCart(itemToRemove) {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  }

  function clearItemFromCart(itemToClear) {
    setCartItems(clearCartItem(cartItems, itemToClear));
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
