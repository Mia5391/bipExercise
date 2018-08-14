const assert = require('chai').assert;
global.window = global;
require('../src/app');

describe ('Validate Email Format',()=>{
  it('should have only one @',()=>{
    assert.equal(validateEmailAndPassword("ab@cd.com"),true);
    assert.equal(validateEmailAndPassword("ab@@cd.com"),false);
    assert.equal(validateEmailAndPassword("abcd.com"),false);
  });
  it('should have the @ before the domain',()=>{
    assert.equal(validateEmailAndPassword(".com@abc"), false);
    assert.equal(validateEmailAndPassword("mia@gmail.com"),true);

  });
describe('validateEmailAndPassword()', ()=>{
  it('should not have special characters', ()=>{
    assert.equal(validateEmailAndPassword("#?¿@abc.com"), false);
  });

describe('password should be numerical', ()=>{
  it('should not have letters', ()=>{
    assert.equal(validateEmailAndPassword("a123"), false);
    assert.equal(validateEmailAndPassword("123"), true);

  });
  it('should not be longer than 8 digits',()=>{
    assert.equal(validateEmailAndPassword("123"), true);
    assert.equal(validateEmailAndPassword("123456789"), false);
  })
});


});

)};
