// The radius variable is given here
let r = 0
let answer = 0
document.getElementById('button').addEventListener('click', area)
document.getElementById('buttonTwo').addEventListener('click', circumference)
// A functions is made to calculate area and circumference
function area() {
  r = document.getElementById('math').value
  r = parseInt(r)
  answer = Math.PI * (r * r)
  document.getElementById('answer').innerHTML = answer
}
// Another functions has been made for the second button
function circumference () {
  r = document.getElementById('math').value
  r = parseInt(r)
  answer = 2 * r
  document.getElementById('answer').innerHTML = answer
}
