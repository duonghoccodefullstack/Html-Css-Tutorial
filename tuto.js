
// OPP
// object literals
// let student = {
//   name : "Te n",
//   getInfor () {
//     console.log("helo")
//   }
// }
// mang doi tuong
// let student = {
//   name : "Ten",
//   subjects :[
//     {title:"js",score:9},
//     {title:"html",score:10}
//   ],
//   getSubjects() {
//     this.subjects.forEach(item => {
//       console.log(item.title + ""+item.score);
//     })
//   }
// }


// class 
// class student {
//   constructor (id,name, point) {
//       this.id =id;
//       this.name = name ;
//       this.point =point;
//   }
//   output() {
//           console.log("helo")

//   }
//   sum() {
//       console.log("tinh")
//   }
//   avg() {
//       console.log("tinhtrnungbinh")

//   }
  
// }
// let st1 = new student ("id","ten",9.0 )

// console.log(st1)
// Local storeage
//  add data local
// if (typeof(Storage) !== "undefined") {
//   localStorage.setItem("user","name")
//   localStorage.setItem("pass","admin")
// } else {
//   print ("error")
// }
// remove local
// localStorage.removeItem("username")
// localStorage.clear()

// json local
// object
// const data = {
//   id : "p01",
//   name:"name",
//   age:20
// }
// localStorage.setItem("data",JSON.stringify(data))
// // print object
// console.log(JSON.parse(localStorage.getItem('data')))   
//  array 
// const data = [
//     {"id":"po0","name":"ten","age":"21"},
//     {"id":"po1","name":"ten","age":"21"},
//     {"id":"po2","name":"ten","age":"21"},
//     {"id":"po3","name":"ten","age":"21"},
// ]
// localStorage.setItem("data",JSON.stringify(data))
// //  lấy 1  dữ liêu trong data
// let arrST = JSON.parse(localStorage.getItem("data"))
// arrST.forEach(st  => {
//     console.log(st.id + " "+ st.name + " "+ st.age);
// });


//  Task manager
// const formadd = document.querySelector(".form_task");
// const tasks = document.querySelector(".list")
// let arrTask = [];
// function getItemHtml (id,name) {
//   return `<li data-id ="${id}">
//         <span>
//         ${name}
//         </span>
//   </li>`
// }
// function add(name) {
//   const tasks = {
//       id : Math.floor(Math.random()*10000),
//       name  :name 
//   };
//   arrTask.push(tasks);
//   const taskHtml = getItemHtml(id, name)
//   tasks.innerHTMl += taskHtml ;
// }

// formadd.addEventListener("submit",(event)=> {
//   event.preventDefault();
//   const value =formadd.tasks.value.trim();
//   if (value.lenght) {
//     add(value);
//     formadd.reset();
//   }
// })


// leetcode
// Closure 
// const test = function(n) {
//   let count = n;
//   return function() {
//     count++;
//   };
// }
// class Cout_next {
//   constructor(n){
//     this.n = n;

//   }
//   name () {
//     return  this.n++;
//   }
// }
// const couter = Cout_next(10)
// couter.name()


// class Calculator {
//   /**
//    * @param {number} value
//    */
//   constructor(value) {
//       this.result = value;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   add(value) {
//       this.result += value;
//       return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   subtract(value) {
//       this.result -= value;
//       return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   multiply(value) {
//       this.result *= value;
//       return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   divide(value) {
//       if (value === 0) throw new Error("Division by zero is not allowed");
//       this.result /= value;
//       return this;
//   }

//   /**
//    * @param {number} value
//    * @return {Calculator}
//    */
//   power(value) {
//       this.result **= value;
//       return this;
//   }

//   /**
//    * @return {number}
//    */
//   getResult() {
//       return this.result;
//   }
// }

// //----------------------------------------------------------------

// /**
// * @param {any[]} arr
// * @param {number} depth
// * @return {any[]}
// */
// var flat = function (arr, n) {
//   const stack = [...arr.map((item) => [item, n])];
//   const result = [];

//   while (stack.length > 0) {
//       const [item, n] = stack.pop();

//       if (Array.isArray(item) && n > 0) {
//           stack.push(...item.map((subItem) => [subItem, n - 1]));
//       } else {
//           result.push(item);
//       }
//   }
//   return result.reverse();
// };

// var compactObject = function (obj) {
//   if (obj === null) return null;
//   if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
//   if (typeof obj !== "object") return obj;

//   const compacted = {};
//   for (const key in obj) {
//       let value = compactObject(obj[key]);
//       if (Boolean(value)) compacted[key] = value;
//   }

//   return compacted;
// };
