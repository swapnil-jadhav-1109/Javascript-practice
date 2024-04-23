let n =5;
for (i = n; i > 0; i--) {
    let str = "";
    for (j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}