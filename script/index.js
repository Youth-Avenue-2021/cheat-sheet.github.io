// let sidebar = document.getElementById('sidebar');
// let showmenu = document.getElementById('showmenu');
// let container = document.getElementById('container');
// let mainBody = document.getElementById('mainBody');
// container.addEventListener('click', hideSidebar);
// function hideSidebar() {
//     mainBody.classList.remove('sidebar-active');
// }
// showmenu.addEventListener('click', showSidebar);
// function showSidebar() {
//     // mainBody.style.transform = 'translate(200px, 0)';
//     mainBody.classList.toggle('sidebar-active');
//     // sidebar.style.zIndex = '1000000000000000';
// }
// window.onscroll = function () {
//     mainBody.classList.remove('sidebar-active');
// }
function indexPage() {
    location.href = 'index';
}

if (window.innerWidth < 700) {

    let img_phone = document.createElement('img');
    img_phone.src = 'photos/7.webp';
    img_phone.onload = function () {
        document.getElementById('main-content').style.backdropFilter = 'blur(0px)';
        document.getElementById('first-section').style.background = `linear-gradient(180deg, #0000007a, #00000075),url(photos/7.webp) center center / cover`;
    }
}

else {

    let img = document.createElement('img');
    img.src = 'photos/4.webp';
    img.onload = function () {
        document.getElementById('main-content').style.backdropFilter = 'blur(0px)';
        document.getElementById('first-section').style.background = `linear-gradient(180deg, #00000080, #000000b5),url('photos/4.webp') center center / cover`;
        document.getElementById('first-section').style.backgroundAttachment = 'fixed';
    }
}