/*Carga desde el JSON local*/
async function cargarPokemonLocales() {
    const contenedor = document.getElementById('local-list');
    try {
        const respuesta = await fetch('./pokemon_local.json');
        const datos = await respuesta.json();

        datos.forEach(p => {
            const div = document.createElement('div');
            div.className = 'pokemon-item';
            div.innerHTML = `
                <strong>${p.nombre}</strong><br>
                <small>Tipo: ${p.tipo} | ${p.descripcion}</small>
            `;
            contenedor.appendChild(div);
        });
    } catch (error) {
        contenedor.innerHTML = "<p>Error: Ejecuta esto en un servidor local para leer el JSON.</p>";
    }
}

/*Carga desde el API*/
async function cargarPokeApi() {
    const contenedor = document.getElementById('api-list');
    const API_URL = 'https://pokeapi.co/api/v2/generation/1/';

    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();

        // La PokéAPI devuelve la región y una lista de especies
        const region = datos.main_region.name.toUpperCase();
        const especies = datos.pokemon_species.slice(0, 4); // Solo tomamos 4 para no saturar

        let html = `<p><strong>Región:</strong> ${region}</p>`;
        
        especies.forEach(esp => {
            html += `
                <div class="pokemon-item" style="border-left-color: #ef5350">
                    <strong>Oficial: ${esp.name.toUpperCase()}</strong><br>
                    <small>Fuente: pokeapi.co</small>
                </div>
            `;
        });

        contenedor.innerHTML = html;

    } catch (error) {
        contenedor.innerHTML = "<p>Error al conectar con PokéAPI.</p>";
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarPokemonLocales();
    cargarPokeApi();
});