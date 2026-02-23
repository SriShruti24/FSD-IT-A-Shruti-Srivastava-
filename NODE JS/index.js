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

// const http = require("http");
// const fs = require("fs");
// const home = fs.readFileSync("abes.html");
// const myserver = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end(home);
//     console.log("request received");
//     res.end("welcome to node js");
// });
// myserver.listen(5000, () => {
//     console.log("server is running on port 5000");
// });
// const http = require("http");

// // In-memory storage
// let users = [];

// const server = http.createServer((req, res) => {

//   //  READ (GET ALL USERS)
//   if (req.method === "GET" && req.url === "/users") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(users));
//   }

//   //  CREATE (POST)
//   if (req.method === "POST" && req.url === "/users") {

//     let body = "";

//     req.on("data", chunk => body += chunk);

//     req.on("end", () => {
//       const newUser = JSON.parse(body);

//       newUser.id = Date.now(); // unique id
//       users.push(newUser);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({
//         message: "User added",
//         users
//       }));
//     });

//     return;
//   }

//   // UPDATE (PUT /users/:id)
//   if (req.method === "PUT" && req.url.startsWith("/users/")) {

//     const id = Number(req.url.split("/")[2]);

//     let body = "";

//     req.on("data", chunk => body += chunk);

//     req.on("end", () => {
//       const updatedData = JSON.parse(body);

//       const index = users.findIndex(u => u.id === id);

//       if (index === -1) {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ message: "User not found" }));
//       }

//       users[index] = { ...users[index], ...updatedData };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({
//         message: "User updated",
//         user: users[index]
//       }));
//     });

//     return;
//   }

//   //  DELETE (DELETE /users/:id)
//   if (req.method === "DELETE" && req.url.startsWith("/users/")) {

//     const id = Number(req.url.split("/")[2]);

//     const initialLength = users.length;
//     users = users.filter(u => u.id !== id);

//     if (users.length === initialLength) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify({ message: "User not found" }));
//     }

//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify({ message: "User deleted" }));
//   }

  
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Route not found" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
const http =require("http");
let users=[];
 const server=http.createServer((req,res)=>{
if(req.method=='POST'&&req.url=='/users'){
  let body="";
  req.on('data',(chunk)=>{
    body+=chunk;
  })
  req.on('end',()=>{
    const user=JSON.parse(body);
    users.push(user);
    res.end("user added");
  })
}
 })
 server.listen(3000,()=>{
console.log("Successfully running on server 3000");
 })