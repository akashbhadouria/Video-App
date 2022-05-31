const api = "AIzaSyCRoJhFuKN5lDepD0FPqlE7vm8pjG6ahCQ";

 let q = "superman";

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${api}`;



async function data() {

let res = await fetch(url);
let data  = await res.json();

console.log(data.items);

}


data()