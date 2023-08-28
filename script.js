let newcolor = document.getElementById("color")
let button = document.getElementById("button")
let overall = document.getElementById("overall")
let value = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',changeColor);
function changeColor(){
  let trycolor = '#'
  for(let i=1; i<=6; i++){
    trycolor += addValue();
  }
  overall.style.backgroundColor = trycolor
  newcolor.innerHTML = trycolor
}
function addValue(){
  let nthnumber = Math.floor(Math.random()*16)
  return value[nthnumber]
}
