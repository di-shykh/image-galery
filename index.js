let url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&extras=url_m&client_id=eTG7VANgoQMpa-GgtUa_3LLMy-bLBbsFWjgEGZUUymA";
const searchInput = document.querySelector('#search-input');
searchInput.focus();
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showImages(data);
}
getData(url);

function showImages(data) {
  const containerForImages = document.querySelector('.image-container .container');
  data.results.forEach(item => {
    let imgElement = document.createElement('img')
    imgElement.src = `${item.urls.regular}`;
    containerForImages.appendChild(imgElement);
  });
}

document.getElementById("search").addEventListener('click', () => {
  url = `https://api.unsplash.com/search/photos?query=${searchInput.value}&per_page=30&orientation=landscape&extras=url_m&client_id=eTG7VANgoQMpa-GgtUa_3LLMy-bLBbsFWjgEGZUUymA`;
  clearImageContainer();
  getData(url);
  document.getElementById("search").className = 'fa fa-times';
});

searchInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    url = `https://api.unsplash.com/search/photos?query=${searchInput.value}&per_page=30&orientation=landscape&extras=url_m&client_id=eTG7VANgoQMpa-GgtUa_3LLMy-bLBbsFWjgEGZUUymA`;
    clearImageContainer();
    getData(url);
    document.getElementById("search").className = 'fa fa-times';
  }
});
// const crossIcon = document.querySelector('.fa-times');
// if (crossIcon) {
//   crossIcon.addEventListener('click', () => {
//     searchInput.value = '';
//     console.log(searchInput);
//     document.getElementById("search").className = 'fa fa-search';
//   });
// }


function clearImageContainer() {
  const images = document.querySelectorAll('.image-container .container img');
  images.forEach(item => item.remove());
}