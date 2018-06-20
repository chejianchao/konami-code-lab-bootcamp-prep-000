const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
<<<<<<< HEAD
  var index = 0;
  document.body.addEventListener('keydown', function(e) {
    var len = codes.length
    if( codes[index%len] == e.key ){
      if( index%len == len-1)
        alert(e.key)
      index++;
    }else
      index = 0;
    
=======
  document.body.addEventListener('keydown', function(e) {
    console.log(e.key)
    if( codes.indexOf(e.key)>=0)
      alert(e.key)
>>>>>>> 9d470d3b37ffb176962dc6279841ea136fe4f541
  })
}
