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
function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve("sucess");
        }, 2000);
    });
}
async function getAlldata(){
    console.log("getting data1......");
    await  getdata(1);
    console.log("getting data2......");
    await  getdata(2);
    console.log("getting data3......");
    await  getdata(3);
    console.log("getting data4......");
    await  getdata(4);
    console.log("getting data5......");
    await  getdata(5);
    console.log("getting data6......");
    await  getdata(56);
}
function getstudent(studname){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("name of students" ,studname );
            resolve("sucess");
        }, 2000);
    });
}
(async function getalldata(){
    console.log("fetching data1.........")
    await getstudent("somi")
    console.log("fetching data2.........")
    await getstudent("ali")
    console.log("fetching data3.........")
    await getstudent("adi")
    console.log("fetching data4.........")
    await getstudent("sona")
    console.log("fetching data5.........")
    await getstudent("fatii")
    console.log("fetching data6.........")
    await getstudent("aleena")
    console.log("fetching data7.........")
    await getstudent("dua")
})();
