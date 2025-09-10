const express = require('express');
const sql = require('mssql');
const app = express();
app.use(express.json());


const config = {
  user: 'GRUPO01',
  password: 'Grupo01',
  server: '10.120.3.250',
  database: 'GRUPO01',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};



app.use(express.static('public'));


app.post('/save-personas', async(req, res)=> {

  const {Nombre, Apellido,  dni, email, FechaNacimiento, operacion} = req.body;
  //const {Apellido, Nombre, DNI, Email, FechaNacimiento} = req.body;
  try{
        await sql.connect(config);
        const request = new sql.Request();
        request.input('Nombre', sql.VarChar, Nombre);
        request.input('Apellido', sql.VarChar, Apellido);
        request.input('dni', sql.VarChar, dni);
        request.input('email', sql.VarChar, email);
        request.input('FechaNacimiento', sql.VarChar, FechaNacimiento);
        request.input('operacion', sql.VarChar, operacion);
        const result = await request.query(
          'INSERT INTO Personas ( Nombre, Apellido, DNI, Email, FechaNacimiento, Operacion) VALUES (@Nombre, @Apellido, @dni,  @email, @FechaNacimiento, @operacion)'
        );
        console.log(result);
        res.send('Datos guardados exitosamente! ');
       

  }catch(err){
        console.error('Error al guardar los datos:', err);
        res.status(500).send('Hubo un error al guardar los datos.');
  }finally{
        sql.close();
  }
});
//app.use(cors()); // Permite todas las solicitudes desde cualquier origen

app.get('/api/datos', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Dias');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/personas', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Personas');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/usuarios", async (req, res) =>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    res.json(data); //uso res.json() para enviar la respuesta json
} catch (err) {
  res.status(500).send(err.message);
}
})
  




app.listen(4000, () => console.log('Servidor corriendo en puerto 4000'));