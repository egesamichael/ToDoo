import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL : "https://todoo-b7916-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const todo = ref(database, "todolist")



// const getstarted = document.getElementById("get-started");

// getstarted.addEventListener("click", function(){

//     window.Location.href = 'dashboard.html';
//     console.log("Button Clicked");
// })

const getstarted = document.getElementById("get-started");

getstarted.addEventListener("click", function(){

    push(todo, "Learn React")
   // console.log(app);
})
