let days = ['Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let sel = document.getElementsByTagName('select')[0];
let textAr = document.getElementsByTagName('textarea')[0];
let divN = document.getElementsByTagName('div')[0];
let res = [];

for (let i = 0; i < days.length; i++) {
    let opt = document.createElement('option');
    opt.value = days[i];
    opt.innerHTML = days[i];
    sel.appendChild(opt);
}

function keep() {
    let temp = [];
    temp.push(sel.value);
    temp.push(textAr.value);
    res.push(temp);
}

function print() {
    let str = "";
    for (let i = 0; i < res.length; i++) {
        str += "<p>" + (i + 1) + ". Заметка на:  " +
            '<b> ' + res[i][0] + '</b>' + "</p>" +
            "<p>" + res[i][1]+"</p><hr>";
    }
    divN.innerHTML = str;
}