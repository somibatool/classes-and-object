// const student = {
//     stndname:"somi batool",
//     // studclass:"BSSE",
//     // studage:23,
//     marks:95,
//     printMarks: function(){
//         console.log("marks =",this.marks);
//     },
// };
// const employee={
//     calctext(){
//         console.log("tax rate is 10%");
//     },
// };
// const somi ={
//     salary: 10000,
// };
// somi.__proto__=employee;
// class toyotacar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let witz = new toyotacar();
// class parent {
//     hellow(){
//         console.log("hellow");
//     }
// }
// class child extends parent{}
// let obj = new child();

// class person{
//     constructor(){
//         console.log("entre parents constructure");
//         this.species="homo spacies";

//     }
//     eat(){
//         console.log("eat");
//     }
  
// }
// class engineer extends person{
//    constructor(branch){
//     console.log("entre child constructure");
//     super();    
//         this.branch=branch;
//         console.log("exit child constructure");
//     }
//     work(){
//         console.log("solve all the problems");
//     }llllll
// }


// let engobj = new engineer("software engineer");
// let data ="secret information";
// class user{
//     constructor(name, email){
//         this.name=name;
//         this.email=email;

//     }
//     viewdata(){
//         console.log("websitedata =" , data);
//     }
// }
// class admin extends user{
//     constructor(name, email){
//         super(name, email)
//     }
//     editdata(){
//         data="some data values";
//     }
// }
// let student1=new user("somi", "abc@gmail.com");
// let student2=new user("ali", "qwe@gmail.com");
// let student3=new user("isma", "isma@gmail.com");
// let student4=new user("dua", "dua@gmail.com");
// let admin1 =new admin("admin" , "admin@");
// function getdata(dataId, getnextdata){

//     setTimeout(()=>{
//     console.log("data" ,dataId);
//     if(getnextdata){
//         getnextdata();
//     }
//     } ,2000)
// };
// getdata(1 ,()=>{
//     getdata(2 ,()=>{
//         getdata(3, ()=>{
//             getdata(4);
//         });

//     });
// });

//  let promise=new promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve(123);
// });
// async function  hellow(){
//     console.log("Hellow I am Somi Batool");
// }
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//         resolve("sucess")
//         }, 3000);
//     });
// }
// async function getweatherdata(){
//     await api();
//     await api();
// }
// function getdata(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data" , dataId);
//             resolve("sucess");
//         }, 2000);
//     });
// }
// async function getAlldata(){
//     console.log("getting data1......");
//     await  getdata(1);
//     console.log("getting data2......");
//     await  getdata(2);
//     console.log("getting data3......");
//     await  getdata(3);
//     console.log("getting data4......");
//     await  getdata(4);
//     console.log("getting data5......");
//     await  getdata(5);
//     console.log("getting data6......");
//     await  getdata(56);
// }
// function getstudent(studname){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("name of students" ,studname );
//             resolve("sucess");
//         }, 2000);
//     });
// }
// (async function getalldata(){
//     console.log("fetching data1.........")
//     await getstudent("somi")
//     console.log("fetching data2.........")
//     await getstudent("ali")
//     console.log("fetching data3.........")
//     await getstudent("adi")
//     console.log("fetching data4.........")
//     await getstudent("sona")
//     console.log("fetching data5.........")
//     await getstudent("fatii")
//     console.log("fetching data6.........")
//     await getstudent("aleena")
//     console.log("fetching data7.........")
//     await getstudent("dua")
// })();
// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns=document.querySelectorAll(".dropdown select");
// for(let select of dropdowns){
//     for(currcode in countrylist){
//         let newOption = document.createElement("option");
//         newOption.innerText=currcode;
//         newOption.value =currcode;
//         select.append(newOption);
//     }
// }
const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
