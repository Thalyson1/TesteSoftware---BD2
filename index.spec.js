const { describe, it } = require("node:test")
const request = require("supertest")
const app = require ('./app.js')

describe('Testando app server', ()=>{
    it('Tentando criar novo usuario', ()=>{
        const res = await request(app)
        .
    })
})
