

/* What is CSV?
structure as to how we write a set of data in Comma Seperated Value */

/* Sample CSV data:

TCNo,Username,Password
TC001,democsr,crmsfa
TC002,demosalesmanager,crmsfa

*/


/* SO we need to convert CSV to JSON inorder to do that we will have to install csv-parse
command : npm install csv-parse */

import { parse } from "csv-parse/sync";
import fs from "fs"



let data = parse(fs.readFileSync("Data/LFlogin.csv")) // relative path


console.log(data);

/* Output => Array of Array
[
  [ 'TCNo', 'Username', 'Password' ],
  [ 'TC001', 'democsr', 'crmsfa' ],
  [ 'TC002', 'demosalesmanager', 'crmsfa' ]
] 
  
Output => JSON format


*/

let dataJSON : any = parse(fs.readFileSync("Data/LFlogin.csv"), { columns: true }) // relative path

console.log(dataJSON[0].Username);
console.log(dataJSON[0].Password);

/* Output:
[
  { 
    TCNo: 'TC001', 
   Username: 'democsr', 
   Password: 'crmsfa'
   },
  { TCNo: 'TC002', 
   Username: 'demosalesmanager', 
   Password: 'crmsfa' 
   }
] */