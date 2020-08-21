$(document).ready(function rotate() {
    var angle = 0;
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


$(".flip-horizontally-button").on("click", function () {
    if (!$(this).hasClass('clicked-flip-horizontally-button')) { // если класса нет
        $(this).addClass('clicked-flip-horizontally-button'); // добавляем класс
        $("#flip-image").addClass('img-flip-horizontally');
    } else { // если есть
        $(this).removeClass('clicked-flip-horizontally-button');
        $("#flip-image").removeClass('img-flip-horizontally'); // убираем класс


    }
});


$(".flip-vertically-button").on("click", function () {
    if (!$(this).hasClass('clicked-flip-vertically-button')) { // если класса нет
        $(this).addClass('clicked-flip-vertically-button'); // добавляем класс
        console.log('First click');// код для первого клика
        $("#flip-image").addClass('img-flip-vertically');
    } else { // если есть
        $(this).removeClass('clicked-flip-vertically-button');
        $("#flip-image").removeClass('img-flip-vertically'); // убираем класс

        console.log('Second click'); // код для второго клика

    }
});

// function clickCounter(){
//     let currentCount =1
//     return function () {
//         return currentCount++;
//     }
// }


function makeCount(){
    let clickCount= $(this).data("clickCount");
    if (!clickCount)
        clickCount =1
    else
        clickCount++
    $(this).data("clickCount", clickCount)
    return clickCount%5
}

$('.image-backward').click(function(){
    clickCount=makeCount()
    console.log((clickCount))
    console.log($("#move-image").attr('src',function (ind,currentImage) {
        return currentImage.slice(0, currentImage.length-5)+clickCount + ".jpg"
    }))
})

$('#move-image').click(function(){
    clickCount=makeCount()
    console.log((clickCount))
    console.log($("#move-image").attr('src',function (ind,currentImage) {
        return currentImage.slice(0, currentImage.length-5)+clickCount + ".jpg"
    }))
})