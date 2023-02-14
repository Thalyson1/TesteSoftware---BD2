const request = require("supertest")
const app = require('./server')
const jwt = require('jsonwebtoken');
const Usuario = require("./models/usuario");
const mongoose  = require("mongoose");

describe("post /admin/NewCadastro", ()=>{

    it('tentando criar novo usuario', async ()=>{
        const user ={
            nome: "testando novo metodo de criar",
            email: 'testandometodo@gmail.com',
            senha: '123',
            confirmarSenha: '123'
        };
        return request(app)
            .post("/admin/NewCadastro")
            .send(user)
            .expect(200)
            
    })
})



// describe("post /admin/NewLogin", ()=>{
    
//     it('tentando logar usuario', async ()=>{
//         const usuario = await request(app)
//         .post('/admin/NewLogin')
//         .send(
//             {
//                 email: "jest@gmail.com",
//                 senha: "123"
//                 }
//         ).then((res)=>{
//             jwt.verify(res.body, process.env.SECRET, (err) =>{
//                 expect(err).toBeNull()
//             })
            
//         })
//     })
// })

// describe("post /admin/anotacoes/new", ()=>{


//     it('tentando criar anotacao', async ()=>{

//         const anotacao = await request(app)
//         .post('/admin/anotacoes/new')
//         .send(
//             {
//                 titulo: 'Testando anotacao com jest',
//                 conteudo: 'Testando anotacao com jest'
//                 }
//         )
//         // expect(usuario.headers.authorization(true))
//         expect(200);

      
//         console.log(anotacao.body);
//     })

// })

