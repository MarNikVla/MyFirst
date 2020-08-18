$(document).ready(function rotate() {
    var angle = 0;
    // Поворот изображения по часовой стрелке
    $(".rotate-left-button").on("click", function () {
        angle += 90;
        $("#rotate-image").rotate(angle);}
    );
    // Поворот изображения против часовой стрелки
    $(".rotate-right-button").on("click", function () {
            angle -= 90;
            $("#rotate-image").rotate(angle);
        }
    )
});

