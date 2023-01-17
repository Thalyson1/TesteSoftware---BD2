require('dotenv').config();

//arquivo responsavel por realizar a conexao com o banco MongoDB
const { MongoClient } = require('mongodb');

//URI
const uri = `mongodb://${process.env.HOSTNAME_IP}`;

const client = new MongoClient(uri);

//busca todos
async function run() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const anotacoes = db.collection(process.env.COLLECTION_NAME);

        const resposta = await anotacoes.find().toArray();
        resposta.forEach(result => {
            console.log(result);
        })
    } finally {
        await client.close();
    }
}

//busca por texto
async function search() {
    try {
        await client.connect();
        const db = client.db('banco-deAnotacoes');
        const anotacoes = db.collection('Anotacoes');

        const resposta = await anotacoes.find({ $text: { $search: "segunda" } }).toArray();
        resposta.forEach(result => {
            console.log(result);
        })
    } finally {
        await client.close();
    }
}

search();