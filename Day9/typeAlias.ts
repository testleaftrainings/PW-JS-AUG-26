//union type

//alias name for datatypes
//login scenario filling the username with email or mob number

type userInput = string | number 
//userInput is the alias name of the 2 datatypes combined together

let userName : userInput = 'support@testleaf.com'
userName =9086780987
//userName = true

//alias name for values

type supportedBrowser = "chrome" | "firefox" | "msedge"

function invokeBrowser(browserName:supportedBrowser){ //browserName is a local variable 
    //to fetch the argument value msedge into the function block

    console.log(browserName);
    

}

invokeBrowser('msedge')
//invokeBrowser('safari')

