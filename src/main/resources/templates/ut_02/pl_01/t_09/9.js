function f1() {
    let link = prompt("Введите адрес сайта...");
    let text = prompt("Введите текст ссылки...");
    let result = "Ваша ссылка: " +
        "<a href='" + link + "'>" + text + "</a><br>";
    result += "Код ссылки: " +
        "&lt;a href='" + link + "'&gt;"
        + text + "&lt;/a&gt;";

    // console.log(result);
    let teg = document.getElementsByTagName("p")[0];
    teg.innerHTML = result;
}

function f2() {
    let rub = "руб";
    let number = prompt("Введите сумму рублей...");
    let percent = prompt("Введите процент, который " +
        "нужно вычислить от " + number + " " +
        rub + ".");
    let result = number * percent / 100;
    let answer = percent + " процентов от "
        + number + " " + rub + ". составлляет - "
        + result + " " + rub + ".";
    alert(answer);
}