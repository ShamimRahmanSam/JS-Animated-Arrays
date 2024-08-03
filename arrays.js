/* 
   document.addEventListener("DOMContentLoaded", function () {.....all whatever written down in the code.....});
   document.addEventListener is used to attach an event listener to the document object. The event listener listens for the DOMContentLoaded event.
   The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This is in contrast to the load event, which is fired when the whole page (including all dependent resources) has finished loading.
   The function provided as the second argument to addEventListener is the callback function that will be executed when the DOMContentLoaded event is fired.
   without this way we can't use script tag in head tag of html. still if we want to use without this way then we have to use defer after src like <script src="/js/arrays.js" defer></script>

Use defer if:
  You want a simple, straightforward way to ensure scripts run after the HTML is fully parsed.
  You are including multiple script files and want them to execute in order.

Use DOMContentLoaded if:
  You need more control over when specific parts of your script run.
  You are dynamically adding scripts or need to handle very specific timing scenarios.

In general, for most use cases, the defer attribute is simpler and cleaner 
because it automatically handles script execution order and ensures the DOM is fully loaded. 
If you need more precise control over the execution timing within your scripts, DOMContentLoaded can be the better choice. 

I used defer to connect in the head tag of html for this code 
*/

const cars = ["Lamborghini", "Ferrari", "BMW", "Mustang"];
document.getElementById("demo1").innerHTML = cars.join(", "); // join is  Default separator (comma and we can use - hyphen or anything)

const car = []; // we can also create an array, and then provide the elements in this way
car[0] = "Mustang";
car[1] = "Ferrari";
car[2] = "Jaguar";
document.getElementById("demo2").innerHTML = car.join(", ");

document.getElementById("demo4").innerHTML = cars[0]; //access an array element by referring to the index number:

car[0] = "Volvo"; // JavaScript array elements are accessed using numeric indexes (starting from 0).
document.getElementById("demo5").innerHTML = car.join(", ");

const fruit = [
  "Banana",
  "Orange",
  "PineApple",
  "Avogado",
  "Berry",
  "Mango",
  "Apple",
];
document.getElementById("demo9").innerHTML = fruit.join(", ");

let size = fruit.length; // Returns the number of elements
document.getElementById("demo10").innerHTML = size;

document.getElementById("demo11").innerHTML = fruit[0]; // JavaScript array elements are accesses using numeric indexes (starting from 0).

document.getElementById("demo26").innerHTML = fruit[2];

let fr = fruit.at(2); // The at() method returns an indexed element from an array:
document.getElementById("demo27").innerHTML = fr;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits.toString(); // Converting an Array to a String. The toString() Method. The toString() method returns an array as a comma separated string:

document.getElementById("demo28").innerHTML = fruits.join(" * ");

document.getElementById("demo12").innerHTML = fruit[6]; // accessing by calling last index

document.getElementById("demo13").innerHTML = fruit[fruit.length - 1]; // Here calling by length system..  [fruit.length - 1];

const person = ["Shamim", "Rahman", "Sam"];
document.getElementById("demo7").innerHTML = person[2]; //Arrays use numbers to access its "elements". In this example, person[2] returns Sam

const man = { firstName: "Shamim", lastName: "Sam", age: 26 };
document.getElementById("demo8").innerHTML = man.firstName; // In this example, person.firstName returns Shamim

const names = ["Shamim", "Shabab", "Shanto", "Gazi", "Sam"];
document.getElementById("demo32").innerHTML = names;

document.getElementById("demo33").innerHTML = names.pop(); // The pop() method returns the value that was "popped out"..  The pop() method removes the last element from an array
document.getElementById("demo34").innerHTML = names;

document.getElementById("demo35").innerHTML = names.shift(); // The shift() method returns the value that was "shifted out"..  The shift() method removes the first array element and "shifts" all other elements to a lower index
document.getElementById("demo36").innerHTML = names;

document.getElementById("demo41").innerHTML =
  "The first fruit is: " + fruits[0];
delete fruits[0];
document.getElementById("demo42").innerHTML =
  "The first fruit is: " + fruits[0];

names.unshift("SHAMIM"); // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
document.getElementById("demo37").innerHTML = names;
document.getElementById("demo38").innerHTML = names.unshift("SRSam"); // The unshift() method returns the new array length. output will be 5 as I added another name in unshift("...")

document.getElementById("demo39").innerHTML = names;
names[0] = "SHAMIM_R_SAM"; // Array elements are accessed using their index number and can change like this way
document.getElementById("demo40").innerHTML = names;

names.push("Sam"); //The push() method adds a new element to an array (at the end)
document.getElementById("demo29").innerHTML = names;

document.getElementById("demo31").innerHTML = names.push("Srsthetics"); // The push() method returns the new array length.  output will be 7 cause I added another name here

document.getElementById("demo16").innerHTML = names;
function pushFunction() {
  names.push("SRS"); // add a new element to an array is using the push()
  document.getElementById("demo17").innerHTML = names;
}

document.getElementById("demo18").innerHTML = names;
function lengthFunction() {
  names[names.length] = "Shamim Rahman Sam"; //add a new element to an array is using the length
  document.getElementById("demo19").innerHTML = names;
}

const srs = [];
srs["firstName"] = "Shamim";
srs["lastName"] = "Sam";
srs["age"] = 26;
document.getElementById("demo200").innerHTML = srs[0];
document.getElementById("demo21").innerHTML = srs.lastName;

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const children = array1.concat(array2); //The concat() method merges (concatenates) arrays
document.getElementById("demo43").innerHTML = children;

