function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(users){
    const ul = document.getElementById('user-list');
    for(const user of users){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.title;
        ul.appendChild(li);
    }
    
}

function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

function displayComment(data){
    const ol = document.getElementById('comment-list');
    for(const comment of data){
        console.log(comment);
        const li = document.createElement('li');
        li.innerText = comment.name;
        ol.appendChild(li);
    }
}


