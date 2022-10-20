// placeholder for products model
const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  }
]

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  })
} 

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  })
}

function addNewProduct(id, description, price ) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const newReview = {
    rating,
    comment,
  };
  console.log('in model', newReview)
  const matchedProduct = getProductById(id)
  console.log('in model', matchedProduct)
  if (matchedProduct) {
    matchedProduct.reviews.push(newReview);
    return newReview;
  } else {
    return ('error, invalid product id')
  }
  
  
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
}