var xhr = new XMLHttpRequest();
xhr.onload = function(){
  var output = JSON.stringify(this.responseText);
  writeToPage(output);
};
// xhr.open('GET', 'https://content.guardianapis.com/search?api-key=d15367c8-ed02-4b0a-93dd-ddf225600ef5');
xhr.open('GET', 'https://content.guardianapis.com/search?q="harry%20potter"&api-key=d15367c8-ed02-4b0a-93dd-ddf225600ef5');
xhr.send();
function writeToPage(output){
  document.getElementById("content").innerHTML = output;
};
