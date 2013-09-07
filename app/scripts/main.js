(function () {

    var initRate, initYears, initAmount, userInput = [], terms;
    $( document ).ready( function () { 
        $( "#submitBtn" ).click( function () {
            initRate = $( "#initRate" ).val();
            if ( isNaN( initRate ) || initRate === "" ) {
                $( "#initRate" ).addClass( "warning" ).val( "Enter a number" );
            } else {
                userInput[0] = initRate;
                $( "#initRate" ).val( "" );
            }
            initYears = $( "#initYears" ).val();
            if ( isNaN( initYears ) || initYears === "" ) {
                $( "#initYears" ).addClass( "warning" ).val( "Enter a number" );    
            } else {
                userInput[1] = initYears;
                $( "#initYears" ).val( "" );
            }
            initAmount = $( "#initAmount" ).val();
            if ( isNaN( initAmount ) || initAmount === "" ) {
                $( "#initAmount" ).addClass( "warning" ).val( "Enter a number" );
            } else {
                userInput[2] = initAmount;
                $( "#initAmount" ).val( "" );
            }
            terms = new InvestmentTerms( initRate, initYears, initAmount );
            $( "#getMonths" ).text( terms.getMonths() );
            $( "#getTotalInterest" ).text( terms.getTotalInterest() );
            $( "#getYearlyInterest" ).text( terms.getYearlyInterest() );
            $( "#getMonthlyInterest" ).text( terms.getMonthlyInterest() );
            userInput = [];
        });
    });

    var InvestmentTerms = function ( initRate, initYears, initAmount ) {
        this.rate = initRate;
	    this.years = initYears;
        this.amount = initAmount;
        this.getMonths = function () {
            return this.years * 12;
        };
        this.getTotalInterest = function () {
            return parseFloat( this.rate * this.years * this.amount ).toFixed( 2 );
        };
        this.getYearlyInterest = function () {
            var yearlyInterest = ( this.rate * this.amount ) / 12;
            return parseFloat( (yearlyInterest) * 12 ).toFixed( 2 );
        };
        this.getMonthlyInterest = function () {
            var monthlyInterest = ( this.rate * this.amount ) / 1;
            return parseFloat( monthlyInterest / 12 ).toFixed( 2 );
        };
    };

})();