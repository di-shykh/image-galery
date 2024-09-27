const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&extras=url_m&client_id=eTG7VANgoQMpa-GgtUa_3LLMy-bLBbsFWjgEGZUUymA";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  showImages(data);
}
getData();
//console.log(data[0].urls.regular);
function showImages(data) {
  // console.log(data.results[0].urls.regular);
  const containerForImages = document.querySelector('.image-container .container');
  data.results.forEach(item => {
    let imgElement = document.createElement('img')
    imgElement.src = `${item.urls.regular}`;
    containerForImages.appendChild(imgElement);
    // containerForImages.innerHTML = `<img src="${item.urls.regular}" alt="image">`
  });
}