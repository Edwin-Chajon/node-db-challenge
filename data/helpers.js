const db = require('./dbConfig');

module.exports = {
    findProjects,
    findProjectsById,
    addProjects,
    findResources,
    addTask,
    findTasks,
    findTasksById,
    findResources,
    findResourcesById,
    addResource,
    find
}

//find
function findProjects(){
    return db('projects')
}



function findResources(){
    return db('resources')
}

//find by ID
function findProjectsById(id){
    return db('projects')
        .where({id})
        .first();
}

function findTasksById(id){
    return db('tasks')
        .where({id})
        .first();
}

function findResourcesById(id){
    return db('resources')
        .where({id})
        .first();
}

// add
function addProjects(data) {
    return db("projects")
      .insert(data)
      .then(([id]) => {
        return findById(id);
      });
}

function addTask(data) {
    return db("tasks")
      .insert(data)
      .then(([id]) => {
        return findById(id);
      });
}

function addResource(data) {
    return db("resources")
      .insert(data)
      .then(([id]) => {
        return findById(id);
      });
}

function findById(id) {
    return db("tasks")
      .where({ id })
      .first();
}

function findTasks(project_id){
    return db('tasks AS t')
    
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name').join('projects AS p', 'p.id', 't.project_id')
    .where('t.project_id', project_id);
}

function find() {
    return db("tasks");
  }