function searchItems()
{
   let item = document.getElementById("searchTearm").value;
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
   .then((v)=>{

     return v.json();
   }).then((v)=>{
     
     console.log(v);
     displayInformation(v)
   }); 
}


   function displayInformation(v){
     let output = v.meals.map((m)=>{

          return ` <div class="results" id="result">
          <div class="articles">
            <a href="https://www.themealdb.com/browse.php?s=${m.strMeal}" 
            target="_blank">
               
              <h4>${m.strMeal}</h4>
              <div>
              <img src = "${m.strMealThumb}"/>
              </div>
              <p>${m.strInstructions}</p>
            </a>
          </div>
            </div> `
    
       });
       
       document.getElementById("result").innerHTML = output.join(" ");
     }

