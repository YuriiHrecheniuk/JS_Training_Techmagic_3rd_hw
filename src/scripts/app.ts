import getData from "./modules/getData.js";
import createPost, {Post} from "./modules/createPost.js";

const postsDiv = document.getElementById('posts') as HTMLDivElement;

getData<Post>('https://jsonplaceholder.typicode.com/posts')
  .then(posts =>
    posts.forEach(post =>
      postsDiv.appendChild(createPost(post))));