const http = require('http'); //هاي الريكوير تتطلب موديل معين
const fs = require("fs");

const server = http.createServer((req, res) => {   // إنشاء خادم
    //Arrow functions allow us to write shorter function syntax:
    //part 1 
    // res.writeHead(200,{"content-type":'text/html'}) //وظييفتها تعمل اشي وترجع شغلة -توخذ تو ريكويرمنت
    // res.write("hello from the server this is a node js course ")

    // res.end("./contactUs.html")  //وظيفتها تعمل ترمنيت

    // part 2 
   // fs.readFile('contactUs.html',(err,data)=>{
 //       if(err){

     //       res.writeHead(500,{"content-type":'text/plain'})
     //       console.log("sorry can't read from the server")
   //     }
   //     else {
   //         res.writeHead(200,{"content-type":"text/html"})
    //        res.end(data)
   //     }
 //   })


    // Part 3 
    const data = "yazan homework 4";
    
    fs.writeFile('homework4.txt', data, (err) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            console.log("Error writing the data");
           
        } else {
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(data);
        }
    });

    // If you want to serve the contents of homework3.txt or another file
    // You can use fs.readFile and send its content as a response:
    /*
    fs.readFile('homework3.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.end("Sorry, can't read the file");
        } else {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        }
    });
    */
});

const thePort = 3000;
const HOST = "127.0.0.1";

server.listen(thePort, HOST, () => {
    console.log(`The server is now running on port # ${thePort} and host ${HOST}`);
});
