function displayCurrentYear() {
  var now = new Date();
  var year = now.getFullYear();
  document.getElementById('year').innerHTML = year;
}
window.onload = function() {
  displayCurrentYear();
}