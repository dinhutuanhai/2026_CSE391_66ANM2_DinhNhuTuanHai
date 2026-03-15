const form = document.getElementById("registerForm")
const success = document.getElementById("success")

function showError(input,message){

let span = input.nextElementSibling

span.textContent = message

input.style.border = "2px solid red"

}

function clearError(input){

let span = input.nextElementSibling

span.textContent = ""

input.style.border = "2px solid green"

}

function validateFullname(){

let input = document.getElementById("fullname")
let value = input.value.trim()

let regex = /^[a-zA-ZÀ-ỹ\s]+$/

if(value.length < 3 || !regex.test(value)){

showError(input,"Tên không hợp lệ")
return false

}

clearError(input)
return true

}

function validateEmail(){

let input = document.getElementById("email")
let value = input.value

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(value)){

showError(input,"Email không hợp lệ")
return false

}

clearError(input)
return true

}

function validatePhone(){

let input = document.getElementById("phone")
let value = input.value

let regex = /^0[0-9]{9}$/

if(!regex.test(value)){

showError(input,"SĐT không hợp lệ")
return false

}

clearError(input)
return true

}

function validatePassword(){

let input = document.getElementById("password")
let value = input.value

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(value)){

showError(input,"Mật khẩu yếu")
return false

}

clearError(input)
return true

}

function validateConfirm(){

let pass = document.getElementById("password").value
let input = document.getElementById("confirm")

if(input.value !== pass){

showError(input,"Mật khẩu không khớp")
return false

}

clearError(input)
return true

}

form.addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm()

if(valid){

form.style.display="none"

success.innerHTML =
`<p class="success">
Đăng ký thành công! 🎉
</p>`

}

})