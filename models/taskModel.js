let tasks = [
    {id: 1, descricao: "Comprar pão", finalizado: false},
    {id: 2, descricao: "Comprar manteiga", finalizado: false},
    {id: 3, descricao: "Coquinha gelada", finalizado:true}
];

module.exports = {
    getAll: () => {
        return tasks;
    },
    getById: (id) =>{
        return tasks.find(t => t.id === id);
    },
    create: (task) => {
        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        const newTask = { id: newId, ...task }; 
        tasks.push(newTask);
    },
    update: (id, task) => {
        const index = tasks.findIndex(t => t.id === id);
        if(index !== -1){
            tasks[index] = {...tasks[index], ...task}
        }
        tasks[index] = task;
    },
    delete: (id) => {
        //const index = tasks.findIndex(t => t.id === id);
        tasks = tasks.filter(t => t.id !== id);
    }

}