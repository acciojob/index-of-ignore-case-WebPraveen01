function indexOfIgnoreCase(s1, s2) {
 if(s1 ==="" || s2===""){
   return -1;
 }
 const LowerS1 = s1.toLowerCase();
 const lowerS2 = s2.toLowerCase();
 
return LowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
