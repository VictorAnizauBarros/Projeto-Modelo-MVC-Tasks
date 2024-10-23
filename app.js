const express = require('express');
const bodyParser = require('body-parser');

const host = express();

host.use(bodyParser.json());
host.use(bodyParser.urlencoded({extended: true}));

//definir configurações para o nosso host
host.set('view engine','ejs');

//controller
const taskController = require('./controllers/taskController');

//rotas http
host.get('/task/:id',taskController.getById);
host.get('/', taskController.page);
host.get('/create', taskController.createForm);
host.post('/task', taskController.create);
host.get('/update/:id',taskController.updateForm);
host.post('/update/:id',taskController.update);
host.get('/delete/:id', taskController.deleteForm); 
host.post('/delete/:id', taskController.delete); 
host.get('/tasks/search', taskController.searchById);
host.listen('3000',() => {
    console.log("Servidor rodando ...");
});