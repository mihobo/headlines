(function(exports) {
  function Headline(text) {
    this._text = text;
  };

  Headline.prototype.showSingleHeadline = function () {
    return this._text;
  };

  exports.Headline = Headline;
})(this);
