new gridjs.Grid({
    columns: [
        { id: "PersonaID", name: "IdPersona" },
        { id: "Apellido", name: "Apellido" },
        { id: "Nombre", name: "Nombre"},
        { id: "DNI", name: "DNI" },
        { id: "Email", name: "email" },
        { id: "FechaNacimiento", name: "FechaNacimiento"},
        { 
          id: "operacion", 
          name: "operacion",
          // Aquí se agrega el 'formatter' para crear un enlace
          formatter: (cell, row) =>  {
            const PersonaID = row.cell[0].data;
            return gridjs.html('<a href="./modificardatos.html?parametro=${PersonaID}">texto</a>')

            /*
            const variable = row.cell[0].data;
            return gridjs.html(`<a href="./modificardatos.html?parametro=${variable}">texto</a>`)
            
            */
          }, 
        }
    ],
    sort: true,
    server: {
        url: "http://localhost:4000/api/personas",
        // Esta línea se mantiene para que los datos se procesen correctamente
        then: data => data.map(post => [post.PersonaID, post.Apellido, post.Nombre, post.DNI, post.Email, post.FechaNacimiento, 'hola'])
    },
    pagination: true,
    search: true,
    language: {
        "search": "buscar...",
        "pagination": {
            "previous": "anterior",
            "next": "siguiente",
            "of": "de",
            "results": "resultados",
            "to": "a"
        }
    }
}).render(document.getElementById("wrapper"));