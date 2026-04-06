const cargarEstudiantes = () => {
    // 1. Fetch solicita el archivo JSON
    fetch('estudiantes.json')
        .then(respuesta => {
            // Verifica si la respuesta fue exitosa (status 200)
            if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
            return respuesta.json(); // Convierte el texto plano a un Objeto JS
        })
        .then(estudiantes => {
            // 2. Procesamos los datos una vez convertidos
            const tabla = document.getElementById('cuerpo-tabla');
            
            // 3. Recorremos el arreglo de objetos
            estudiantes.forEach(est => {
                const fila = document.createElement('tr');

                // Insertamos las celdas (td)
                fila.innerHTML = `
                    <td>${est.id}</td>
                    <td><strong>${est.nombre}</strong></td>
                    <td>${est.apellido}</td>
                    <td>${est.edad}</td>
                    <td>${est.estado_civil}</td>
                `;
                tabla.appendChild(fila);
            });
        })
        .catch(error => console.error("Hubo un error:", error));
};

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarEstudiantes);