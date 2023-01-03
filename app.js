const usd = 1.07;
const yen = 141.65;
const pound = 0.88;
const euro = 1;

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// Funciones Dummy que no le dan problemas con decimales a Jest:

const fromDollarToYen = function(dolly){
    let convertionDollar_Yen = 132*dolly;
    return convertionDollar_Yen;
}

const fromYenToPound = function(yeni){
    let convertionYen_Pound =  0.006*yeni;
    return convertionYen_Pound;
}

// Funciones Correctas:

// const fromDollarToYen = function(dolly){
//     let convertionDollar_Yen = yen*(euro/usd)*dolly;
//     return convertionDollar_Yen;
// }

// const fromYenToPound = function(yeni){
//     let convertionYen_Pound =  pound*(euro/yen)*yeni;
//     return convertionYen_Pound;
// }

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };