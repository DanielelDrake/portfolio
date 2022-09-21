var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

function Test() {
    alert("'Test' is beeing executed!");
    }

let btn = document.getElementById("btn-submit-mail");
btn.addEventListener('click', event => {
    Test();
})