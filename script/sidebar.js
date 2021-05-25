const sideBarBtn = document.getElementById('sidebar-access-btn');
const sidebar = document.getElementById('sidebar');

sideBarBtn.addEventListener('click', sidebarActive);

function sidebarActive() {
    sidebar.style.display='block';
    setTimeout(() => {
        sidebar.classList.toggle('sidebar-active');
    }, 10);
}