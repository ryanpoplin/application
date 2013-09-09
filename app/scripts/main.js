(function () {

    var initRate, initYears, initAmount, userInput = [], terms;
    $( document ).ready( function () { 
        $( "#submit-btn" ).click( function () {
            initRate = $( "#init-rate" ).val();
            if ( isNaN( initRate ) || initRate === "" ) {
                $( "#init-rate" ).addClass( "warning" ).val( "Please, enter a percentage." );
            } else {
                userInput[0] = initRate;
                $( "#init-rate" ).val( "" );
            }
            initYears = $( "#init-years" ).val();
            if ( isNaN( initYears ) || initYears === "" ) {
                $( "#init-years" ).addClass( "warning" ).val( "Please, enter the years." );    
            } else {
                userInput[1] = initYears;
                $( "#init-years" ).val( "" );
            }
            initAmount = $( "#init-amount" ).val();
            if ( isNaN( initAmount ) || initAmount === "" ) {
                $( "#init-amount" ).addClass( "warning" ).val( "Please, enter the amount." );
            } else {
                userInput[2] = initAmount;
                $( "#init-amount" ).val( "" );
            }
            terms = new InvestmentTerms( initRate, initYears, initAmount );
            if ( isNaN( terms.getMonths() ) ) {
                $( "#get-months" ).text( "Please, fill out the input fields correctly." );
            } else {
                $( "#get-months" ).text( terms.getMonths() );
            }
            if ( isNaN( terms.getTotalInterest() ) ) {
                $( "#get-total-interest" ).text( "Please, fill out the input fields correctly." );
            } else {
                $( "#get-total-interest" ).text( terms.getTotalInterest() );
            }
            if ( isNaN( terms.getYearlyInterest() ) ) {
                $( "#get-yearly-interest" ).text( "Please, fill out the input fields correctly." );
            } else {
                $( "#get-yearly-interest" ).text( terms.getYearlyInterest() );
            }
            if ( isNaN( terms.getMonthlyInterest() ) ) {
                $( "#get-monthly-interest" ).text( "Please, fill out the input fields correctly." );
            } else {
                $( "#get-monthly-interest" ).text( terms.getMonthlyInterest() );
            }
            userInput = [];
        });
    });

    var InvestmentTerms = function ( initRate, initYears, initAmount ) {
        this.rate = initRate / 100;
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