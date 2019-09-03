const assert = require('assert')
const Room = require('../room')

describe('Room', function() {

  let room
  beforeEach(function() {
    room = new Room(40, false)
  })

  it('should have an area in square meters', function() {
    const actual = room.area
    assert.strictEqual(actual, 40)
  })

  it('should start not painted', function() {
    const actual = room.isPainted
    assert.strictEqual(actual, false)
  })

  // it('should be able to be painted', function() {
  //   room.addPaint(20)
  //   const actual = room.paintedLevel
  //   assert.strictEqual(actual, 20)
  // })
})
