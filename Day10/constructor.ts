class Employee3{

    payroll(){
        console.log('Employee payroll');
        
    }

    constructor(){ //defauly constructor
console.log('this is a special method called default constructor');

    }
}

// let obj2 = new Employee3()
// obj2.payroll()

//parameterized constructor

export class Employee4{

    empName3:string     //global property
    empId3 : string

//      constructor(){ //defauly constructor
// console.log('this is a special method called default constructor');

//     }
    constructor(name:string, id:string){
        console.log(`paramertrized constructor ${name} and id ${id}`);
        this.empName3 = name
        this.empId3 = id
    }

    printEmployeeDetails(){
        console.log(`Employee name is ${this.empName3} and is is ${this.empId3}`);
        
    }

}

// const obj4 = new Employee4('Yuva',"Emp345")

// obj4.printEmployeeDetails()