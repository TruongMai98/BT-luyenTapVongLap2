
/*for(i=0;i<N;i++) {
		//tao hang (row) *
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}

		//xuong dong khi hien thi ket qua cua tung hang
		document.writeln("<br/>")
	}
}*/
let i;

let k;
let j;
for (i = 0; i <= 5; i++){
    for (j=0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
}
for (i=0; i<=5; i++){
    for (j=5;j>i;j--){
        document.write("+");
    }
    document.write("<br>");
}
for (i = 0; i <=5; i++){
    for (j=5;j>i;j--){
        document.write(" ");
    }
    for (k=-1;k<i-1; k++){
        document.write("*");
    }
    document.write("<br>");
}
for (i=1; i<=5; i++){
    for (j=1;j<i;j++){
        document.write(" ");
    }
    for (k=5;k+1>i; k--){
        document.write("+");
    }
    document.write("<br>");
}