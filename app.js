const km= prompt ("Inserire il numero di Km da percorrere");
const age= prompt ("Indicare la propria età");
const priceForKm= 0.21;
let priceCalculated= km * priceForKm;

document.getElementById("price").innerHTML= (priceCalculated);

if (age < 18) {
    document.getElementById("price").innerHTML= priceCalculated= priceCalculated - (priceCalculated * 20) / 100
}
else if (age > 65) {
    document.getElementById("price").innerHTML= priceCalculated= priceCalculated - (priceCalculated * 40) / 100
}
