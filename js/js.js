var menu = document.getElementById("menumobile");
var burgermenu = document.getElementById("burgermenu");
var close = document.getElementById("close");
var svg = document.querySelectorAll("#save");
var popupsaved = document.getElementById("popupsaved");
var popupunsaved = document.getElementById("popupunsaved");
var map = document.getElementById("button3");
var mappopup = document.getElementById("mappopup");
var closemap = document.getElementById("close2");

/* this is the mobile menu */

menu.addEventListener("click", function (event) {
  event.preventDefault();
  burgermenu.style.visibility = "visible";
});

close.addEventListener("click", function () {
  burgermenu.style.visibility = "hidden";
});

/* flags change */

svg.forEach(function (svg) {
  var polygon = svg.querySelector("#save #Layer_2 polygon");
  svg.addEventListener("click", function () {
    event.preventDefault();
    if (polygon.getAttribute("fill") === "#f6f6f6") {
      polygon.setAttribute("fill", "#faca28");
    } else {
      polygon.setAttribute("fill", "#f6f6f6");
    }
  });
});

/* popups for saved */

svg.forEach(function (svg) {
  var polygon = svg.querySelector("#save #Layer_2 polygon");
  svg.addEventListener("click", function () {
    event.preventDefault();
    if (polygon.getAttribute("fill") === "#f6f6f6") {
      popupunsaved.style.display = "block";
      popupunsaved.style.visibility = "visible";
      popupunsaved.style.opacity = 1;
    } else {
      popupsaved.style.display = "block";
      popupsaved.style.visibility = "visible";
      popupsaved.style.opacity = 1;
    }

    setTimeout(function () {
      popupsaved.style.opacity = 0;
      popupunsaved.style.opacity = 0;

      setTimeout(function () {
        popupsaved.style.display = "none";
        popupunsaved.style.display = "none";
      }, 1300);
    }, 1900);
  });
});

/* map popup */

map.addEventListener("click", function (event) {
  mappopup.style.display = "flex";
});

closemap.addEventListener("click", function () {
    mappopup.style.display = "none";
  });