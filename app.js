const app = require('./server')

//Outer
app.listen(3000, ()=>{
    console.log("Servidor rodando: http://localhost:3000/admin/anotacoes");
})