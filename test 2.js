console.log("javascript connected");

// Q.1)what does javaScript stand for? 
       //  javaScript is a programming language used to make web pages interactive.

// Q.2) how do you declare a variable in javaScript?
     let name = "Tanu Rathi";
     const age = 19;
     var city = "Noida";
     console.log(name);

//Q.3) what are the basic data types in javaScript?
     let name = TanuRathi; //string
     let age = 19;         //Number
     let isStudent = true; //Boolean
     let x;                //Underfind
     let y = null;         //Null

//Q.4) how do you Comment out a single line of code in javaScript?
       //single-line comments are written using //

// Q.5) what is the purpose of the 'console.log()' function?
         //  console.log() is used to display output in the console.
      Example: 
          let name = "TanuRathi";
          console.log(name);
  
//Q.6) how do you create a function in javascript?  
      function greet(){
        console.log("hello");
      }
      greet();

//Q.7) what is difference between let, const, aur var?
       // let : value can be chancged.
       Example : let age = 19;
                 console.log(age);

       // const : value cannot be changed.
       Example : const name = "Tanu";
                  console.log(name);

       // var : old way of declaring.
       Example : var city = "Noida";
                 console.log(city);

//Q.8) how do you add two Number in javaScript?
      let a = 10;
      let b = 20;
      sum = a + b;
      console.log(sum);
      
//Q.9) how do you concatenate two strings?
       let firtName = "Tanu";
       let lastName = "Rathi";
       console.log("firstName + lastName");

 //Q.10) what is the typeof opretor used for?
        let fruit = "Mango";
        console.log("typeof fruit");
        //output = string
        
//Q.11) how do you check do you check if a variable is underfined?
        let color;
        console.log(color === underfind);

//Q.12) what is the purpose of an if statement?
        let age = 18;
        if(age>=18){
            console.log("you can vote");
        }       

//Q.13) how do you write a for loop?
        for(let i=1; i<=5; i++){
            console.log(i);
        }
     //outut 1
             2
             3
             4
             5
             
//Q.14) what is an array?
        // an array is a collection of multiple values stored in a single variable.
        let fruits = ["Apple", "Orange", "kiwi", "Mango", "Banana", "Papaya"];
        console.log("fruits");
        
        //output ["Apple","Orange","kiwi","Mango","Banana", "Papaya"]

//Q.15) how do you access an element in an array?
        let fruit=["Apple","Banana","Mango"];
        console.log(fruit[1]);
        //output = Banana

//Q.16) how do you add an element to the end of an array?
        let num = [10,20,30,40,50,60,70,80,90];
        num.push(100);
        console.log(num);
        //output [10,20,30,40,50,60,70,80,90,100]

//Q.17) what is the last element from an array in javascript?
        let num = [10,20,30,40,50];
        num.pop();
        console.log(num);
        //output [10,20,30,40,] 
       
//Q.18) what is an object in javascript?
        //an object stores data in key-value pairs.
        Example: let student={
                      Name: "Tanu",
                      age: 19
        };
        console.log(student);
//Q.19) how do you access a property of an object?
        let student={
            name="tanu",
            age=19,
            city:"bijnor"
        };
        console.log(student.name); 
   
//Q.21) what is the callback function in javaScript?
         function message(){
            console.log("hello");
         }
         function greet(callback){
            callback();
         }
         greet(message);

//Q.22) what is the difference between == and ===?
        let a = 10;
        let b ="10";
        console.log(a==b);
        console.log(a===b);
        //output= true 
                //false

// Q.23) how do you declare a string in javaScript?
         let city = "Delhi";
         console.log(city);
         
//Q.24) how do you find the length of a string?
       let city = "Delhi";
       console.log(city.length);
       //output= 5

//Q.25) what is nan and how do you check it?
//NaN means Not a Numbur
   console.log(isNaN("hello"));

//Q.29) what is the purpose of SetTimeOUT()?
        setTimeout(function(){
            console.log("hello");
        }, 2000);

//Q.29) how do you include an external javaScript file in an Html document?
         <script src="script.js"></script>