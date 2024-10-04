
//MenuBar
const toggleButton = document.querySelector('.toggle-button')
const dropDownMenu = document.querySelector('.drop-down-menu')

toggleButton.onclick = function(){
    dropDownMenu.classList.toggle('open')
}