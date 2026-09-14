export class EmployeeSignUp{

    public eName: string
    public static eid :string
    protected readonly ePhno : number
    private eSalary : number

    constructor(){
        this.eName ='Yuva'
        EmployeeSignUp.eid = 'Emp123'
        this.ePhno = 567898765
        this.eSalary = 56789
    }

    printDetails(){
        console.log(`the emp details ${this.eName} : ${EmployeeSignUp.eid}
            : ${this.ePhno} : ${this.eSalary}`);
        
    }
public get readData(){//this block is to read a private accessmodifier property
return this.eSalary
}

public set writeData(newSal:number){ //this block is to write.modify data of a private accessmodifier property
this.eSalary = newSal
}

}
// const emp1 = new EmployeeSignUp()
// console.log(EmployeeSignUp.eid);
// emp1.printDetails()
// console.log(emp1.readData)
// emp1.writeData = 898989
// console.log(emp1.readData);


