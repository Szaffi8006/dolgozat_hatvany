function hatvanyoz(szamok, hatvany) {
    if (!Array.isArray(szamok) || typeof hatvany !== 'number') {
        return [];
    }

    var eredmeny = szamok.map(function(szam) {
        return Math.pow(szam, hatvany);
    });

    return eredmeny;
}

function calculatePower() {
    var szamokInput = document.getElementById("numbers").value;
    var szamok = szamokInput.split(',').map(Number);

    var hatvany = parseInt(document.getElementById("exponent").value);

    var eredmeny = hatvanyoz(szamok, hatvany);

    document.getElementById("result").textContent = "Hatványérték: " + eredmeny.join(', ');
}
