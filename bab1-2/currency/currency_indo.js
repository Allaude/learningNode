var currency = function(){
this.default = 100;
}
currency.prototype.roundtodecimal = function(number) {
	return Math.round(number * 100)/100;
}
currency.prototype.rupiahToDecimal = function(rupiah,kurs) {
	return this.roundtodecimal(rupiah/kurs);
}
currency.prototype.perkalianSeratus = function (nilai) {
	return this.default * nilai;
}
module.exports = currency;