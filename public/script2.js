
//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(response => response.json())
//.then( data => {
  //  console.log(data)
    //var parrafo = document.getElementById("miparrafo")
  //  parrafo.innerText = data(99).title;
    //})
//.catch((error) => console.log(error))

const { columns } = require("mssql");

const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});

new gridjs.grid({
    columns: [
        { id: "id", name: "ID" },
        { id: "title", name: "Titulo" },
        { id: "body", name: "COntenido" }
        ],
        server: {
            url: "https://jsonplaceholder.typicode.com/post",
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