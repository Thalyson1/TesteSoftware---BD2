const request = require("supertest")
const app = require('./server')
const Anotacao = require('./models/Anotacao')
const mongoose = require('mongoose');
anotacao = mongoose.model('notas')


describe("TRABALHANDO COM ANOTAÇÕES 'JEST' ", ()=>{

    it.skip('criar anotação', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JEST',
            conteudo: 'Testando JEST'
        })
        
    })


    it.skip('mostrando todas as anotacoes', async ()=>{
        const anotacao = await request(app)
        .get('/admin/anotacoes').then((res)=>{
            //console.log(res)
        })
    })

    it.skip('tentando atualizar anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/edit')
        .send({
            id: '63eb499b379b8659818968de',
            titulo: 'JEST JEST',
            conteudo: 'JEST JEST JEST JEST'
        })

    })

    it.skip('tentando apagar anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/deletar')
        .send({
            id: '63ebb338b1b14f3dca6e4001'
        })

    })

    it.skip('tentando buscar anotação textScore', async ()=>{

        await request(app)
        .post('/admin/anotacoes/buscaTextual')
        .send({
            query: 'JEST'
        })

    })

    it.skip('Falha busca textual', async ()=>{

        await request(app)
        .post('/admin/anotacoes/buscaTextual')
        .send({
            query: 'pi'
        })

    })

    it.skip('tentando criar index', async ()=>{
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

    it.skip('tentando apagar todas as anotação', async ()=>{

        await request(app)
        .post('/admin/anotacoes/deletarTUDO')
    })

    it.skip('anotação sem o campo titulo', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            conteudo: 'Testando JEST SEM TITULO'
        })
        .expect(302)
        
    })
    it.skip('anotação sem o campo conteudo', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JEST SEM CONTEUDO'
        })
        .expect(302)
        
    })

    it.skip('anotação vazia', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({

        })
        .expect(302)
        
    })

    it.skip('campo de busca vazio', async ()=>{

        await request(app)
        .post('/admin/anotacoes/buscaTextual')
        .send({
            query: ''
        }).then(res=>{
            console.log(res)
        })

    })

    it.skip('criar nova anotação com titulo.lenght  < 20', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JESTeeeeeeee',
            conteudo: 'Testando JEST'
        })
        
        
    })

    it.skip('criar nova anotação com caracteres especiais', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'T&$t@ndo',
            conteudo: 'T&$t@ndo JEST'
        })
        
        
    })

    it.skip('Editar uma anotação mudando apenas o conteúdo', async ()=>{

        await request(app)
        .post('/admin/anotacoes/edit')
        .send({
            id: '63eb499e379b8659818968e1',
            titulo: 'teste2',
            conteudo: 'JEST JEST JEST JEST'
        })

    })

    it.skip('Editar uma anotação mudando apenas o titulo', async ()=>{

        await request(app)
        .post('/admin/anotacoes/edit')
        .send({
            id: '63eb49a2379b8659818968e4',
            titulo: 'JEST JEST JEST JEST',
            conteudo: 'teste3'
        })

    })

    it.skip('Pesquisar anotação por titulo e conteudo inexistente', async ()=>{
        await request(app)
        .post('/admin/anotacoes/buscaTextual')
        .send({
            query: 'TITULO INEXISTENTE'
        }).then(res=>{
            console.log(res)
        })

    })

    it.skip('mostrando todas as anotacoes em ordem alfabetica', async ()=>{
        const anotacao = await request(app)
        .get('/admin/anotacoes').then((res)=>{
            //console.log(res)
        })
        .expect(200)
    })

    it.skip('criar nova anotação com conteudo.lenght  < 50', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'Testando JEST',
            conteudo: 'Jest é uma ferramenta de automação de testes utilizado por desenvolvedores para realizar seus testes :D'
        })
        
        
    })

    it.skip('Adicionar anotão com mesmo título de uma nota existente', async ()=>{
        const anotacao = await request(app)
        .post('/admin/anotacoes/new')
        .send({
            titulo: 'teste',
            conteudo: 'teste'
        })
        
    })

    it.skip('Editar uma anotação que contenha caracteres especiais', async ()=>{

        await request(app)
        .post('/admin/anotacoes/edit')
        .send({
            id: '63eb6bf2b0ac7431f80f6f47',
            titulo: 'te@423ste#$¨¨%¨&',
            conteudo: 'te@423ste#$¨¨%¨&'
        })

    })
})


