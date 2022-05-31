function mouseEnter() {
    document.getElementById('dropdown-content').style.visibility = 'visible';
    document.getElementById('menu-arrow').style.transform = 'rotate(180deg)';
    document.getElementById('dropdown-content').classList.toggle('active', true);
    document.getElementById('dropdown-content').classList.toggle('inactive', false);
}
function mouseLeave() {    
    document.getElementById('menu-arrow').style.transform = 'rotate(0deg)';
    document.getElementById('dropdown-content').classList.toggle('inactive', true);
    document.getElementById('dropdown-content').classList.toggle('active', false);
}
function menuBtnToggle(li) {
    const previous = document.getElementById('selected');
    const newImg = document.querySelector('[id*="'+li.children[0].childNodes[0].data+'"]');
    const previousImg = document.querySelector('[id*="selected_img"]');
    previous.classList.toggle('pizzamenu__btn_active', false);
    previous.id = '';
    previousImg.id = previousImg.id.replace(' selected_img', '');
    previousImg.classList.toggle('pizzamenu__inactive', true);
    previousImg.classList.toggle('pizzamenu__active', false);
    newImg.classList.toggle('pizzamenu__inactive', false);
    newImg.classList.toggle('pizzamenu__active', true);
    newImg.id += ' selected_img'
    li.classList.toggle('pizzamenu__btn_active', true);
    li.id = 'selected';
}