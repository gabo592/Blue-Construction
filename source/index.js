const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('navbarMenu')

function showMenu() {
    menu.classList.toggle('open-menu')
}

openMenu.addEventListener('click', showMenu)
closeMenu.addEventListener('click', showMenu)