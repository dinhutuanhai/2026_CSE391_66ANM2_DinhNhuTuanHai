const prices = {

ao:150000,
quan:200000,
giay:500000

}

const product = document.getElementById("product")
const quantity = document.getElementById("quantity")
const total = document.getElementById("total")
const note = document.getElementById("note")
const counter = document.getElementById("counter")

function calcTotal(){

let p = product.value
let q = Number(quantity.value)

if(prices[p] && q){

let sum = prices[p]*q

total.textContent =
sum.toLocaleString("vi-VN")+" VND"

}

}

product.addEventListener("change",calcTotal)
quantity.addEventListener("input",calcTotal)

note.addEventListener("input",function(){

let len = note.value.length

counter.textContent = len+"/200"

if(len>200){
counter.style.color="red"
}else{
counter.style.color="black"
}

})