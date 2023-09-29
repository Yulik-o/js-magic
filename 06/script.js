const allProducts = [
  {
    name: "banana",
    uniqId: 74638,
    price: 8,
    quantity: 200,
    discount: 0.03,
    isDiscount: true,
  },
  {
    name: "cucumber",
    uniqId: 2334,
    price: 4,
    quantity: 100,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "pear",
    uniqId: 234,
    price: 18,
    quantity: 8,
    discount: 0.5,
    isDiscount: true,
  },
  {
    name: "apple",
    uniqId: 3322,
    price: 18,
    quantity: 2,
    discount: 0.1,
    isDiscount: true,
  },
  {
    name: "potato",
    uniqId: 333,
    price: 2,
    quantity: 2000,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "coconut",
    uniqId: 3498,
    price: 80,
    quantity: 10,
    discount: 0.1,
    isDiscount: true,
  },
];
const userCart = [];
function addToCart(id, quantity) {
  //push in cart product object
  // reduce product quantity in all products
  const newProduct = allProducts.find((el) => el.uniqId === id);
  if (!newProduct) {
    console.log("There is no such a product.");
    return false;
  }
  if (newProduct.quantity < quantity) {
    console.log("There is no such a quantity of this product.");
    return false;
  }
  userCart.push(newProduct);
  setQuantity(newProduct.quantity - quantity, id);
}
function setQuantity(quantity, id) {
  const newProduct = allProducts.findIndex((el) => el.uniqId === id);
  allProducts[newProduct].quantity = quantity;
}

addToCart(3498, 2);
addToCart(234, 3);

function deleteProduct(id) {
  const deletedProduct = userCart.findIndex((el) => el.id === id);

  userCart.splice(deletedProduct, 1);
}

function showCartProducts() {
  const result = userCart.map((el) => {
    console.log(el);
    return { name: el.name, price: el.price };
  });
  console.log(result);
}
showCartProducts();
