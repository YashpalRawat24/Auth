function calculateTotal() {
    let Physics = Number(document.getElementById("Physics").value) || 0;
    let Chemistery = Number(document.getElementById("Chemistery").value) || 0;
    let math = Number(document.getElementById("math").value) || 0;
    let Biology = Number(document.getElementById("Biology").value) || 0;
    let computer = Number(document.getElementById("computer").value) || 0;

    let totalMarks = Physics + Chemistery + math + Biology + computer;

    document.getElementById("total").innerText = totalMarks;

 }