export const addToCart = (item) => {
  const cart = sessionStorage.getItem("cart") || [];
  let b = cart.length != 0 ? JSON.parse(cart) : [];

  const newCart = [...b, item];

  sessionStorage.setItem("cart", JSON.stringify(newCart));
};
export const getCart = () => {
  const cart = sessionStorage.getItem("cart") || [];
  if (cart.length) {
    return JSON.parse(cart);
  }
  return cart;
};

export const CheckInCart = (key) => {
  const cart = getCart();
  if (cart.length) {
    let a = cart.filter((dt) => dt.key == key);

    if (a.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
