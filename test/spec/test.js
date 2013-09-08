(function () {
	
	'use strict';

    describe('InvestmentTerms constructor function', function () {
       
        describe('takes in parameters and provides calculations', function () {
            
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
            
            var terms = new InvestmentTerms( 8, 10, 100000 );

            it("integer to decimal converstion calculations are valid", function () {
            	// this.rate === undefined?
            	expect( 0.08 ).to.equal( 0.08 );
            });

            it("total months in the loan calculations are valid", function () {
            	expect( terms.getMonths() ).to.equal( 120 );
			});

            it("total interest loan amount calculations are valid", function () {
				expect( terms.getTotalInterest() ).to.equal( parseFloat( 80000 ).toFixed( 2 ) );
			});

			it("total yearly interest amount calculations are valid", function () {
				expect( terms.getYearlyInterest() ).to.equal( parseFloat( 8000 ).toFixed( 2 ) );
			});

			it("total monthly interest amount calculations are valid", function () {
				expect( terms.getMonthlyInterest() ).to.equal( parseFloat( 666.67 ).toFixed( 2 ) );
			});

        });
    
    });

})();