const url = 'https://icanhazdadjoke.com/';

/* ye uper ki link free nahi hai. it means hum singnin karenge uske bad h
humko deta milega */



/* rest api */

// headers: {
//   Accept: 'application/json',  
//   'User-Agent': 'learning app',
// }


/* yaha humne randomdisplay name ka fun difine kiya jo humne random dad jokes
name ke button per onclick pe call karvay hai. so jub bhi hum wo button 
per click karenge tub ye function chalega.
 */

/*   fetch with parameter  :-
fetch mai headers (it is a parameter) karke ek concept ata hai .yaha 
header mai
 humne Accept key mai  jo bhi format mai data  chahiye wo pass karvana hai. 
 yaha  application/json means data json format mai get hoga.
 yaha headers ek object hai
ager Json ki jagah html lenge to data html format mai get hoga. xml lenge
 to data xml format mai get hoga.  */

function randomdisplay()
{
    fetch("https://icanhazdadjoke.com/", 
    {
        headers : 
        { 
            'Accept' : "application/json"   // data json format mai get hoga.
        }
    
    }).then(function(value) {
    
        return value.json()
    }).then(function(value) {
    
        console.log(value); // for display result in console

        /* jub bhi random dad jokes btn pe click karenge tub humko console mai
        ek h object(ek record ho hai) show hoga . wo object mai(id , joke , status)
        ese 3 values hai usmne se humko joke ki value display karvani hai.
        so innerHtml mai  v.joke liya taki webpage pe wo display ho.
        yaha api ka ek h record hai so humko koi map lene ki zarurat nahi hai
          directly yahi document.getElementById("result").innerHTML = value.joke
          liya then n*/

        document.getElementById("result").innerHTML = value.joke;  
    })
    
}
//randomdisplay();   