//write a program to print the fibbonaci series.
function fibbonaci(number,n1,n2){
    let nterms;
    for(let i=1;i<=number;i++){
        console.log(n1);
        nterms = n1+n2;
        n1 = n2;
        n2 = nterms;
    }
    }
    fibbonaci(5,0,1);