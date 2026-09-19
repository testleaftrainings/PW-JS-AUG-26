/* What is dotenv file:
dotenv files are used to handle data for environment specific testing */


/// <reference types="node" />

import dotenv from "dotenv"

//dotenv.config({path:"data/prod.env"}) // Here we are setting the environment for the out test execution which is qa environment

//switch bewtween environment through your terminal

//let filename = "prod" // "qa" // hard coding

let filename = process.env.filename   // here using process object we are reading data that was assigned to filename through system environment

console.log(filename);


//$env:filename to check the value stored in filename variable
//$env:filename="qa" is to assign the value to the filename

dotenv.config({path:`data/${filename}.env`})


console.log(process.env.USERNAME) // here it is my system environment

console.log(process.env.LF_Username) // here it is qa environment


//Note : process is an object that comes from Node Modules helps to retreive data from local environment, is out system