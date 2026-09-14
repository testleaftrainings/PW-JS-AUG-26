import { EmployeeSignUp } from "./access.js";

class HR extends EmployeeSignUp{

    dep: string// property specific to HR class

    constructor(){
        super()// calling parent class constructor
        this.dep = 'QA'
    }
empUpdate(){
    console.log(this.ePhno, this.dep);
    console.log(HR.eid);

    
    
}

    
}

const hr = new HR()
hr.empUpdate()
console.log(hr.readData)
console.log(hr.writeData)