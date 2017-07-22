it("initializes with a headline", function() {
  var headline = new Headline();
  assertIsNull(headline.showSingleHeadline());
});

it("shows the the whole text of the headline", function() {
  var headlineText = "Florida woman calls 911 after McDonalds runs out of McNuggets";
  var headline = new Headline(headlineText);
  console.log(headline.showSingleHeadline());
  assertEquals(headline.showSingleHeadline(), headlineText);
});
