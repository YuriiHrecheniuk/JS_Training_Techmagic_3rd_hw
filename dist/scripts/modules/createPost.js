export default function createPost(postInfo) {
    const post = document.createElement('div');
    post.innerText = `User ID: ${postInfo.userId}\nPost ID: ${postInfo.id}`;
    post.style.border = 'solid';
    const title = document.createElement('h2');
    title.innerText = postInfo.title;
    post.appendChild(title);
    const body = document.createElement('p');
    body.innerText = postInfo.body;
    post.appendChild(body);
    return post;
}
