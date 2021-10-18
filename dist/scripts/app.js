import getData from "./modules/getData.js";
import createPost from "./modules/createPost.js";
const postsDiv = document.getElementById('posts');
getData('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.forEach(post => postsDiv.appendChild(createPost(post))));
