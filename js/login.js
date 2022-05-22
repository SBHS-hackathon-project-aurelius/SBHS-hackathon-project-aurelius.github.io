
// import { saveAs } from 'file-saver';

//     console.log("login: checking")
// function verifyLogin() {
//     console.log("login: checking")
//     let idData = document.getElementById("userId").value;
//     let blob = new Blob([idData], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "tempCredentials.txt");
// }


// (function WriteToFile(window, document, undefined){

//     // code that should be taken care of right away
    
//     window.onload = init;
    
//       function init(){
//         // the code to be called when the dom has loaded
//         // #document has its nodes

//         alert(document.getElementById('userId').valueI);
//       }
    
//     })(window, document, undefined);
import { getDatabase } from "firebase/database";

function WriteToFile() {
    alert("hi");
    let username = document.getElementById('userId').value;
    let password  = document.getElementById('userPassword').value;
    const database = getDatabase();

    function writeUserData(userId, password) {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
          username: name,
          password: password
        });
      }
      
    // Creating a XHR object
    /*let xhr = new XMLHttpRequest();
    let url = "login.html";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "name": username, "password": password });

    // Sending data with the request
    xhr.send(data);*/

    /*const express = require('express')
    const app = express()

    app.get('/', (req, res) => res.json({ message: 'HI' }))

    app.listen(5500)*/

/*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            
        }
    }*/

    /*var fso = new ActiveXObject("Scripting.FileSystemObject");
    var s = fso.CreateTextFile("/assets/test.txt", true);
    s.WriteLine("HI");
    s.Close();*/

    /*
    var http = require('http');
    http.createServer(function (req, res) {

         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.write(JSON.stringify({ message: name}));
         res.write(JSON.stringify({ message: password}));
         res.end();

       

    }).listen(9090);

    console.log('web server running');*/



    //const content = "here";

    //const fs = require('fs')

    //fs.writeFile('data.txt', content, err => {
    //    if (err){
    //        console.err;
    //        return;
    //    }
    //});

    //document.getElementById("username").innerHTML = "hi";


    // console.log("username: " + username + " | pass: " + password)
    // const fs = require('fs')
    // console.log(fs)

    // const content = 'this is what i want to write to file'

    // fs.writeFile('test.txt', content, err => {
    // if (err) {
    //     alert(err)
    //     // console.error(err)
    //     return
    // }
    // //file written successfully
    // })

}



    // var firstName = document.getElementById('FirstName');
    // var lastName  = document.getElementById('lastName');
    
//     const fso = CreateObject("Scripting.FileSystemObject"); 
// alert(fso)
//     const s   = fso.CreateTextFile("filename.txt", True);
 
//     // var firstName = document.getElementById('FirstName');
//     // var lastName  = document.getElementById('lastName');
// //  
//     s.writeline("First Name :" + username);
//     s.writeline("Last Name :" + password);
//     // s.writeline("First Name : dan 1");
//     // s.writeline("Last Name : dan 2" );
 
//     s.writeline("-----------------------------");
//     s.Close();
