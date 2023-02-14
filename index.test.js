const request = require("supertest")
const app = require('./server')
const jwt = require('jsonwebtoken');
const Anotacao = require('./models/Anotacao')
const mongoose = require('mongoose');
anotacao = mongoose.model('notas')


describe("TRABALHANDO COM ANOTAÇÕES 'JEST' ", ()=>{

    it.skip('tentando criar nova anotação', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JEST',
            conteudo: 'Testando JEST'
        })
        .expect(200)
        
    })


    it.skip('mostrando todas as anotacoes', async ()=>{
        const anotacao = await request(app)
        .get('/admin/anotacoes').then((res)=>{
            //console.log(res)
        })
        .expect(200)
    })


    it.skip('tentando atualizar anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/edit')
        .send({
            id: '63eb427abf01bdb3e2f42072',
            titulo: 'JEST JEST',
            conteudo: 'JEST JEST JEST JEST'
        })
        ///sem funcionar
    })

    it.skip('tentando apagar anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/deletar')
        .send({
            id: '63eb3726ed6ce00d9b18edbe'
        })

    })

    it.skip('tentando buscar anotação textScore', async ()=>{

        await request(app)
        .post('/admin/anotacoes/buscaTextual')
        .send({
            query: 'UNICO'
        }).then(res=>{
            console.log(res)
        })

    })

    it.skip('tentando criar nova anotação', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JEST com peso 2',
            weights: 2,
            conteudo: 'Testando JEST conteudo 1',
            weights:1
        })
        .expect(302)
        
    })

    it('tentando apagar todas as anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/deletarTudo')

    })

})


