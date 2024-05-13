// Variables
  let ageNumber = document.getElementById("age");

 document.getElementById("button").addEventListener('click',function(){
 funcPromise(ageNumber)
 .then((res)=> {
  let resolveageNumber = res;
  // Using a HTML Template to show the resolve from the promise function
  let p1 = `<p>${resolveageNumber}</p>`;
  document.getElementById("promise").innerHTML =  p1;
  })
  
.catch((rej)=>{
  let rejectageNumber = rej;
   // Using a HTML Template to show the reject from the promise function
  let p2 = `<p>${rejectageNumber}</p>`;
  document.getElementById("promise").innerHTML =  p2;
})
})
 // Write a function to return a promise. //
 const funcPromise = (ageNumber) => {
return new Promise ((resolve,reject)=>{
// 3 seconds = 3000 miliseconds
setTimeout(()=> {
  // ageNumber.value looks at the value of the number for the input number box
if (ageNumber.value > 18 ){
  // If condition is true 
resolve("Adult");
}
else {
 // If condition is false
reject("Only adult can visit this page")
}
}, 3000)
})
}