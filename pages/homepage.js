let homepage = function(){
 let firstnum = element(by.model('first'));
  let secnum = element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));
    this.get =function(url){
        browser.get(url);
    };
    this.firstnum = function(fn){
        firstnum.sendKeys(fn);
    };
     this.secnum = function(sn){  
         secnum.sendKeys(sn);
     };
         this.gobutton = function(){
             gobutton.click();
         };
     
    this.verifyresult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    };
};
module.exports = new homepage();