let users = [];
let currentUser;

// Load data from JSON file
fetch('../data/users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
        currentUser = users[0];  // Default to the first user
        updateUserInfo();
        renderUsers();
        renderPosts();
    });

function switchUser() {
    const currentIndex = users.indexOf(currentUser);
    currentUser = users[(currentIndex + 1) % users.length];
    updateUserInfo();
    renderUsers();
    renderPosts();
}

function updateUserInfo() {
    document.getElementById('currentUserInfo').innerHTML = `
        <h3>Logged in as: ${currentUser.name}</h3>
        <p>Followers: ${currentUser.followers.length} | Following: ${currentUser.following.length}</p>
    `;
}

function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        if (user.username !== currentUser.username) {
            const li = document.createElement('li');
            const isFollowing = currentUser.following.includes(user.username);
            li.innerHTML = `
                <span>${user.name} (${user.username})</span>
                <button onclick="toggleFollow('${user.username}')">${isFollowing ? 'Unfollow' : 'Follow'}</button>
            `;
            userList.appendChild(li);
        }
    });
}

function toggleFollow(username) {
    const otherUser = users.find(u => u.username === username);
    if (currentUser.following.includes(otherUser.username)) {
        currentUser.following = currentUser.following.filter(u => u !== otherUser.username);
        otherUser.followers = otherUser.followers.filter(u => u !== currentUser.username);
    } else {
        currentUser.following.push(otherUser.username);
        otherUser.followers.push(currentUser.username);
    }
    updateUserInfo();
    renderUsers();
}

function createPost() {
    const text = document.getElementById('postText').value;
    const imageInput = document.getElementById('postImage');
    let imageURL = '';

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageURL = e.target.result;
            addPostToList(text, imageURL);
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        addPostToList(text, '');
    }

    document.getElementById('postText').value = '';
    document.getElementById('postImage').value = '';
}

function addPostToList(text, imageURL) {
    const post = {
        text: text,
        imageURL: imageURL,
        likes: 0,
        comments: [],
        author: currentUser.username
    };
    currentUser.posts.push(post);
    renderPosts();
}

function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    users.forEach(user => {
        user.posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let postHTML = `<h4>${user.name} (${user.username})</h4>`;
            postHTML += `<p>${post.text}</p>`;
            if (post.imageURL) {
                postHTML += `<img src="${post.imageURL}" alt="Post image">`;
            }
            postHTML += `
                <button class="like-btn" onclick="likePost('${user.username}', ${index})">Like (${post.likes})</button>
                <button class="comment-btn" onclick="toggleComments('${user.username}', ${index})">Comment</button>
                <button class="share-btn">Share</button>
                <div class="comments-section" id="comments-${user.username}-${index}" style="display: none;">
                    <input type="text" placeholder="Add a comment" onkeydown="addComment(event, '${user.username}', ${index})">
                    <ul id="commentList-${user.username}-${index}">
                        ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
                    </ul>
                </div>
            `;

            postDiv.innerHTML = postHTML;
            postList.appendChild(postDiv);
        });
    });
}

function likePost(username, postIndex) {
    const user = users.find(u => u.username === username);
    user.posts[postIndex].likes++;
    renderPosts();
}

function toggleComments(username, postIndex) {
    const commentsSection = document.getElementById(`comments-${username}-${postIndex}`);
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(event, username, postIndex) {
    if (event.key === 'Enter') {
        const commentInput = event.target;
        const user = users.find(u => u.username === username);
        user.posts[postIndex].comments.push(commentInput.value);
        commentInput.value = '';
        renderPosts();
    }
}

function searchUsers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.username !== currentUser.username &&
        (user.name.toLowerCase().includes(query) || user.username.toLowerCase().includes(query))
    );

    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    if (filteredUsers.length === 0) {
        // If no users are found, display a "No user found" message
        const noUserMessage = document.createElement('li');
        noUserMessage.textContent = '❌ No user found';
        userList.appendChild(noUserMessage);
    } else {
        // Otherwise, display the filtered list of users
        filteredUsers.forEach(user => {
            const li = document.createElement('li');
            const isFollowing = currentUser.following.includes(user.username);
            li.innerHTML = `
                <span>${user.name} (${user.username})</span>
                <button onclick="toggleFollow('${user.username}')">${isFollowing ? 'Unfollow' : 'Follow'}</button>
            `;
            userList.appendChild(li);
        });
    }
}

