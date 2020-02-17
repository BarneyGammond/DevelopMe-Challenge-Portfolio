//Prints the times tables up to 15 in the terminal

let output = "";

for (i=1 ; i<=15 ; i+=1) {
    for (j=1 ; j<=15 ; j+=1) {
        data = i*j;
        output += `${data} \t`; 
    }
    console.log (output);
    output = "";
}