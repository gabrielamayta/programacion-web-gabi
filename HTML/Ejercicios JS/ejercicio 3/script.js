function AgregarElementos() {
  let lista = document.getElementById("lista");
  let input = document.getElementById("textarea").value;
  const elementoLista = document.createElement("li");

  const button = document.createElement("button");
  button.textContent = "delete";

  elementoLista.textContent = input;
  elementoLista.appendChild(button);

  lista.appendChild(elementoLista);

  button.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
