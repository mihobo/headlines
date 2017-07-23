(function(exports) {
  function HeadlineList(apiResponse) {
    this._headlines = [];
  };

  HeadlineList.prototype.showHeadlines = function () {
    return this._headlines;
  };

  HeadlineList.prototype.createAndStoreHeadline = function (text) {
    var headline = new Headline(text);
    (this._headlines).push(headline);
  };
  
  exports.HeadlineList = HeadlineList;
})(this);
