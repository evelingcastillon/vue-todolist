//La nostra todo list avrá alcune tasks di default predefinite
//L'utente puó inserire nuove tasks
//Cliccando sulla "X" l'utente puó cancellare una task
//Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
//Inoltre L'utente vuole poter modificare una task giá inserita
//ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
const app = new Vue ({
    el: '#app',
    data: {
        newTask: '',
        counter: 0,
        tasks : [
            'Learn JS',
            'Learn CSS'
        ],
        tasksComplete: []

    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask)
        },
        removeTask(index){
            this.tasks.splice(index, 1)
        },
        pushComplete(index){
            this.tasksComplete.push(this.tasks[index])
        }
    }
})