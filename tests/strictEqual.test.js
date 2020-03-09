const describe = require('mocha').describe
const it  = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')

describe('strictEqual', () => {
    describe('isEqual', () => {
        it('returns true if values provided are same and are of the same type',() => {
            // create test data

            const valueOne = '5'
            const valueTwo = '5'



            // call the function with the test data

            const Return = strictEqual(valueOne,valueTwo)

            //make assertions about what should be true

            expect(Return).to.equal(true) 
        })
        it('returns true if values provided are different and are of  the same type',() => {
            // create test data

            const valueOne = 'a'
            const valueTwo = '5'



            // call the function with the test data

            const Return = strictEqual(valueOne,valueTwo)

            //make assertions about what should be true

            expect(Return).to.equal(true) 
        })
        it('returns false if values provided are same and are of diffrent type',() => {
            // create test data

            const valueOne = 5
            const valueTwo = '5'



            // call the function with the test data

            const Return = strictEqual(valueOne,valueTwo)

            //make assertions about what should be true

            expect(Return).to.equal(false) 
        })

        it('returns false if values provided are different  and are of the different type',() => {
            // create test data

            const valueOne = 'a'
            const valueTwo =  5



            // call the function with the test data

            const Return = strictEqual(valueOne,valueTwo)

            //make assertions about what should be true

            expect(Return).to.equal(false) 
        })



    })

}) 




