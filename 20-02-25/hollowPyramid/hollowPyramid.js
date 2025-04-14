
function printStar() {
    const rows = parseInt(document.getElementById("rows").value)

    let result = '';


    for (i = 1; i <= rows; i++) {

        result += ' '.repeat(rows - i);

        for(k=1;k<=(2 * i - 1);k++){
            if(i === 1 || i === (2 * i - 1) || i=== rows){
                result += "*";
            }
            else{
                result += " ";
            }
        }
  result +=  '\n';
  

    }

    document.getElementById("result").textContent = result;
}