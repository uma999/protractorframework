let homepage = require('../pages/homepage');
describe("demo calculator", function () {
    it("addition test", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.firstnum('3');

        homepage.secnum('5');

        homepage.gobutton();

        homepage.verifyresult('8');
        browser.sleep(2000);

    });
   it("substract test", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.firstnum('35');

        homepage.secnum('5');

        homepage.gobutton();

        homepage.verifyresult('10');
        browser.sleep(2000);


});
});
