

function getTodo(id){
    const p = new Promise((resolve,reject)=>{
        // throw new Error("Erreur !!");
        if (id == 0) reject({err:"Erreur !"})
        setTimeout(()=>{

            const todo = {action:`Todo ${id}`,id}
            resolve(todo);          
        },1000);
    
    });

    return p;
}


async function asyncGetTodo(){

    let todo1 = await getTodo(0);
    
    let todo2 = await getTodo(2);
    let todo3 = await getTodo(3);
    
    return[todo1,todo2,todo3];    
}

let todo = asyncGetTodo().then(todos=>{
    console.log(todos);
})    


// let pTodo = getTodo(0);
// pTodo
//     .then(todo=>{
//         console.log(todo);
//         return getTodo(todo.id+1);
//     })
//     .then(todo=>{
//         console.log(todo);
//     })
//     .catch(err => {        
//         console.error(err)
//     })

// let pTodo1 = getTodo(1);
// let pTodo2 = getTodo(2);
// let pTodo3 = getTodo(3);

// Promise.all([pTodo1,pTodo2,pTodo3]).then(arr => console.log(arr));