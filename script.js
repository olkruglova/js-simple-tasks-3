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
    if (ch[i].getAttribute('class') == 'chek'){
    ch[i].addEventListener('change', lang);
    }
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
/*
task5: Даны чекбоксы. Под каждым чекбоксом размещен абзац. Сделайте так, что если чекбокс отмечен - соответствующий абзац видимый, а если не отмечен - не видимый.
*/
/*(function funcVis() {
    var ik = document.getElementById('task5');
    var iks = ik.children;
    //console.log(iks);
    for (var i = 0; i< iks.length; i++) {
        iks[i].addEventListener('change', hide);
    }
    function hide(){
        if (this.checked) {
            $('.txt1').css( "display", "none" );
        }else{
            $('.txt1').css( "display", "block" );
        }
    }
})();
*/
/*
task6: Дан инпут. Даны li. В инпут пишется номер. Сделайте так, чтобы по вводу числа, li с заданным номером покрасился в красный цвет
*/

/*function color(){
    let inputs = document.getElementById('traf');
    inputs.addEventListener('change', color);
    let numbers = document.querySelectorAll('.number');
    let num = [];
    for(var j=0;j<numbers.length;j++){
        num.push(numbers[j].innerHTML);
        for(var i=0;i<num.length;i++){
            if (num[i] == inputs.value) {
                console.log(num[i]);
                changes()
            }
        }
    }
    function changes(){
        for(var j=0;j<numbers.length;j++){
        if (this==numbers[j].innerHTML){
            numbers[j].style.color = 'red';
        }
    }
}}*/
var inputs = document.getElementById('traf');
inputs.addEventListener('change', func1);
var n = 0;
function func1() {
	n = +inputs.value;
	var elem = document.querySelectorAll('.number');
	elem[n-1].style.color = 'red';
}
/*
task7: Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'. Если соответствующий чекбокс отмечен - заданное действие происходит с абзацем (становится красным, например). Если чекбоксу снять отметку - действие отменяется.
*/
let textForChange = document.querySelector('.textForChange');
let options = document.querySelectorAll('.manip');

for(var i=0;i<options.length;i++){
    options[i].addEventListener('change', manipulation);
        }

function manipulation(){
    if (this.checked) {
		textForChange.style.cssText = this.value;
	} else {
		textForChange.style.cssText = 'none';
    }
}