//Поворот изображения ID=rotate-image
$(document).ready(function rotate() {
    let angle = 0;
    // Поворот изображения по часовой стрелке
    $(".rotate-left-button").on("click", function () {
            angle += 90;
            $("#rotate-image").rotate(angle);
        }
    );
    // Поворот изображения против часовой стрелки
    $(".rotate-right-button").on("click", function () {
            angle -= 90;
            $("#rotate-image").rotate(angle);
        }
    )
});

//Переворот изображения (id = flip-image) лева направо
$(".flip-horizontally-button").on("click", function () {
    if (!$(this).hasClass('clicked')) { // если класса clicked нет
        $(this).addClass('clicked'); // добавляем класс
        $("#flip-image").addClass('img-flip-horizontally');
    } else { // если есть
        $(this).removeClass('clicked');
        $("#flip-image").removeClass('img-flip-horizontally'); // убираем класс
    }
});

//Переворот изображения (id = flip-image) ввех ногами
$(".flip-vertically-button").on("click", function () {
    if (!$(this).hasClass('clicked')) { // если класса нет
        $(this).addClass('clicked'); // добавляем класс
        $("#flip-image").addClass('img-flip-vertically');
    } else { // если есть
        $(this).removeClass('clicked');
        $("#flip-image").removeClass('img-flip-vertically'); // убираем класс
    }
});

//вспомогательная функция посчета количества кликов,
//возвращает количество кликов деленное по модулю на n
function makeCount(n) {
    let clickCount = $(this).data("clickCount");
    if (!clickCount)
        clickCount = 1;
    else
        clickCount++;
    $(this).data("clickCount", clickCount);
    return clickCount % n
}

//по клику на .image-backward изменяет src #move-image
//добавляя число (clickCount) в конец названия
//пример:
//Russian blue0.jpg --> Russian blue1.jpg --> Russian blue2.jpg
$('.image-move').click(function () {
    clickCount = makeCount(5);
    $("#move-image").attr('src', function (index, currentImage) {
        return currentImage.slice(0, currentImage.length - 5) + clickCount + ".jpg"
    })
});

//по клику на #move-image изменяет src #move-image
//добавляя число (clickCount) в конец названия
//пример:
//Russian blue0.jpg --> Russian blue1.jpg --> Russian blue2.jpg
$('#move-image').click(function () {
    clickCount = makeCount(5);
    $("#move-image").attr('src', function (ind, currentImage) {
        return currentImage.slice(0, currentImage.length - 5) + clickCount + ".jpg"
    })
});

//по клику на #cats_breeds отправляет ajax запрос на сервер
// получает измененный href для #cats_breeds
//примеры ответа:
//https://yandex.ru/images/search?text=Мейн-кун
//https://yandex.ru/images/search?text=Короткошерстный ориентал
// и т.д.
$('#cats_breeds').click(function () {
    // console.log(this.id)
    $.get('/get_href/',{id:this.id}, function (data) {
        $('#cats_breeds').attr('href', data);
    })
});

$('#cats_friends').click(function () {
    // console.log(this.id)
    $.get('/get_href/',{id:this.id}, function (data) {
        $('#cats_friends').attr('href', data);
    })
});

$('#cats_enemies').click(function () {
    // console.log(this.id)
    $.get('/get_href/',{id:this.id}, function (data) {
        $('#cats_enemies').attr('href', data);
    })
});