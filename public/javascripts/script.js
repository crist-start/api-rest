
function actualiza(){
  var cod = document.getElementById("idDino").value;
  if (cod!="") {
    fetch("/users/dinos/"+cod).then((response) => {
      return response.json();
    }).then((dinojson) => {
      var a=document.getElementsByName('dato');
      for (var i = 0; i < a.length; i++) {
        a[i].value=dinojson[a[i].id];
      }
    });
    document.formUpdate.action = "/update/"+cod+"?_method=PATCH";
  }else {
    var a=document.getElementsByName('dato');
    for (var i = 0; i < a.length; i++) {
      a[i].value="";
    }
  }
}

function enableText() {
  var datos=document.getElementsByName('dato');
  for (var i = 0; i < datos.length; i++) {
    if (datos[i].id==document.formUpdate.campo.value) {
      datos[i].disabled=false;
    } else {
      datos[i].disabled=true;
    }
  }
}
