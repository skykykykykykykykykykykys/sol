'use strict';

const fs = require('fs');


exports.read = function(req, res) {
    //console.log("Masuk ke read!");
    readStarNames();
    res.end();
}

function readStarNames() {
    fs.readFile('./star.txt', (err, data) => { 
        if (err) throw err; 
        //console.log("masuk ke filesync");

        var random = Math.floor(Math.random() * Math.floor(1439));
        var name = data.toString().split("\n")[random];

        //name = "\"Edor_Vang\""
        //name.replace(("\"",""));
        console.log(name);

        //processing name with multiple words
        if (name.includes("_")) {
            var names = name.split("_");
            var euy = names[0];
            
            for (var i = 0; i < names.length - 1; i++) {
                //console.log(names[i]);
                euy = euy + " " + names[i+1];
                
            }
            //console.log(euy);
        }

    });


}
