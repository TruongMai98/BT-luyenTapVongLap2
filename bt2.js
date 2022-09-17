let integer = +prompt('nhap so nguyen duong');
let factorial = 1;


if (integer > 0 && integer % 1 == 0){
    for (let i = 1; i <= integer; i++){
        factorial *= i
    }
    document.write(factorial);
} else {
    alert('nhap so nguyen duong');
}