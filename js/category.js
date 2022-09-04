/////////////////////////////////////////////////////////////////////////////
//          Fetching  Categories from API to enable navbar items
////////////////////////////////////////////////////////////////////////////

const newsCategories = () =>{   
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(newsItems => newsCategoriesContainer(newsItems.data.news_category))
    .catch(error => console.log(error));
}

const newsCategoriesContainer = (newsContainer) =>{


    const categoryContainer = document.getElementById('category-container');

    newsContainer.forEach(newsCategory => {
         const navItem = document.createElement('li');
         navItem.classList.add('me-5');
         navItem.innerHTML = `
              <a class="nav-link hover text-light selected" onclick="loadNews('${newsCategory.category_id}')" href="#">${newsCategory.category_name}</a>
         `
         categoryContainer.appendChild(navItem); 

               

    }) 
         
    }










