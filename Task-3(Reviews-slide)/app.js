// local reviews data
const reviews = [
     {
       id: 1,
       name: "susan smith",
       job: "web developer",
       img:
         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
       text:
         "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
     },
     {
       id: 2,
       name: "anna johnson",
       job: "web designer",
       img:
         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
       text:
         "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
     },
     {
       id: 3,
       name: "peter jones",
       job: "intern",
       img:
         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
       text:
         "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
     },
     {
       id: 4,
       name: "bill anderson",
       job: "the boss",
       img:
         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
       text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
     },
   ];

   let i = 0;

   function display()
  {
        const slide = reviews[i];
        const newReview = `<article class="review" id = "currentReview">
        <div class="img-container">
          <img src="${slide.img}" id="person-img" alt="" />
        </div>
        <h4 id="author">${slide.name}</h4>
        <p id="job">${slide.job}</p>
        <p id="info">
          ${slide.text}
        </p>

        <div class="button-container">
          <button class="prev-btn" onclick="preReview()">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="next-btn" onclick="nextReview()">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <button class="random-btn" firstReview()> surprise me </button>
      </article>`;

      document.getElementById("currentReview").innerHTML = newReview;

   }

   display();

   

   //it display next slide-review by clicking the next btn

   function nextReview()
  {
       if(i == reviews.length)
       {
        i = 0;
       }
       else
       {
          i++;
       }
       display();
  }

  //it display previous slide-review by clicking the previous btn

  function preReview()
  {
    if(i == 0)
    {
      i = reviews.length;
    }
    else
    {
       i--;
    }
    display();
  }

  /* now display only first review  , ye humne random click name ke button
  per call karvaya hai */

  function firstReview()
  {
    i = 0;
   display();
  }