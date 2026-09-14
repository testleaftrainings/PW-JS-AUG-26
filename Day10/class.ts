
class Employee{

    empName : string = 'Yuvarni' //porperty of the class

    payroll(){//method of the class
        console.log(`Employee payroll process of ${this.empName}`);
        //this refer to current instance of the class
    }

}

let obj = new Employee() //object
console.log(obj.empName);
obj.payroll()

class Employee1{

empName1 = 'Yuva'
empId = 'Emp123'

empDetails(empName:string,empid1:string){
    console.log(`Employee name is ${empName}, id is ${empid1}`);
    
}
}

const emp = new Employee1()
emp.empDetails('Hari','Emp234')
console.log(emp.empName1);



