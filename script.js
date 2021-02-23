// The radius variable is given here
let r = 0
let answer = 0
document.getElementById('button').addEventListener('click', area)
document.getElementById('button-two').addEventListener('click', circumference)
// A functions is made to calculate area and circumference
function area () {
  r = document.getElementById('math').value
  r = parseInt(r)
  answer = Math.PI * (r /2) ** 2
  document.getElementById('answer').innerHTML = answer
}
// Another functions has been made for the second button
function circumference () {
  r = document.getElementById('math').value
  r = parseInt(r)
  answer = Math.PI * (r)
  document.getElementById('answer').innerHTML = answer
}
