"use strict";
//numeric enum
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["open"] = 0] = "open";
    browserStatus[browserStatus["closed"] = 1] = "closed";
    browserStatus[browserStatus["incognito"] = 9] = "incognito";
    browserStatus[browserStatus["crash"] = 10] = "crash";
})(browserStatus || (browserStatus = {}));
let browser = browserStatus.crash;
console.log(browser);
//console.log(browserStatus);
//string enum
var Testresults1;
(function (Testresults1) {
    Testresults1["pass"] = "Test Passed";
    Testresults1["fail"] = "Test failed";
    Testresults1["skip"] = "Test skipped";
})(Testresults1 || (Testresults1 = {}));
console.log(Testresults1);
function logtestresults1(results) {
    console.log(`the test result is ${results}`);
}
logtestresults1(Testresults1.pass);
//heterogeneous enum
var Testresults2;
(function (Testresults2) {
    Testresults2[Testresults2["pass1"] = 0] = "pass1";
    Testresults2["fail1"] = "Test failed";
    Testresults2["skip1"] = "Tc";
    Testresults2[Testresults2["closed"] = 0.7] = "closed";
    Testresults2[Testresults2["step"] = 1.7] = "step";
})(Testresults2 || (Testresults2 = {}));
function logtestresults2(results) {
    console.log(`the test result is ${results}`);
}
logtestresults2(Testresults2.step);
