
/*  yaha humne name & function  ko h alag, alag
line per import kiya hai. hum isko ek line mai bhi 
import karva sakte hai . yaha ./ ka meaning current folder ke
file.js name ke module mai se yaha import kiya hai.  */
//  importing named

 import { name } from "./script.js";
 console.log(name);  


import { mySelf } from "./script.js";
mySelf();   // we call mySelf fun here 


// import { users }   from './script.js';

// let b = new users();
//  b.display();      /* yaha humne users name ke class ke ander define 
                   //kiye hue display() name ke fun ko call kiya  */



/* import in one line , hum ese bhi import ker sakte hai.

import {name , mySelf , users} from './file1.js'; .
suppose bahut sari chiz ko import karna hai to hum * ka bhi 
use ker skate hai. like this.....

import * as device  from './file1.js';
 humko console.log(device.name);  device.mySelf();
  let b = new device.users();  ese access karna hai.*/


/*  suppose humko file1.js mai export default kiya hua class myWork
ko yaha import karvana hai so...  hum yaha myWork class name
ki jagah dusra koi bhi name use kar sakte hai.bt without {} brackets 
mai h likhana hai. yaha myWork name ke class ko default import 
kiya hai so class ko curly brackets mai nahi likhna
hai.     
*/

// importing default class 

// import myWork from "./script.js";

// let x = new myWork();   // here we create myWork name class object
// x.volumeUp();   // here we class volumeUp fun which is define inside the class myWork



