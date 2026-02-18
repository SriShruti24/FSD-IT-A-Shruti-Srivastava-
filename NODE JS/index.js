// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const myserver = http.createServer((req, res) => {

//     // HOME
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Welcome to my home page</h1>");
//     }

//     // CONTACT
//     else if (req.url === "/contact") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Contact us at: 567-890-1234</h1>");
//     }

//     // ABOUT PAGE (HTML response)
//     else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(`
//             <h1>ABES ENGINEERING COLLEGE</h1>
//             <img src="/abes.jpg" width="400" height="300" />
//         `);
//     }

   
//     else if (req.url === "/abes.jpg") {
//         const imagePath = path.join(__dirname, "images", "abes.jpg");

//         fs.readFile(imagePath, (err, data) => {
//             if (err) {
//                 res.writeHead(404, { "Content-Type": "text/plain" });
//                 res.end("Image not found");
//             } else {
//                 res.writeHead(200, { "Content-Type": "image/jpeg" });
//                 res.end(data);
//             }
//         });
//     }

//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// });

// myserver.listen(8000, () => console.log("Server running on port 8000"));
// const fs=require('fs');
// import { mkdir } from 'node:fs';
// fs.writeFileSync("./it-a.text","Hello World")
// fs.writeFileSync("./abes.text","Welcome to ABES Engineering College");
// const res=fs.readFileSync("./it-a.text","utf-8");
// console.log(res);
// fs.writeFile("./it-a.text","Hello World",()=>{});
// mkdir('./apple.text', { recursive: true }, (err) => {
//   if (err) throw err;
// }); 
// import fs from 'node:fs';

// fs.mkdir('./apple', { recursive: true }, (err) => {
//   if (err) throw err;
// });
// const user={
//     name:"John Doe",
//     course:"B.Tech",
//     skills:["JavaScript","Node.js","React"]
// }
// fs.writeFile("user.json",JSON.stringify(user,null,2),err=>{
//     if(err){
//         console.error("Error writing file:",err);
//     }else{
//         console.log("File written successfully");
//     }
// })
// fs.readFile("user.json","utf-8",(err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//     }else{
//         const user=JSON.parse(data);
//         console.log("User data:",user);
//     }
// })
const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("abes.html");
const myserver = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(home);
    console.log("request received");
    res.end("welcome to node js");
});
myserver.listen(5000, () => {
    console.log("server is running on port 5000");
});