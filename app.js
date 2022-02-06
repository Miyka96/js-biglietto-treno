const km= prompt ("Inserire il numero di Km da percorrere");
const age= prompt ("Indicare la propria età");
const priceForKm= 0.21;
let priceCalculated= km * priceForKm;
let minorPrice= priceCalculated - (priceCalculated * 20) / 100;
let seniorPrice= priceCalculated - (priceCalculated * 40) / 100;


if (age < 18) {
    document.getElementById("price").innerHTML= parseFloat (priceCalculated - minorPrice) .toFixed (2);
}
else if (age > 65) {
    document.getElementById("price").innerHTML= parseFloat (priceCalculated - seniorPrice) .toFixed (2);
}
else {
    document.getElementById("price").innerHTML= parseFloat (priceCalculated) .toFixed (2);
}