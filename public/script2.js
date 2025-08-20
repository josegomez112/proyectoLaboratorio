

new gridjs.Grid({
    columns: [
        { id: "IdDia", name: "idDia" },
        { id: "CodigoDia", name: "codigoDia" },
        { id: "DescripcionDia", name: "descripcionDia" }
        ],
      
        sort: true,
        server: {
            url: "http://localhost:4000/api/datos",
            then: data => data.map(post => [post.Iddia, post.CodigoDia, post.DescripcionDia])
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