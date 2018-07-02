let countries = ['Рос', 'Авс', 'Пол', 'Лат', 'Чех'];
let population = [142, 9, 33, 2, 11];

function foo() {
    let tegDiv_0 = document.getElementsByTagName('div')[0];

    for (let i = 0; i < countries.length; i++) {
        tegDiv_0.innerHTML +=
            countries[i] + " - " + population[i] + " мил.<br>";
    }

}