// Arrays in JavaScript

/* 1. Dynamic in size
Arays can grow or shrink in size as we add or delete items

2. Heterogenous in nature
It can handle any kind of datatype*/

//Different methods in array JS

let value = "a" // string

let chars = ["a","b","c","d","e"]; // array

//1. push() : add elements to the end of the array

chars.push("f","g","h");
console.log(chars);

/* O/p :
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
] */

  //2. pop() : remove only one element from the end of the array

  chars.pop()
  console.log(chars);

  /* O/P:
  [
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

  // 3. unshift() => Add some elements to the begining of the array

  chars.unshift("x","y","z")
  console.log(chars);

  /* [
  'x', 'y', 'z', 'a',
  'b', 'c', 'd', 'e',
  'f', 'g'
] */

// 4. shift() =>remove only one element from the begining of the array

chars.shift();
console.log(chars);

/* [
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */

//5. slice()=> extract a part of array without modifying the original

let arrayChar = ["a","b","c","d","e"];


const resultSlice = arrayChar.slice(1,4);

console.log(resultSlice); // [ 'b', 'c', 'd' ];

// 6. splice() => to add / remove the elements in an array


arrayChar.splice(2,4,"x","y","z","w")

/* Here 1 => start index to start replacing / removing the elements from the array
3=> the number of elements that are to be added
"x","y","z" => elements that are to be added/replaced */

console.log(arrayChar);

/* 
O/P :
[ 'a', 'x', 'y', 'z', 'e' ] */


//Set  is a inbuilt object that stores only unique values

let numbers = [1,2,3,4,4,1,2]

let uniqueNum = new Set(numbers)
console.log(uniqueNum);

/* 

### 1. Can we directly use `Set()` with an object?

**No.**

A normal JavaScript object is **not iterable**, so this will give an error:

```javascript
let employee = {
    name: "Ravi",
    age: 30,
    city: "Chennai"
};

let result = new Set(employee); //  Error
```

---

### 2. Use `Object.keys()` with `Set()`

If you want **unique keys** from an object:

```javascript
let employee = {
    name: "Ravi",
    age: 30,
    city: "Chennai"
};

let uniqueKeys = new Set(Object.keys(employee));

console.log(uniqueKeys);
```

Output:

```text
Set(3) { 'name', 'age', 'city' }
```

> **`Object.keys()` → gives keys → `Set()` stores them uniquely**

---

### 3. Use `Object.values()` with `Set()`

If you want **unique values** from an object:

```javascript
let employee = {
    name: "Ravi",
    city: "Chennai",
    company: "Chennai",
    role: "Tester"
};

let uniqueValues = new Set(Object.values(employee));

console.log(uniqueValues);
```

Output:

```text
Set(3) { 'Ravi', 'Chennai', 'Tester' }
```

Here `"Chennai"` occurs twice, but `Set` keeps it only once.

> **`Object.values()` → gives values → `Set()` removes duplicates**

---

### 4. Use `Object.entries()` with `Set()`

If you want **key-value pairs**:

```javascript
let employee = {
    name: "Ravi",
    age: 30,
    city: "Chennai"
};

let entries = new Set(Object.entries(employee));

console.log(entries);
```

Output:

```text
Set(3) {
    [ 'name', 'Ravi' ],
    [ 'age', 30 ],
    [ 'city', 'Chennai' ]
}
```

---

## Important Point 

`Set()` **does not prevent duplicate values while creating an object**.

```javascript
let employee = {
    city: "Chennai",
    company: "Chennai"
};
```

This is perfectly valid.

`Set()` can be used **afterwards** to get unique values:

```javascript
let uniqueValues = new Set(Object.values(employee));
```

---

## Quick Reference

| Requirement         | Code                           |
| ------------------- | ------------------------------ |
| Get object keys     | `Object.keys(obj)`             |
| Get object values   | `Object.values(obj)`           |
| Get key-value pairs | `Object.entries(obj)`          |
| Get unique keys     | `new Set(Object.keys(obj))`    |
| Get unique values   | `new Set(Object.values(obj))`  |
| Get unique entries  | `new Set(Object.entries(obj))` |

### Final takeaway

> **A Set cannot directly accept a normal object. Convert the object into an iterable using `Object.keys()`, `Object.values()`, or `Object.entries()`, and then use `Set()` to maintain unique elements.**
 */






