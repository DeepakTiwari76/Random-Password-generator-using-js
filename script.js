const Passwordbox = document.getElementById('password')
const lengths =document.querySelector("#slide"),
number = document.querySelector(".number");
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const integer = "1234567890";
const symbol ="!@#$%^&*()_+{}?><,./;'[]\=-";
let count =0;
const copyimg= document.getElementById("copy");

const box1 = document.getElementById("one")
const box2 = document.getElementById("two")
const box3 = document.getElementById("three")
const box4 = document.getElementById("four")
let str  = document.getElementById('str')
let connectivity =["","very weak","weak","strong","very strong"]
function generator(){
    let allchar
    let password = "";
    count =0;

    if(lengths.value>=0){
alert("Please Select The Character length Minimum 4 characters")
    }
   else{
    if(box1.checked==true  ){
        count+=1
        // str.innerHTML ="Weak Password";
        allchar+=Uppercase
    password+= Uppercase[Math.floor(Math.random()*Uppercase.length)];}
    if(box2.checked==true){
        count+=1
        // str.innerHTML ="Good Password";
        allchar+=lowercase
    password+= lowercase[Math.floor(Math.random()*lowercase.length)];}
    if(box3.checked==true ){
        count+=1
        // str.innerHTML ="Strong Password";
        allchar+=integer
    password+= integer[Math.floor(Math.random()*integer.length)]};
    if(box4.checked==true ){
        count+=1
        // str.innerHTML ="Very Strong Password";
        allchar+=symbol
    password+= symbol[Math.floor(Math.random()*symbol.length)]};
    str.innerHTML=connectivity[count]
    while(lengths.value >password.length){
        password+= allchar[Math.floor(Math.random()*allchar.length)];
    }
Passwordbox.value = password;}
   }
/// for slide character count 
lengths.addEventListener("input", () => {
    number.textContent = lengths.value;
});

/// copy using click
// function copytext(){
// // Passwordbox.select();
// navigator.clipboard.writetext(Passwordbox.value);

// }
