var one = 'Hello!';

// document.getElementById('message').innerHTML = one;
$('#test').text(one); //jquery задаем текст по ид элемента
$('#test').fadeOut('slow'); //jquery делаем анимацию исчезновения
// $('.myclass').text(one);
document.getElementsByClassName('myclass')[0].innerHTML = one; //Js текст элемента по классу с ид
document.getElementsByClassName('myclass')[3].innerHTML = 'Привет!';

document.getElementsByClassName('myclass')[0].style.color = "green";//js цвет элемента

$('.myclass').css('color','green');// jquery цвет текста
$('.myclass').css('background-color','black'); // jquery фон


array = ["Один", "Два", "Три"];
for (i=0; i<array.length; i++)
{
    console.log(array[i]);
}

array.forEach(function (element, index) {
    console.log(element);
})

function sum(a,b) {
   result = a+b;
   $('#test').text(result);
}

console.log(sum(3,2));

// test1.onclick = function () {
//     alert('Ghbdtn');
// }
var say = function asd () { //если без присваивания переменной то вызывается при загрузке
    alert('Ghbdtn');
}
test1.addEventListener('click',say) //вешаем событие клика
test1.removeEventListener('click', say);