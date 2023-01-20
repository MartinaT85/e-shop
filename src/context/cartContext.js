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

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  itemsCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsCount(newCartCount);
  }, [cartItems]);

  const value = { isOpen, setIsOpen, cartItems, addItemToCart, itemsCount };

  function addItemToCart(itemToAdd) {
    setCartItems(addCartItem(cartItems, itemToAdd));
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
