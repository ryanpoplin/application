/* global describe, it */
'use strict';
(function () {
    describe('InvestmentTerms constructor function', function () {
        describe('takes in parameters and provides calculations', function () {
            
            var terms = new InvestmentTerms( 0.08, 10, 100000 );

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