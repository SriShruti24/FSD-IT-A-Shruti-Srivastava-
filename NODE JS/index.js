const http = require("http");
const fs = require("fs");
const path = require("path");

const myserver = http.createServer((req, res) => {

    // HOME
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to my home page</h1>");
    }

    // CONTACT
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact us at: 567-890-1234</h1>");
    }

    // ABOUT PAGE (HTML response)
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>ABES ENGINEERING COLLEGE</h1>
            <img src="/abes.jpg" width="400" height="300" />
        `);
    }

   
    else if (req.url === "/abes.jpg") {
        const imagePath = path.join(__dirname, "images", "abes.jpg");

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Image not found");
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
    }
});

myserver.listen(8000, () => console.log("Server running on port 8000"));
