const spinner = document.getElementById('spinner');

// fetching a Category of news and make News Articles

const loadNews = (categoryId) =>{

    spinnerDisplay(true);

    const url =`https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => newsContainer(data.data));
}

// here data.data (ie. bNews ) is an Array of Objects, let's get each object from this array.

const newsContainer = (newsArticles) =>{
   
    console.log(newsArticles);
     const newsNumber = document.getElementById('news-number');

     if(newsArticles.length == 0){
         newsNumber.innerText =`News not available`;  
      }


     const cardContainer = document.getElementById('card-container');  // parent element for news cards 


     
    cardContainer.innerHTML = ``;
    // applying forEach loop to get each object element
    newsArticles.forEach( news => {
        //use the each objects as a single news card.
      const card = document.createElement('div');
      
      card.classList.add('card');
      card.classList.add('mb-3');
      card.classList.add('card-gutter');



       card.innerHTML = ` 
                <div class="row g-0 card-hover">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text text-secondary">${news.details.substring(0, 270) + "..."}</p>      
                              
                            <div class="d-flex justify-content-evenly">
                                    <div class="w-25 d-flex" >
                                            <div class="author-image-container">
                                            <img src="${news.author.img}" class="author-image">
                                            </div>
                                        
                                        <div class="ms-2">    
                                        <p class="card-title fs-6 fw-semibold mb-0">${news.author.name}</p>
                                        <p class="mt-0">${news.author.published_date}</p>
                                    </div>
                                    </div>
                                    <div>
                                          <i class="fa-solid fa-eye"></i>
                                          <b>${news.rating.number}M</b>
                                    </div>  
                                    <div>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <div>
                                         <a href="" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right text-secondary fs-3"></i></a>
                                    </div>                                   
                            
                        </div>    
                    </div>
                    </div>
                </div>
       `
       cardContainer.appendChild(card);
   

    // Show the total number of news articles
     newsNumber.innerText =`${newsArticles.length} News Articles available`;

       
    });

    spinnerDisplay(false);
     
}

/// Show Spinner
   const spinnerDisplay = (value) =>{
         
        if(value == true){
               spinner.classList.remove('d-none');
        }
        else{
             spinner.classList.add('d-none');
        }

   }






newsCategories();

loadNews('01');







