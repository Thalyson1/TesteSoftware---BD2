const { describe } = require('node:test');
require('../models/Anotacao');
const mongoose = require('mongoose');
const anotacao = mongoose.model('notas');
require('dotenv').config();
//const mockingoose = require('mockingoose');

describe("Testando a Anotações", ()=> {

    beforeAll(async() => {
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("MongoDB Conectado")
        }).catch((err)=>{
            console.log("Houve um erro ao se conectar com o banco ", err)
        })
    });


    test('Adicionar anotação.', () => {
        const newAnotacao = {
            titulo: "Uma nova anotacao",
            conteudo: "Um conteudo qualquer"
        }
    
        const result = new anotacao(newAnotacao).save().then(()=>{
            console.log("Anotação salva com sucesso")
        }).catch((err)=>{
            console.log("Erro ao salvar anotação")
        })
        expect(result).toEqual(expect.objectContaining(result));

    });

    test('Excluir anotação', () => {
        const id = 'bh1b2h1hqwh1bhb';
        const result = anotacao.remove({_id: id}).then(()=>{
            console.log("removido com sucesso!");
        }).catch((err)=>{
            console.log("erro ao remover");
        })

        expect(result).toEqual(expect.objectContaining(result));

    })

    test('Buscar Anotação', async() => {
        const busca = 'exemplo';

        const result = await anotacao.find( 
            {$text: { $search: busca}}, 
            {score: { $meta: "textScore" }}
            )
            .sort({ score : { $meta : 'textScore' } }).then((anotacoes)=>{
            //res.render("admin/anotacoes", {anotacoes: anotacoes})
        }).catch((err)=>{
            console.log("error")
        })
        expect(result).toEqual(expect.objectContaining(result));
    })
});

