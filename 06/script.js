const allProducts = [
  {
    name: "banana",
    uniqId: 74638,
    price: 8,
    quantity: 200,
    discount: 0.03,
    isBought: false,
    isDiscount: true,
  },
  {
    name: "cucumber",
    uniqId: 2334,
    price: 4,
    quantity: 100,
    discount: 0,
    isBought: false,
    isDiscount: false,
  },
  {
    name: "pear",
    uniqId: 234,
    price: 18,
    quantity: 8,
    discount: 0.5,
    isBought: true,
    isDiscount: true,
  },
  {
    name: "apple",
    uniqId: 3322,
    price: 18,
    quantity: 2,
    discount: 0.1,
    isBought: false,
    isDiscount: true,
  },
  {
    name: "potato",
    uniqId: 333,
    price: 2,
    quantity: 2000,
    discount: 0,
    isBought: false,
    isDiscount: false,
  },
  {
    name: "coconut",
    uniqId: 3498,
    price: 80,
    quantity: 10,
    discount: 0.1,
    isBought: false,
    isDiscount: true,
  },
];
function sortIsBoughtArray() {
  const sortedByBoughtArray = allProducts.sort((a, b) => {
    if (a.isBought && !b.isBought) {
      return 1;
    } else if (!a.isBought && b.isBought) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(sortedByBoughtArray);
}
function toggleGoodsBuying(name) {
  allProducts.forEach((el) => {
    if (el.name === name) {
      el.isBought = true;
    }
  });
  console.log(allProducts);
}
function deleteProduct(uniqId) {
  let arrayWithoutDeletedProduct = allProducts.filter(
    (el) => el.uniqId !== uniqId
  );

  console.log(arrayWithoutDeletedProduct);
}

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
  console.log(userCart);
}
function setQuantity(quantity, id) {
  const newProduct = allProducts.findIndex((el) => el.uniqId === id);
  allProducts[newProduct].quantity = quantity;
}

// addToCart(3498, 2);
// addToCart(234, 3);

// function deleteProduct(id) {
//   const deletedProduct = userCart.findIndex((el) => el.id === id);

//   userCart.splice(deletedProduct, 1);
// }

function showCartProducts() {
  const result = userCart.map((el) => {
    console.log(el);
    return { name: el.name, price: el.price };
  });
  console.log(result);
}
// showCartProducts();

function getAmountOfProduct() {
  const amount = userCart.reduce((acc, el) => {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0);
  console.log(amount);
  return amount;
}
// getAmountOfProduct();

function sortByPrice() {
  const sorted = allProducts.slice();
  sorted.sort((a, b) => {
    return b.quantity - a.quantity;
  });
  console.log(sorted);
}
