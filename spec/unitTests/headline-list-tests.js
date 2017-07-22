var headlineList = new HeadlineList();

it("is initialized with an empty array", function() {
  assertEquals(headlineList.showHeadlines().length, 0);
});

it("creates and stores a new single headline", function() {
  var headlineText = "Man ate stolen ice cream sandwich he kept in his pants"
  headlineList.createAndStoreHeadline(headlineText);
  var stored = headlineList.showHeadlines()[0].showSingleHeadline();
  console.log(stored)
  assertEquals(stored, headlineText);
});
