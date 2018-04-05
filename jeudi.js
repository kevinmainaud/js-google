// 1.Apparition des éléments CENTRAUX

let bouton_ex=document.getElementById("bouton_ex")
function reappear (){
let content = document.getElementById("content")
content.style.visibility="visible"
bouton_ex.style.visibility="hidden"
}

// 2. Redirection


// open("https://www.thehackingproject.org/week/1/day/4")

let navbar = document.getElementById("textreceive")
function redirection(){
console.log(navbar.value);
open ("https://www.google.fr/#q="+navbar.value)
}
