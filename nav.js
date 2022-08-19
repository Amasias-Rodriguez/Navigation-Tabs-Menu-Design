let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('acive');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))