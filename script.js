
function entrar(){

  let dia = document.getElementById("dia").value;

  let mes = document.getElementById("mes").value;

  let ano = document.getElementById("ano").value;

  if(
    dia == "11" &&
    mes == "01" &&
    ano == "2025"
  ){

    document.getElementById("login").style.display = "none";

    document.getElementById("site").style.display = "block";

  }else{

    alert("Data incorreta ❤️");

  }

}