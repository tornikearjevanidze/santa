let child = document.getElementById("inp")
let candy = document.getElementById("inp-e")
let butto = document.getElementById("input-btn")
let res = document.getElementById("re")


butto.addEventListener("click", function(){
    let x = candy.value / child.value
   let y = Math.floor(x)
    res.innerHTML=y

})