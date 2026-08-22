

//Objects are used to store a collection of data in key:value

const empDetails = {

    "fname":"Ravindran",
    "companyName":"Testleaf",
    "empNo":"1234"
}

console.log(empDetails.empNo); // Dot notation will retreive the value of a key


//Map is an inbuilt object that stores data as key-value pair

//Inbuilt methods of Map => set(),get(),has() , delete(), clear()

//set()

let studentsInfo = new Map() // here a new object is created

// console.log(typeof studentsInfo); //Map(0) {}

///* ***set() method is to build a objects** */

console.log(studentsInfo); //Map(0) {}

studentsInfo.set('Ravi',98797897);
studentsInfo.set("Hari",98797895);
studentsInfo.set("Ram",98797856);

console.log(studentsInfo); // Map(1) { 'Ravi' => 98797897 }

///* ***get() method is to retreive a value using its key** */

console.log(studentsInfo.get("Ram"));


///* ***has() method is to check if key is present or not** */

console.log(studentsInfo.has("Ram")); //true

///* ***delete() method is to delete a key value is present** */

studentsInfo.delete("Ram"); //
console.log(studentsInfo);//Map(2) { 'Ravi' => 98797897, 'Hari' => 98797895 }


///* ***size property to get the size of te object** */

console.log(studentsInfo.size); //2

///* ***clear method to clear the entire object** */

studentsInfo.clear(); 
console.log(studentsInfo); //Map(0) {}



