
let homepage = require('../pages/homepage');
describe("demo calculator", function() {
    it("addition test", function() {
     //.get('http://juliemr.github.io/protractor-demo/');
     homepage.get('http://juliemr.github.io/protractor-demo/');
     //element(by.model('first')).sendKeys('2');
    homepage.firstnum('3');
        // element(by.model('second')).sendKeys('4');
         homepage.secnum('5');
     //element(by.css('[ng-click="doAddition()"]')).click();
     homepage.gobutton();
     //let result = element(by.cssContainingText('.ng-binding','6'));
     //expect(result.getText()).toEqual('6');
     homepage.verifyresult('8');
     browser.sleep(2000);
      
    });
    
  });
  

  