const express = require("express");
const app = express();

const { products } = require("./data/careers");

console.log(products);

app.get("/", (req, res) => {
  // res.json([{ name: "john" }, { name: "susan" }]);
  // res.json(products);
  res.send('<h1>Home Page</h1><a href="/api/products">products<a/>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });
  res.json(newProducts);
});

// STATIC PARAMETERS
// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);
//   res.json(singleProduct);
// });

// map, forEach, filter, find

// DYNAMIC PARAMETERS
app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log("PARAMS: ", req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

// DYNAMIC QUERY
// http://localhost:5000/api/v1/query?name=john&id=4
// http://localhost:5000/api/v1/query?search=a&limit=2
// http://localhost:5000/api/v1/query?limit=3
// http://localhost:5000/api/v1/query?limit=4
// http://localhost:5000/api/v1/query?limit=5
// http://localhost:5000/api/v1/query?limit=2&search=a
// http://localhost:5000/api/v1/query?limit=2&search=A

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  // http://localhost:5000/api/v1/query?limit=4&search=A

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// Continue at 6 hours, 12 minutes
// next thing to learn is query strings
// https://www.youtube.com/watch?v=Oe421EPjeBE
