window.addEventListener("load", init);

function init() {
  const tartalomElem = document.getElementById("tartalom");
  console.log(tartalomElem);
  const tartalomElemek = document.getElementsByClassName("kepek");
  console.log(tartalomElemek);
  //const tartalomElemMaskepp = document.querySelector("#tartalom");
  // const tartalomElemMaskepp2 = document.querySelector(".tart");
  //const tartalomElemMaskepp3 = document.getElementsByClassName("tart");
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
  etelkepek(tartalomElemek);
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
function etelkepek(tartalomElemek) {
  let kepekLista = ["fnjdk", "fnjdk", "fnjdk", "fnjdk"];
  for (let index = 0; index < kepekLista.length; index++) {
    let img = document.createElement("img");
    img.src =
      "https://receptexpressz.hu/wp-content/uploads/2017/02/party-etel-kaja-leveles-tesza-virsli-rolad2-e1487848253564.jpg";
    tartalomElemek[0].appendChild(img);
    console.log(tartalomElemek);
  }
}
