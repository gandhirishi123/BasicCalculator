
document.getElementById('getsum').addEventListener('click',showdata)

function showdata() {
    var a = parseInt(document.getElementById('num1').value) 
    var b = parseInt(document.getElementById('num2').value)
    document.getElementById('Printsum').innerHTML = `The sum of 2 numbers is:${a+b}<br>`
}
document.getElementById('getdiff').addEventListener('click',showdata1)
function showdata1() {
    var a = parseInt(document.getElementById('num1').value) 
    var b = parseInt(document.getElementById('num2').value)
    document.getElementById('Printsum').innerHTML += `The difference of 2 numbers is:${a-b}<br>`
}
document.getElementById('getmulti').addEventListener('click',showdata2)
function showdata2() {
    var a = parseInt(document.getElementById('num1').value) 
    var b = parseInt(document.getElementById('num2').value)
    document.getElementById('Printsum').innerHTML += `The multiplication of 2 numbers is:${a*b}<br>`
}
document.getElementById('getdiv').addEventListener('click',showdata3)
function showdata3() {
    var a = parseInt(document.getElementById('num1').value) 
    var b = parseInt(document.getElementById('num2').value)
    document.getElementById('Printsum').innerHTML += `The division of 2 numbers is:${a/b}<br>`
}