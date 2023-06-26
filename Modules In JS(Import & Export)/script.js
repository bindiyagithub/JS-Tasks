



  
export let name = "Bindiya Virani";  


export function mySelf()
{
      console.log("Hello ES6 module"); 
      // return `Hello ${name}`;
}


export class users
{
        display(){
          return `Her Her Mahadev! ${name}`;
        }
}   




//////////////        default export             ////////////////////

/*  default export . ek h module(js file) mai only 1 h default
export hota hai. hum koi bhi class ya function ya var ko 
default export ker sakte hai.
for ex humko class myWork ko default export karna hai to uske age ese
keyword likhke usko default bana sakte hai. bt hum puri module(JS file)
mai only 1 h chiz ko default bana sakte hai. for eg var ya to
fun ya to class  */

/* how to write export default class */

// 1st way

//  export default class myWork{
//   volumeUp(){
//     console.log("High Volume");
//   }
// } 


// 2nd way

/* class myWork{
      volumeUp(){
        console.log("High Volume");
      }

}
export default myWork;   */ 

/*   how to write export default function

// 1st way
 export default function MyData()
{

}   

  // 2nd way 

function MyData()
{

}

export default MyData;  */

/*  how to write export default var.
 
const p = "mystring ES6 Modules";
export default p;

*/



