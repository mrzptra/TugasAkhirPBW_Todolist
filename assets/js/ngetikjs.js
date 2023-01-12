  var i=0;
  var tulisan;
  tulisan = "To-dolist is a simple and beautiful website. with this website you can save to-do, edit the to-do and list everything. Try it now!!"

  function ngetiksendiri() {
    if(i<tulisan.length){
      document.getElementById("text").innerHTML += tulisan.charAt(i);
      i++;
      setTimeout(ngetiksendiri,80);
    }
  }
  ngetiksendiri();
