window.addEventListener("load", init);

function init() {
  const tartalomElem = document.getElementById("tartalom");
  console.log(tartalomElem);
  const tartalomElemek = document.getElementsByClassName("kepek");
  const tartalomElemMaskepp = document.querySelector("#tartalom");
  const tartalomElemMaskepp2 = document.querySelector(".tart");
  const tartalomElemMaskepp3 = document.getElementsByClassName("tart");
  const tartalomElemEz = document.querySelectorAll(".tart");
  console.log(tartalomElemEz);
  console.log(tartalomElemEz[1]);

  // tartalomElemEz[1].innerHTML="<p>"+szoveg+"</p>"
  //tartalomElemEz[1].innerHTML+=`<p>${szoveg}</p>`
  //tartalomElemEz[1].innerHTML+="<p>"+szoveg+"</p>"
  // tartalomElemEz[1].innerHTML+="<p>"+szoveg+"</p>"
  // tartalomElemEz[1].innerHTML+="<p>"+szoveg+"</p>"

  let lista = ["pizza", "csoki", "nemtudom", "valami"];
  etelek(lista, tartalomElemEz);
  etelekepek( tartalomElemek);
  /**készits egy listat a kedvenc eteleid nevevel */
  /**ird ki a tartalom divbe felsoroloásba*/
}
function etelek(lista, tartalomElemEz) {
  let szoveg = "hello";
  szoveg += "<ul>";
  for (let index = 0; index < lista.length; index++) {
    szoveg += "<li>" + lista[index] + "</li>";
  }
  szoveg += "</ul>";
  tartalomElemEz[0].innerHTML = szoveg;
}
function etelekepek( tartalomElemek) {
  var img = document.createElement("img");
  img.src =
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D329579847426939&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fkajapara1%2F%3Flocale%3Dhu_HU&tbnid=n_DYiguqL05inM&vet=12ahUKEwjEnaz6jq79AhVqg_0HHfHUAeYQMygaegUIARD3AQ..i&docid=kLLxlGVTSJBN5M&w=640&h=640&q=kaja%20kepek&ved=2ahUKEwjEnaz6jq79AhVqg_0HHfHUAeYQMygaegUIARD3AQ";
  for (let index = 0; index++;) {
    tartalomElemek.appendChild(img);
    console.log(img);
  }
}
