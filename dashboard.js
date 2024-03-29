import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL : "https://todoo-b7916-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const todo = ref(database, "todolist")

const inputTypeEl = document.getElementById('input-type');

const addToDoo = document.getElementById("add-todo-button");
const todolist = document.getElementById("todos");

addToDoo.addEventListener("click", function(){

    let toDoo = inputTypeEl.value;
    addToDooItem(toDoo)
    cleanInput()
})

function addToDooItem(todooItem){
    todolist.innerHTML += `<li>${todooItem}</li>`
}

function cleanInput(){
    inputTypeEl.value = ""
}