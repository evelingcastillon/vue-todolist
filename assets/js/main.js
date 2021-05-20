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
            'Do something',
            'Do else',
            'Do something else'
        ],
        tasksComplete: [],
        trash: []
    },
    methods: {
        addTask(){
            this.tasks.unshift(this.newTask);
            this.newTask = ''
        },
        removeTask(index){
            this.tasks.splice(index, 1)
        },
        pushComplete(index){
            this.tasksComplete.unshift(this.tasks[index])
            this.tasks.splice(index, 1)
        },
        restoreCompletedTask(index, task){
            this.tasks.unshift(task)
            this.tasksComplete.splice(index, 1)
        }
    }
})