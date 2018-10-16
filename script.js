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
Выбранные языки должны выводится в абзац ниже через запятую
*/
let ch = document.getElementsByTagName('input');
let p = document.querySelector('.answer');
let arr =[];
for(var i=0;i<ch.length;i++) {
    ch[i].addEventListener('change', lang);
}
function lang() {
    if(this.checked) {
        arr.push(' ' + this.value);
		p.innerHTML = arr;
    }
}
/*
task4: Дан чекбокс. Дан инпут. Сделайте так, что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый
*/
let inp = document.getElementById('visInvis');
let rad = document.querySelector('.radio');

function change (){
    if(rad.checked) {
        inp.style.display = 'none';
    } else {
        inp.style.display = 'block';
    }
}