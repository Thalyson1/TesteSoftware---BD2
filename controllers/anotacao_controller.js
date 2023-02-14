const Anotacao = require('../models/Anotacao')
const mongoose = require('mongoose');
anotacao = mongoose.model('notas')

exports.Mostrar = async(req, res)=>{
    anotacao.find().then((anotacoes)=>{
        res.render("admin/anotacoes", {anotacoes: anotacoes})
    }).catch((err)=>{
        console.log("error") 
        res.redirect('/admin')
    })
}

exports.AdicionarNota = async(req, res)=>{
    const newAnotacao = {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }

    if(newAnotacao.titulo != null && newAnotacao.conteudo != null){
        if(newAnotacao.titulo.length < 20 && newAnotacao.conteudo.length < 50){
            new anotacao(newAnotacao).save().then(()=>{
                res.redirect('/admin/anotacoes')
                console.log("Anotação salva com sucesso")
            }).catch((err)=>{
                console.log("Erro ao salvar anotação")
            })
        }else{
            console.log("Error, comprimentos inválidos")
            res.redirect("/admin/anotacoes")
        }
    }else{
        console.log("Error, titulo e conteudo nulo")
        res.redirect("/admin/anotacoes")
    }
    
}





exports.GetIDNota = async(req, res)=>{
    anotacao.findOne({_id: req.params.id}).then((anotacao)=>{
        res.render("admin/edit_anotacoes", {anotacao: anotacao})
    }).catch((err)=>{
        res.redirect("/admin/anotacoes")
    })
}

exports.EditandoNota = async(req, res)=>{
    anotacao.findOne({_id: req.body.id}).then((anotacao)=>{
        anotacao.titulo = req.body.titulo
        anotacao.conteudo = req.body.conteudo

        anotacao.save().then(()=>{
            console.log("Salvo com sucesso!")
            res.redirect('/admin/anotacoes')
        }).catch((err)=>{
            console.log("Erro na linha 63", err)
        })


    }).catch((err)=>{
        console.log('Erro linha 59', err)
        res.redirect('/admin/anotacoes')
    })
}

exports.DeletarNota = async(req, res)=>{
    anotacao.remove({_id: req.body.id}).then(()=>{
        console.log("removido com sucesso!")
        res.redirect('/admin/anotacoes')
    }).catch((err)=>{
        console.log("erro ao remover")
        res.redirect('/admin/anotacoes')
    })
}

exports.apagarTudo = async(req, res)=>{
    anotacao.remove({}).then(()=>{
        console.log("removido com sucesso!")
        res.redirect('/admin/anotacoes')
    }).catch((err)=>{
        console.log("erro ao remover")
        res.redirect('/admin/anotacoes')
    })
}

exports.BuscarNota = async(req, res)=>{
    const cursor = await anotacao.find( 
        {$text: { $search: req.body.query}}, 
        {score: { $meta: "textScore" }}
        )
        .sort({ score : { $meta : 'textScore' } }).then((anotacoes)=>{
        if(anotacoes.length > 0){
            console.log('anotacoes existentes',anotacoes)
            res.render("admin/anotacoes", {anotacoes: anotacoes})
        }else{
            console.log("Erro, sem anotacoes existentes", anotacoes)
            res.redirect('/admin/anotacoes')
        }
        
    }).catch((err)=>{
        console.log("error") 
        res.redirect('/admin')
    })




}