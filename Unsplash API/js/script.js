const api_key = 'x75Wsf_V0taCAT5OMunsPdMeE2xasFMIfBPQhvK1KZc';

// Random photos


const address = `https://api.unsplash.com/photos/random?client_id=${api_key}&count=30`;

const randomPhotos = document.getElementById('random_photos');


fetch(address)
.then((response) => response.json())
.then((data) => { 
  console.log(data);
  data.forEach(item => {  
  randomPhotos.innerHTML += `
  <div class='random-div-container'>
    <img class='api-img' src="${item.urls.small}"/>
      <div class='random-title'>${item.alt_description}
      </div>


  </div>
  `;
})}
)  .catch(error => console.error("Error fetching images:", error));



// Result by keyword

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  const searchInput = document.getElementById('search');
  const query = searchInput.value;
  searchInput.value = '';
  console.log(query);

  const url = `https://api.unsplash.com/search/collections?query=${query}&client_id=${api_key}&page=1&per_page=10`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
  console.log(data);
  const queryTitle = document.getElementById('query-title');
  queryTitle.innerHTML = `<h3 id="query">Search results for: ${query}</h3>`
  const imageResults = document.getElementById('image-results');


  imageResults.innerHTML = '';

  data.results.forEach(photo => {

    imageResults.innerHTML += `
    <div class="random-div-container">
      <div class='random-title'>${photo.cover_photo.alt_description}</div>
      <img class='api-img' src="${photo.cover_photo.urls.small}"/>
    </div>
    `;

  });

  


  queryTitle.scrollIntoView({behavior : 'smooth'});

  })
  .catch(error => {
      console.error('Error fetching images:', error);
  });

  

});

// popup


document.addEventListener('click', function(e) {
  if(e.target.classList.contains('api-img')) {
    // grey container
    let container = document.createElement('div');
    container.classList.add('container')
    // popup
    let popup = document.createElement('div');
    popup.classList.add('popup');
    // image in popup
    let image = document.createElement('img');
    image.src = e.target.src;
    image.classList.add('popupImage')
    // image text in popup
    let text = document.createElement('p');
    text.textContent = e.target.closest('div').textContent;
    text.classList.add('text'); 
    // like button in popup
    let button = document.createElement('button');
    button.innerHTML = `Like &#10084`;
    button.classList.add('heart')
    button.addEventListener('click', function() {
      if (button.style.color != 'lightseagreen') {
        button.style.color = 'lightseagreen'
      }
      else {
        button.style.color = 'black'
      }
    })
    // download button in popup
    let download = document.createElement('button');
    download.innerHTML = `Download ⬇`;
    download.classList.add('download')
    // close button in popup
    let x = document.createElement('button');
    x.classList.add('x');
    x.textContent = 'X';
    x.addEventListener('click', function() {
      container.style.display = 'none';
    })
    document.addEventListener('click', function(e) {
      if(e.target === container) {
        container.style.display = 'none'
      }
      
    })
    // appending chiildren
    container.appendChild(popup);
    popup.appendChild(x);
    popup.appendChild(image);
    popup.appendChild(text);
    popup.appendChild(button);
    popup.appendChild(download);
    let main = document.getElementById('main');
    main.appendChild(container);

    

  }
})