// //  "use strict";

// //     function test(a,a)
// //     {
// //       console.log(a); 
      
// //     }
// //     test(10,20); // error

// //strict mode me error and non strict mode me override value
    
 

//     // function test(a,a)
//     // {
//     //   console.log(a); 
      
//     // }
//     // test(10,20); // 20
    


//     // this substitution
//     // function hello()
//     // {
//     //     console.log(this);
        
//     // }

//     // hello(); // window object in non strict mode, undefined in strict mode


//     // "use strict";
//     //  function hello()
//     // {
//     //     console.log(this);
        
//     // }

//     // hello(); // undefined


    
//     "use strict";
//      function hello()
//     {
//         console.log(this);
        
//     }

//     window.hello(); // window object

//     let obj={
//         name:"hello",
//         getName:function()
//         {
//             console.log(this.name); // hello
//         }
//     }
//     obj.getName(); // hello


//     let obj1={
//         name:"hello",
//         getName:function()
//         {
//             console.log(this); // { name: 'hello', getName: [Function: getName] }
//         }
//     }
//     obj1.getName();


//     let hello1=()=>{
//         console.log(this); // window object in non strict mode
        
//     }

//    "use strict";
    
//     let hello2=()=>{
//         console.log(this); // window object
        
//     }
//     hello2();



//     "use strict";
//     // nesting arrow function
//     let hello3=()=>{
//         let hello4=()=>{
//             console.log(this); // window object
//         }
//         hello4(); 
//     }
//     hello3(); // window object

//     // arrow function with object
//     let obj2={
//         name:"hello",
//         getName:()=>{
//             console.log(this); // window object
//         }
//     }
//     obj2.getName();

//     //function k andar function
//     function outerFunction() {
//         function innerFunction() {
//             console.log(this); // undefined
//         }
//         innerFunction(); 
//     }
//     outerFunction(); 

//     // arrow function inside regular function
//     "use strict";
//     function outerFunction2() {
//         let innerFunction2 = () => {
//             console.log(this); // undefined
//         }
//         innerFunction2(); 
//     }

//     outerFunction2(); 

//     // regular function inside arrow function


    
//     let outerFunction3 = () => {
//         function innerFunction3() {
//             console.log(this); // undefined
//         }
//         innerFunction3(); 
//     }
//     outerFunction3(); 


//     var x=1;
//     a();
//     b();
//     console.log(x);

//     function a() {
//         var x=10;
//         console.log(x); // 10
//     }
//     function b() {
//         var x=20;
//         console.log(x); // 20
//     }


//     var a="javed";

//     function hello5(){
//         console.log("hi");
        
//     }
//     console.log(a);// javed
//     hello5(); // hi
    
    
    
//     console.log(data); // undefined
    
//     var data="hello";

//     //difference between undefined and not defined
//     // undefined means variable is declared but not initialized
//     // not defined means variable is not declared at all



//     console.log(demo()); // hello function
//     console.log(str());  //undefined because
//     function demo() {
//         console.log("hello function"); 
//     }

//     var str=() => {
//         console.log("hello arrow function"); 
//     }


//     //  ----------------------------------------------

//     //Prototype
//     //  - -------------------------


//     let user={
//         name:"soniya"
//     }

//     let arr=[4,5,6,7];
//     //  -------------------------------------


function a(){
    var b=12;
    console.log(b); // 12
    function c(){
        var b=10;
        console.log(b++); // 10
    }
    c(); // 10

    
}
var b=10;
console.log(b); // 10


// lexical scope

function a() {
   var b=10;
   function c() {
       console.log(b); // 10
   }
   c(); // 10
}
a(); // 10

// closure- a closure is a feature where an inner function has access to variables in its outer (enclosing) function’s scope,
//  even after the outer function has finished executing

function counter(){
    let count=0;
     
    function increment(){
        console.log(count++);
    }
    increment();
        
}
counter(); // 0
counter(); // 0
counter(); // 0

// to solve this we can use closure
function counter2(){
    let count=0;
     
    function increment(){
        console.log(count+=1); // increment count and print it
    }
    return increment; // return the inner function
}
let count1=counter2();
count1(); // 1
count1(); // 2
count1(); // 3



function counter3(){
    let count=0;
    function calculate(){
        return  count+=1;
    }
    return calculate; // return the inner function
    }
    let result=counter3();
    console.dir(result());  
    console.warn(result()); // it gives warning
    console.error(result()); // it gives error


// create a function secureBankAccount that uses a closure to keep the balance private.

function secureBankAccount() {
    let balance = 0; // private variable

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    function getBalance() {
        return balance; // return the private balance
    }

    return { deposit, withdraw, getBalance }; // return an object with methods
}
let myAccount = secureBankAccount();
myAccount.deposit(100); // Deposited: $100. New balance: $100
myAccount.withdraw(50); // Withdrew: $50. New balance: $50
console.log(`Current balance: $${myAccount.getBalance()}`); // Current balance: $50
myAccount.withdraw(100); // Invalid withdrawal amount.
myAccount.deposit(-20); // Deposit amount must be positive.
// console.log(myAccount.balance); // undefined, balance is private
// console.log(myAccount.getBalance()); // 50, can access balance through method
// console.log(myAccount.deposit(100)); // Deposited: $100. New balance: $100
// console.log(myAccount.withdraw(50)); // Withdrew: $50. New balance: $50
// console.log(myAccount.getBalance()); // Current balance: $50
