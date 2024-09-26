const url = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=eTG7VANgoQMpa-GgtUa_3LLMy-bLBbsFWjgEGZUUymA";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
getData();