let students = []
let filteredStudents = []

let sortAsc = true

const nameInput = document.getElementById("name")
const scoreInput = document.getElementById("score")
const searchInput = document.getElementById("search")
const filterRank = document.getElementById("filterRank")
const tbody = document.getElementById("tableBody")

function getRank(score){

if(score >= 8.5) return "Giỏi"
if(score >= 7) return "Khá"
if(score >= 5) return "Trung bình"
return "Yếu"

}

function addStudent(){

let name = nameInput.value.trim()
let score = parseFloat(scoreInput.value)

if(name === ""){
alert("Họ tên không được trống")
return
}

if(isNaN(score) || score < 0 || score > 10){
alert("Điểm phải từ 0 đến 10")
return
}

students.push({name,score})

nameInput.value = ""
scoreInput.value = ""

nameInput.focus()

applyFilters()

}

function applyFilters(){

let keyword = searchInput.value.toLowerCase()
let rankSelected = filterRank.value

filteredStudents = students.filter(sv=>{

let matchName =
sv.name.toLowerCase().includes(keyword)

let rank = getRank(sv.score)

let matchRank =
rankSelected === "all" || rank === rankSelected

return matchName && matchRank

})

filteredStudents.sort((a,b)=>{

return sortAsc ? a.score - b.score : b.score - a.score

})

renderTable()

}

function renderTable(){

tbody.innerHTML = ""

if(filteredStudents.length === 0){

tbody.innerHTML =
`<tr>
<td colspan="5" class="no-result">
Không có kết quả
</td>
</tr>`

document.getElementById("total").textContent = 0
document.getElementById("avg").textContent = 0

return
}

let totalScore = 0

filteredStudents.forEach((sv,index)=>{

totalScore += sv.score

let rank = getRank(sv.score)

let tr = document.createElement("tr")

if(sv.score < 5){
tr.classList.add("yeu")
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${rank}</td>
<td>
<button class="delete" data-index="${students.indexOf(sv)}">
Xóa
</button>
</td>
`

tbody.appendChild(tr)

})

document.getElementById("total").textContent =
filteredStudents.length

document.getElementById("avg").textContent =
(totalScore/filteredStudents.length).toFixed(2)

updateSortIcon()

}

function updateSortIcon(){

let th = document.getElementById("sortScore")

th.textContent = sortAsc ? "Điểm ▲" : "Điểm ▼"

}

document.getElementById("addBtn")
.addEventListener("click",addStudent)

scoreInput.addEventListener("keypress",function(e){

if(e.key === "Enter"){
addStudent()
}

})

searchInput.addEventListener("input",applyFilters)

filterRank.addEventListener("change",applyFilters)

document.getElementById("sortScore")
.addEventListener("click",function(){

sortAsc = !sortAsc

applyFilters()

})

tbody.addEventListener("click",function(e){

if(e.target.classList.contains("delete")){

let index = e.target.dataset.index

students.splice(index,1)

applyFilters()

}

})