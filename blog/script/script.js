const postsJsonData = [
    {
        'title': 'Learn all about web development',
        'imgPath': '../blog/photos/webdev.jpeg',
        'author': 'Abhi',
        'authorPic': '../photos/team/abhi.webp'
    },
    {
        'title': 'All Resources to learn web development',
        'imgPath': '../blog/photos/webdev.jpeg',
        'author': 'Abhi',
        'authorPic': `../photos/team/abhi.webp`
    },
]

const upcomingPostJsonData = [
    {
        'title': 'Learn all about Python',
        'imgPath': '../blog/photos/webdev.jpeg',
        'author': 'Vanshika',
        'authorPic': '../photos/team/vanshika.webp'
    },
    {
        'title': 'Learn all about Python',
        'imgPath': '../blog/photos/webdev.jpeg',
        'author': 'Vanshika',
        'authorPic': '../photos/team/vanshika.webp'
    },
    {
        'title': 'Learn all about Python',
        'imgPath': '../blog/photos/webdev.jpeg',
        'author': 'Vanshika',
        'authorPic': '../photos/team/vanshika.webp'
    },
]

let postsData = document.getElementById('posts-data');
let upcomingPostsData = document.getElementById('upcoming-posts-data');

postsJsonData.forEach((post) => {
    postsData.innerHTML += `
    <div onclick="redirectPost('${post.title}')" class="separate-post flex-column-align-items-flex-start">
    <img class="post-img" src="${post.imgPath}">
                <div class="post-details flex-column-align-items-flex-start">
                <p class="post-title">${post.title}</p>
                    <div class="post-author flex-row">
                        <div class="author-pic-div">
                            <img class="post-author-pic" src="${post.authorPic}" alt="${post.author}">
                            </div>
                        <p class="post-author-name">by ${post.author}</p>
                        </div>
                        </div>
                        </div>          
        `
})

upcomingPostJsonData.forEach((post) => {
    upcomingPostsData.innerHTML += `
            <div class="separate-post flex-column-align-items-flex-start">
                <img class="post-img" src="${post.imgPath}">
                <div class="post-details flex-column-align-items-flex-start">
                    <p class="post-title">${post.title}</p>
                    <div class="post-author flex-row">
                        <div class="author-pic-div">
                            <img class="post-author-pic" src="${post.authorPic}" alt="${post.author}">
                        </div>
                        <p class="post-author-name">by ${post.author}</p>
                    </div>
                </div>
            </div>        
        `
})


function redirectPost(postPage) {
    postPage=postPage.toLowerCase();
    window.location.href = `../blog/${postPage.replaceAll(' ','-')}.html`;
    // window.location.href = `../Learn-all-about-web-development`;
    // console.log(location.href(`/${postPage}.html`));
}