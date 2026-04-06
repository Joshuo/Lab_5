function cargarPerros() {
  fetch("https://dog.ceo/api/breeds/list/all")  /*el fetch hace conexión con el api para recibir sus datos*/
    .then(res => res.json())                    /*este funciona para mostar el resultado exitoso de lo que trae el fetch*/
    .then(data => {                             /*convirtiendo el objeto en json*/
      const contenedor = document.getElementById("contenedor");
      contenedor.innerHTML = "";

      const razas = data.message;               /*se accede para saber donde están las razas */

      for (let raza in razas) {                 /*se recoren las razas*/
        const subrazas = razas[raza];

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${raza}</h3>
          <p>Subrazas: ${subrazas.length}</p>
          <p>${subrazas.join(", ") || "No tiene subrazas"}</p>
        `;

        contenedor.appendChild(card);
      }
    })
    .catch(error => console.log(error));
}