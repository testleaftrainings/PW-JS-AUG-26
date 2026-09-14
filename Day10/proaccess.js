import { EmployeeSignUp } from "./access.js";
class HR extends EmployeeSignUp {
    dep; // property specific to HR class
    constructor() {
        super(); // calling parent class constructor
        this.dep = 'QA';
    }
    empUpdate() {
        console.log(this.ePhno, this.dep);
    }
}
const hr = new HR();
hr.empUpdate();
