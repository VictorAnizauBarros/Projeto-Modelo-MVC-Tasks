const tasks = require('../models/taskModel');

module.exports = {
    page: (req, res) => {
        res.render('task', { model: tasks.getAll()})
    },
    getAll: (req, res) => {
        res.json(tasks.getAll());
    },
    getById: (req, res) =>{
        const id = parseInt(req.params.id);
        res.json(tasks.getById(id));
    },
    create: (req, res) => {
        tasks.create(req.body);
        res.send("Task criada com sucesso");
    },
    createForm: (req,res)=>{
        res.render('createTask'); 
    }, 
    updateForm: (req,res)=>{
        const id = parseInt(req.params.id);
        const task = tasks.getById(id);
        if(!task){
            return res.status(404).send("Tarefa não encontrada");
        }
        res.render('updateTask',{task});
    },
    update: (req, res) => {
        const id = parseInt(req.params.id);
        const updateTask = {...req.body, id};
        tasks.update(id, updateTask);
        res.send("Task atualizada com sucesso");
    },
    deleteForm: (req, res) => {
        const id = parseInt(req.params.id);
        const task = tasks.getById(id);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada');
        }
        res.render('deleteTask', { task });
    },
    delete: (req, res) => {
        const id = parseInt(req.params.id);
        tasks.delete(id);
        res.send("Task deletada com sucesso");
    },
    searchById: (req, res) => {
        const id = parseInt(req.query.id);
        const task = tasks.getById(id);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada');
        }
        res.render('task', { model: [task] });
    }

}