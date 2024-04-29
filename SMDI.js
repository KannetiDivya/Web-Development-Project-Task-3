const loginBtn = document.getElementById('loginBtn');
const contentDiv = document.getElementById('content');

loginBtn.addEventListener('click', () => {
    // Redirect to authentication page or show authentication modal
    // Once authenticated, fetch and display content
    getContent();
});

function getContent() {
    // Dummy content for demonstration
    const dummyContent = `
        <h2>Twitter Feed</h2>
        <div class="tweet">Tweet 1</div>
        <div class="tweet">Tweet 2</div>
        <h2>Facebook Feed</h2>
        <div class="post">Post 1</div>
        <div class="post">Post 2</div>
        <h2>Instagram Feed</h2>
        <div class="photo">Photo 1</div>
        <div class="photo">Photo 2</div>
    `;
    contentDiv.innerHTML = dummyContent;
}
