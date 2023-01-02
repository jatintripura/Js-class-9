//getelementById method

document.getElementById("id1");
console.log(document.getElementById("id1"));
//const id1=document.getElementById("id1");
//console.log(id1);

//innerHTML

console.log(id1.innerHTML);
id1.innerHTML="Javascript text";

document.getElementById("id1").innerHTML=" New Javascipt Text";

//getelementByTag method

document.getElementsByTagName("h1");
console.log(document.getElementsByTagName("h1"));

const tag=document.getElementsByTagName("h1")[0];
console.log(tag);
tag.innerHTML="Javascript Header one"

//innerText

const tag1=document.getElementsByTagName("h1")[1];
console.log(tag1);
tag1.innerText="Javascript Header Two";

//getElementByClassName method
document.getElementsByClassName("class");
console.log(document.getElementsByClassName("class"));

const classone=document.getElementsByClassName("class")[0];
console.log(classone);
classone.innerHTML="1st class selector";


const class1 = document.getElementsByClassName("class")[1];
console.log(class1);
class1.innerText="2nd class selector";

//Dom element style

const id_1=document.getElementById("id3");
console.log(id_1.innerText);
id_1.style.color="yellow";
id_1.style.backgroundColor="black";
id_1.style.background="green";
id_1.style.fontSize="40px";

//DOM element atrributes

const id_2=document.getElementById("id2");
console.log(id2.innerText);
console.log(id2.attributes);
console.log(id2.attributes.length);

//getattributes method

const id_4=document.getElementById("id1");
console.log(id_4.innerText);
console.log(id_4.getAttribute("class"));
console.log(id_4.getAttribute("id"));

//Remove attribute
const id_3=document.getElementById("id1");
console.log(id_3.innerText);
id_3.removeAttribute("class");
id_3.removeAttribute("id");

//setattribute

const id_5=document.getElementById("id3");
console.log(id_5.innerText);
id_5.setAttribute("class","newClass");

console.log("Thank You");