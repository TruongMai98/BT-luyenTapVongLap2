/*let i;
let j;
for (i=0; i<9; i++){
    switch (i) {
        case 3:
            document.write("*");
            break;
    }
    for (j=0;j<2;j++){
        document.write("  ")
    }
    switch (i){
        case 7:
            document.write("*");
            break;
    }
}*/
let i;
for (i = 0; i <= 9; i++) {
    if (i == 2 || i == 7) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");
for (i = 0; i <= 9; i++) {
    if (i == 1 || i == 3 || i == 7 || i == 9) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");
for (i = 0; i <= 12; i++) {
    if (i == 0 || i == 4 || i == 6 || i == 10) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");

for (i = 0; i <= 9; i++) {
    if (i == 0 || i == 9) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");


for (i = 0; i <= 9; i++) {
    if (i == 1 || i == 8) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");
for (i = 0; i <= 9; i++) {
    if (i == 2 || i == 7) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");
for (i = 0; i <= 9; i++) {
    if (i == 3 || i == 6) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");
for (i = 0; i <= 9; i++) {
    if (i == 4 || i == 5) {
        document.write("*");
    } else {
        document.write("  ");
    }
}
document.write("<br>");