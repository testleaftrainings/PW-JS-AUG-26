import { Employee4 } from "./constructor.js";

class child extends Employee4{
    child(){
        console.log('Am in child class method');
        
    }
}
const obj5 = new child('ravi','Emp456')
obj5.printEmployeeDetails()
obj5.child()