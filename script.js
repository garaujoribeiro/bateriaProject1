document.body.addEventListener("keydown", (event) => {
  let tecla = document.getElementById(`audio${event.code.toLowerCase()}`);

  if (tecla == null) {
    return;
  }
  if (tecla.ended == false) {
    tecla.load();
  }
  tecla.play();

  document.getElementById(`${event.code.toLowerCase()}`).className =
    "sampleKeypressed";
  setTimeout(() => {
    document.getElementById(`${event.code.toLowerCase()}`).className = "";
  }, 100);
});

function Composição() {
  const Valores = document.getElementById("input").value;
  let ValoresArr = Valores.toLowerCase().split("");
  console.log(ValoresArr);
  let wait = 0;
  for (let i = 0; i < ValoresArr.length; i++) {
    setTimeout(() => {
      let tecla = document.getElementById(`audiokey${ValoresArr[i]}`);
      console.log(tecla);
      if (tecla == null) {
        return;
      }
      if (tecla.ended == false) {
        tecla.load();
      }
      tecla.play();

      document.getElementById(`key${ValoresArr[i]}`).className =
        "sampleKeypressed";
      setTimeout(() => {
        document.getElementById(`key${ValoresArr[i]}`).className = "";
      }, 100);
    }, wait);
    wait += 250;
    console.log(wait);
  }
}

console.log(document.body.addEventListener("keydown", event));
