

new gridjs.Grid({
    columns: [
        { id: "id", name: "ID" },
        { id: "title", name: "Titulo" },
        { id: "body", name: "Contenido" }
        ],
      
        sort: true,
        server: {
            url: "https://jsonplaceholder.typicode.com/posts",
            then: data => data.map(post => [post.id, post.title, post.body])
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