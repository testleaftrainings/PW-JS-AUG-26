//numeric enum

enum browserStatus{
    open,
    closed,
    incognito =9,
    crash
}

let browser:browserStatus = browserStatus.crash
console.log(browser);

//console.log(browserStatus);

//string enum

enum Testresults1{
    pass='Test Passed',
    fail = 'Test failed',
    skip = 'Test skipped'
}

console.log(Testresults1);

function logtestresults1(results:Testresults1){
    console.log(`the test result is ${results}`);
    
}

logtestresults1(Testresults1.pass)

//heterogeneous enum

enum Testresults2{

    pass1,
    fail1="Test failed",
    skip1 = 'Tc',
    closed =0.7,
    step
}

function logtestresults2(results:Testresults2){
    console.log(`the test result is ${results}`);
    
}

logtestresults2(Testresults2.step)

