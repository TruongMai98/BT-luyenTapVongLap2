/*
let money = document.getElementById('money').value;
let month = document.getElementById('month').value;
let intersetRate = document.getElementById('interset').value;


for (let i = 0; i < month; i++) {
    let totalInterset = money * (intersetRate / 100) / 12 * month;
    document.write(totalInterset);
}
*/
function sTotal() {
    let money = document.getElementById('money').value;
    let month = document.getElementById('month').value;
    let intersetRate = document.getElementById('interset').value;
    let totalInterset = 0;
    for (let i = 0; i < month; i++) {
        totalInterset = money * (intersetRate / 100) / 12 * month;
       document.getElementById('result').innerHTML= totalInterset;
    }
}
