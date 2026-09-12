//intersection --> &

type admin = {
    adminName : string,
    privilege : string
}

type employee = {

    name : string,
    empId : number,
    date : string
}

type QA = admin & employee

const QAProfile : QA ={ //QA profile is the oject and QA is the type that is explicit infered

    adminName :"Testleaf",
    privilege : 'server',
    name :"Yuvarani",
    empId : 1001,
    date : "12/09/2026"

}

console.log(QAProfile.adminName);
console.log(QAProfile.privilege);
console.log(QAProfile);

