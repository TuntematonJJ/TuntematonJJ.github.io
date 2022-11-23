/* JavaScriptiä tänne */
function hideAndShow() {
    let x = document.getElementById("testi");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}