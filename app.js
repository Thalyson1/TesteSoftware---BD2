const app = require('./server')

//Outer
app.listen(3333, ()=>{
    console.log("Servidor rodando: http://localhost:3333/admin/anotacoes");
})