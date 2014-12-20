function createGrid() {
var n = 4;
for (j = 0; j < n; j++) {
    for (i = 0; i < n; i++) {
    var div = document.createElement("div");
  	var container = document.getElementById("container")
        var size = 960/n;
        div.style.width = "80px";
        div.style.height = "80px";
        document.container.appendChild(div);
    }
    div.style.clear = "both";
}
}

window.addEventListener('load', createGrid());

