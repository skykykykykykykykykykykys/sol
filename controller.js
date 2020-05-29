'use strict';
var connection = require('./conn');
var out = require('./res');

var https = require('https');
const fetch = require('node-fetch');
const fs = require('fs');


exports.read = function(req, res) {
}

function readStarNames() {
    var text = fs.readFileSync('./star.txt');
    var textByLine = text.toString.split("\n");

    console.log()


}
