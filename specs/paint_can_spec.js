const assert = require('assert')
const PaintCan = require('../paint_can')

describe('PaintCan', function() {

  let paintcan
  beforeEach(function() {
    paintcan = new PaintCan(50)
  })

  it('should have a number of litres of paint', function() {
    const actual = paintcan.litres
    assert.strictEqual(actual, 50)
  })

  it('should be empty', function() {
    const paintcan = new PaintCan(0)
    const actual = paintcan.checkEmpty()
    assert.strictEqual(actual, true)
  })

  it('should be able to empty itself of paint', function() {
    paintcan.emptyItself()
    const actual = paintcan.litres
    assert.strictEqual(actual, 0)
  })
})
