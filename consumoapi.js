

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then( data => {
    console.log(data[2].tittle)
    })
.catch((error) => console.log(error))