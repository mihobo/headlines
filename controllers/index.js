var xhr = new XMLHttpRequest();
xhr.onload = function(){
  var output = JSON.parse(this.responseText);
  console.log(output);
  writeToPage(output);
};

xhr.open('GET', 'https://content.guardianapis.com/uk-news?api-key=d15367c8-ed02-4b0a-93dd-ddf225600ef5');
xhr.send();
function writeToPage(output){
  var headlines = output.response.results.length;
  while (headlines > 0)
  {
    document.getElementById("content").innerHTML += output.response.results[headlines -1].webTitle + "<br><br>";
    headlines -= 1;
  };
};
