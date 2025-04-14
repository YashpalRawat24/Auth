function printStar() {

    const rows = document.getElementById("rows").value;

    let result = '';
    for (i = 1; i <= rows; i++) {

        let row = " ";

        for (j = 1; j <= i; j++) {

            row = row + " *";
        }
        // console.log(row);
        result += row + '<br>';
    }
    for (i = rows; i >= 1; i--) {

        let row = "";
        for (j = 1; j <= i; j++) {

            row = row + "*"
        }

        result += row + '<br>'
    }


    document.getElementById("result").innerHTML = result;
}

function clearIt(){
    document.getElementById("rows").value = "";
    document.getElementById("result").innerHTML = "";
}