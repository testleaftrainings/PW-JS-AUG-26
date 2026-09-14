export class EmployeeSignUp {
    eName;
    static eid;
    ePhno;
    eSalary;
    constructor() {
        this.eName = 'Yuva';
        EmployeeSignUp.eid = 'Emp123';
        this.ePhno = 567898765;
        this.eSalary = 56789;
    }
    printDetails() {
        console.log(`the emp details ${this.eName} : ${EmployeeSignUp.eid}
            : ${this.ePhno} : ${this.eSalary}`);
    }
    get readData() {
        return this.eSalary;
    }
    set writeData(newSal) {
        this.eSalary = newSal;
    }
}
// const emp1 = new EmployeeSignUp()
// console.log(EmployeeSignUp.eid);
// emp1.printDetails()
// console.log(emp1.readData)
// emp1.writeData = 898989
// console.log(emp1.readData);
