"use strict";

var opencpu = require("../lib/opencpu");

opencpu.rCall("/library/datasets/R/mtcars/json", {}, function (err, data) {
    if (!err) {
        console.log(data.mpg[0] + data.mpg[1]); // => 42
    } else {
        console.log("opencpu call failed.");
    }
});
