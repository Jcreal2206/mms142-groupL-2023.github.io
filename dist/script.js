// Header Background Change On Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let toggleBtn = document.querySelector('.toggle-btn');
let sidebar = document.querySelector('.sidebar');
let backBtn = document.querySelector('.back-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    toggleBtn.classList.toggle('hide-toggle-btn');
});

// Function to hide the sidebar when a menu item is clicked
function hideSidebar() {
    sidebar.classList.remove('show-sidebar');
    toggleBtn.classList.remove('hide-toggle-btn');
}

// Get all the sidebar menu items
const sidebarItems = document.querySelectorAll('.sidebar a');

// Add click event listeners to each sidebar menu item
sidebarItems.forEach(item => {
    item.addEventListener('click', hideSidebar);
});

// Hide sidebar when back button is clicked
backBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
    toggleBtn.classList.remove('hide-toggle-btn');
});