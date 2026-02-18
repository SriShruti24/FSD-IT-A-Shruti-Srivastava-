const http = require("http");
const fs = require("fs");

// -------- Fake Database --------
const products = {
  shoes: {
    name: "Shoes",
    price: 2500,
    brand: "Nike",
    description: "Comfortable running shoes"
  },
  bag: {
    name: "Bag",
    price: 1500,
    brand: "Skybags",
    description: "Stylish travel bag"
  },
  watch: {
    name: "Watch",
    price: 3000,
    brand: "Fossil",
    description: "Premium leather watch"
  },
  tshirt: {
    name: "T-Shirt",
    price: 999,
    brand: "Puma",
    description: "Soft cotton T-shirt"
  },
  sunglasses: {
    name: "Sunglasses",
    price: 1200,
    brand: "Rayban",
    description: "UV protected sunglasses"
  }
};

// -------- SERVER --------
const server = http.createServer((req, res) => {

  // Page 1 (products)
  if (req.url === "/") {
    fs.readFile("./page1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // Product details route
  else if (req.url.startsWith("/product/")) {

    const id = req.url.split("/")[2];
    const p = products[id];

    if (!p) {
      res.writeHead(404);
      return res.end("Product not found");
    }

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <html>
      <head>
      <style>
        body{
          font-family:Arial;
          background:#f4f4f4;
          text-align:center;
          padding:40px;
        }
        .card{
          width:350px;
          margin:auto;
          background:white;
          padding:20px;
          border-radius:12px;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
        }
        h1{color:#222;}
        p{font-size:18px;color:#555;}
        a{
          display:inline-block;
          margin-top:15px;
          padding:10px 15px;
          background:#007bff;
          color:white;
          text-decoration:none;
          border-radius:6px;
        }
      </style>
      </head>

      <body>
        <div class="card">
          <h1>${p.name}</h1>
          <p><b>Brand:</b> ${p.brand}</p>
          <p><b>Price:</b> ₹${p.price}</p>
          <p>${p.description}</p>
          <a href="/">Back to Products</a>
        </div>
      </body>
      </html>
    `);
  }

  else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Server running: http://localhost:4000");
});
