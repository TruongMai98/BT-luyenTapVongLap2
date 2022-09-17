let F = 0;
let F0 = 0;
let F1 = 1;
let fibonaci = " ";

for (let i = 0; i <100; i++){
    if (i == 0){
        F = 1;
        fibonaci += F + "<br> ";
    }else{
        F = F1 + F0;
        F0 = F1;
        F1 = F;
        fibonaci += F + "<br>";
    }
}
document.write(fibonaci);
