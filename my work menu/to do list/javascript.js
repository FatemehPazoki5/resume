const buttonAdd=document.querySelector(".todo-button");
const ul=document.querySelector(".todo-list");
const input=document.querySelector(".todo-input");
const filter=document.querySelector(".filter-todo");
buttonAdd.addEventListener("click",addLi);
ul.addEventListener("click",deletComplet);
filter.addEventListener("click",filtertodo);
document.addEventListener("DOMContentLoaded",getlocal);
function addLi(event){
    event.preventDefault();
    const div=document.createElement("div");
    const trashBtn=document.createElement("button");
    const completeBtn=document.createElement("button");
    const li=document.createElement("li");
    div.classList.add("todo");
    li.classList.add("todo-item");
    trashBtn.classList.add("trash-btn");
    completeBtn.classList.add("complete-btn");
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    completeBtn.innerHTML='<i class="fas fa-check"></i>';
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(trashBtn);
    div.appendChild(completeBtn);
    li.innerText=input.value;
    let todo=li.innerText;
    localS(todo);
}

function localS(todo){
    let todos ;
    if (localStorage.getItem("todoss")===null)
        todos = [];  
    else
        todos=JSON.parse(localStorage.getItem("todoss"));
    todos.push(todo);
    
    localStorage.setItem("todoss", JSON.stringify(todos));
}
function deletComplet(event){
    
    const item=event.target;
    let className= item.className;
    if(className=="trash-btn"){
        deletlocal(item.parentElement);
        item.parentElement.remove();
    }
    else if(className=="complete-btn")
        item.parentElement.classList.toggle("completed");     

}
function deletlocal(item){

   const todoText=item.children[0].innerText;
   console.log(todoText); 
   let todos ;
    if (localStorage.getItem("todoss")===null)
        todos = [];  
    else
        todos=JSON.parse(localStorage.getItem("todoss"));
    todos.splice(todos.indexOf(todoText),1);
    localStorage.setItem("todoss", JSON.stringify(todos));
}
function filtertodo(event){
    const divTodo = ul.childNodes;
    console.log(divTodo);
    const value=event.target.value;
    divTodo.forEach(function(todo){
        switch(value){
            case "all":
                todo.style.display= "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display= "flex";   
                    break;
                }
                else{
                    todo.style.display= "none";   
                    break;    
                }
            case "uncompleted":
                if(todo.classList.contains("completed")){
                    todo.style.display= "none";   
                    break;
                }
                else{
                    todo.style.display= "flex";   
                    break;    
                }
    } ;  
    })


}
function getlocal(){
    let todos ;
    if (localStorage.getItem("todoss")===null)
        todos = [];  
    else{
        todos=JSON.parse(localStorage.getItem("todoss"));
    };
        todos.forEach(function(todo){
        const div=document.createElement("div");
        const trashBtn=document.createElement("button");
        const completeBtn=document.createElement("button");
        const li=document.createElement("li");
        div.classList.add("todo");
        li.classList.add("todo-item");
        trashBtn.classList.add("trash-btn");
        completeBtn.classList.add("complete-btn");
        trashBtn.innerHTML='<i class="fas fa-trash"></i>';
        completeBtn.innerHTML='<i class="fas fa-check"></i>';
        ul.appendChild(div);
        div.appendChild(li);
        div.appendChild(trashBtn);
        div.appendChild(completeBtn);
        li.innerText=todo;
        
    })

}
