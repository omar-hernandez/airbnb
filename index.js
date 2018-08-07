// const express = require('express')   esto ya no es requerido

import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.send('Server on')
});

app.listen(3000, ()=> console.log('server on 3000'));



