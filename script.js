function indexOfIgnoreCase(s1, s2) {
 if(s1 ==="" || s2===""){
   return -1;
 }
 const LowerS1 = s1.toLowerCase();
 const lowerS2 = s2.toLowerCase();
 
return LowerS1.indexOf(lowerS2);
}

// Please do not change the code below
let s1 = prompt("Hello World", "world");
let s2 = prompt("Enter the second string:");
let result = indexOfIgnoreCase(s1, s2);

let resultElement = document.getElementById('result');
resultElement.innerText = "The index is: " + result;