const array3 = ["Robin", "Morgan"];
const childrens = array1.concat(array2, array3);
document.getElementById("demo44").innerHTML = childrens;

const fruitz = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
document.getElementById("demo45").innerHTML = fruitz;

document.getElementById("demo46").innerHTML = fruitz.copyWithin(2, 1); //copyWithin() copies array elements to another position in an array, overwriting existing values. Copy to index 2, all elements from index 0
document.getElementById("demo47").innerHTML = fruitz.copyWithin(2, 0, 2);

fruitz.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo50").innerHTML = fruitz;

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
document.getElementById("demo51").innerHTML = spliced;

const cut = fruitz.slice(1);
const cut2 = fruits.slice(1, 3);
document.getElementById("demo52").innerHTML =
  fruitz + "<br><br>" + cut + "<br><br>" + cut2;

let position = months.indexOf("Apr") + 1;
document.getElementById("demo54").innerHTML =
  "Apr is found in position " + position;

document.getElementById("demo55").innerHTML = fruitz.includes("Mango");

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunc);
document.getElementById("demo56").innerHTML =
  "First number over 18 is " + first;
function myFunc(value, index, array) {
  return value > 18;
}
document.getElementById("demo57").innerHTML =
  "First number over 18 has index " + numbers.findIndex(myFunc);

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
document.getElementById("demo58").innerHTML =
  "The last temperature over 40 was " + high;
let pos = temp.findLastIndex((x) => x > 40);
document.getElementById("demo59").innerHTML =
  "The last temperature over 40 was in position " + pos;

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
document.getElementById("demo48").innerHTML = newArr;

const flatMapArr = newArr.flatMap((x) => [x, x * 10]);
document.getElementById("demo49").innerHTML = flatMapArr;

const fruitzzz = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo60").innerHTML = fruitzzz;
fruitzzz.sort();
document.getElementById("demo61").innerHTML = fruitzzz;

const sorted = months.toSorted();
document.getElementById("demo63").innerHTML = sorted;

fruitzzz.reverse();
document.getElementById("demo62").innerHTML = fruitzzz;

const reversed = months.toReversed();
document.getElementById("demo64").innerHTML = reversed;

const pointzz = [40, 100, 1, 5, 25, 10];
document.getElementById("demo65").innerHTML = pointzz;
pointzz.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo66").innerHTML = pointzz;
document.getElementById("demo68").innerHTML = pointzz[0];

pointzz.sort(function (a, b) {
  return b - a;
});
document.getElementById("demo67").innerHTML = pointzz;

const num = [45, 4, 9, 16, 25];
let txt = "";
num.forEach(myFunct);
document.getElementById("demo70").innerHTML = txt;
function myFunct(value, index, array) {
  txt += value + "<br>";
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunctionn);
document.getElementById("demo71").innerHTML = numbers2;
function myFunctionn(value, index, array) {
  return value * 2;
}

const myAr = [1, 2, 3, 4, 5, 6];
const newAr = myAr.flatMap((x) => [x, x * 10]);
document.getElementById("demo72").innerHTML = newAr;

const numb = [45, 4, 9, 16, 25];
const over18 = numb.filter(myFnc);
document.getElementById("demo73").innerHTML = over18;
function myFnc(value, index, array) {
  return value > 18;
}

let sum = numb.reduce(myFnct);
document.getElementById("demo74").innerHTML = "The sum is " + sum;
function myFnct(total, value, index, array) {
  return total + value;
}

let allOver18 = numb.every(myFnc);
document.getElementById("demo75").innerHTML = "All over 18 is " + allOver18;

let someOver18 = numb.some(myFnc);
document.getElementById("demo76").innerHTML = "Some over 18 is " + someOver18;

const keys = names.keys();
let textz = "";
for (let x of keys) {
  textz += x + "<br>";
}
document.getElementById("demo77").innerHTML = textz;

const f = names.entries();
for (let x of f) {
  document.getElementById("demo78").innerHTML += x + "<br>";
}

const myMonths = months.with(3, "April");
document.getElementById("demo79").innerHTML = myMonths;

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo777").innerHTML = year;

document.getElementById("demo22").innerHTML = typeof srs; // output: object
document.getElementById("demo23").innerHTML = Array.isArray(srs); // output will be true as it is an array
document.getElementById("demo24").innerHTML =
  "Array: " + (srs instanceof Array); // output will be true as it is an array

const cars2 = new Array("Audi", "F1", "Ford"); // it  also creates an Array, and assigns values to it. There is no need to use new Array(). For simplicity, readability and execution speed, use the array literal method.
document.getElementById("demo3").innerHTML = cars2.join(", ");

let fLen = names.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + names[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo14").innerHTML = text;

let texts = "<ul>";
names.forEach(myFunction); // instead of using for loop We can also use the Array.forEach() function to get the same output which we got by for loop
texts += "</ul>";
function myFunction(value) {
  texts += "<li>" + value + "</li>";
}
document.getElementById("demo15").innerHTML = texts;

fruits[9] = "Lemon"; // Adding elements with high indexes can create undefined "holes" in an array.. output will be undefined for this fruitss array
let Len = fruits.length;
let textss = "";
for (let i = 0; i < Len; i++) {
  textss += fruits[i] + "<br>";
}
document.getElementById("demo20").innerHTML = textss;

let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
document.getElementById("demo25").innerHTML = x;

// Expose functions to the global scope
window.pushFunction = pushFunction;
window.lengthFunction = lengthFunction;
