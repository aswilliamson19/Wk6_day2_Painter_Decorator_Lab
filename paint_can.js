const PaintCan = function(litres){
  this.litres = litres
}

PaintCan.prototype.checkEmpty = function (litres) {
  if (this.litres === 0) return true
};

PaintCan.prototype.emptyItself = function () {

}

module.exports = PaintCan
