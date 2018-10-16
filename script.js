/*
task1: Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот
*/
var klik = document.querySelector('.click');
var check = document.getElementById('scales');
klik.onclick = function(){
    if (check.checked){
        check.checked = false;
    } else {
        check.checked = true;
    }
}
/*
task2: Даны чекбокс. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.
*/
let btn = document.querySelector('.btn1');
let checks = document.querySelectorAll('.cheki');

btn.addEventListener('click', func);
function func (){
    for (var i=0;i<checks.length;i++) {
        if(checks[i].checked) {
            checks[i].checked = false;
        } else {
            checks[i].checked = true;
        }
    }
}
/*
task3: Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац
*/
