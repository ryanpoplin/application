var InvestmentTerms = function ( initRate, initYears, initAmount ) {
	this.rate = initRate;
	this.years = initYears;
    this.amount = initAmount;
    this.getMonths = function () {
        return this.years * 12;
    };
    this.getTotalInterest = function () {
        return this.rate * this.years * this.amount;
    };
    this.getYearlyInterest = function () {
        var yearlyInterest = ( this.rate * this.amount ) / 12;
        return parseFloat( (yearlyInterest) * 12 ).toFixed( 2 );
    };
    this.getMonthlyInterest = function () {
        var monthlyInterest = ( this.rate * this.amount ) / 1;
        return parseFloat( monthlyInterest / 12 ).toFixed( 2 );
    };
    this.getDoubleInterest = function () {
        var doubleInterest = this.getTotalInterest();
        return doubleInterest * 2;
    };
};
