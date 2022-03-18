
function hide(data) {
    const div = document.getElementById(data.parentElement.className+"-content");
    h2child = document.getElementsByClassName(data.parentElement.className)[0].childNodes[1].childNodes[1];
    if(div.style.display == "none") {
        div.style.display = "grid";
        h2child.innerHTML = h2child.className.replace(' is-toggled', '');
        h2child.classList.toggle('is-toggled')
    } else {
        div.style.display = "none";
        h2child.innerHTML = "✔ "+h2child.innerHTML;
        h2child.classList.toggle('is-toggled')
    };
};