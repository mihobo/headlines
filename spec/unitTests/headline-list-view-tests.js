it("is initialized with the headlines list", function () {
  var headlineList = new HeadlineList();
  var headlineListView = new HeadlineListView(headlineList);
  assertIsNull(headlineListView.headlineList);
});
