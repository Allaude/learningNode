var Currency = require('./currency_module');
var kurs = require('./currency_indo');
var kursRupiah = 13000;
var canadianDollar = 0.91;
var currency = new Currency(canadianDollar);
var kurietas = new kurs();
console.log("canadian to US => "+currency.canadianToUS(50));
console.log("US to canadian => "+currency.UStocanadian(50));
console.log("Rupiah to Dollar => "+kurietas.rupiahToDecimal(13000,13000));
console.log("Perkalian Seratus dengan 0.91 adalah " + kurietas.perkalianSeratus(canadianDollar));