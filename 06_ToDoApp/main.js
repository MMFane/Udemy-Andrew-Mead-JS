const toDoList = [
    {
        text: 'Weight Lift',
        isComplete: false
    },
    {
        text: 'Cook dinner',
        isComplete: false
    },
    {
        text: 'Draw Russian Lady',
        isComplete: true
    },
    {
        text: 'Practice Javascript',
        isComplete: true
    },
    {
        text: 'Gain my confidence back',
        isComplete: false
    },
    {
        text: 'Accept my pain',
        isComplete: true
    }
]

const incomplete = toDoList.filter(function (toDo) {
    return !toDo.isComplete
})

const complete = toDoList.filter(function (toDo) {
    return toDo.isComplete
})

const summary = document.createElement("h2")
summary.textContent = `You have ${incomplete.length} things left to do`
document.querySelector("#header").appendChild(summary)

incomplete.forEach(function (toDo) {
    const paragraph = document.createElement("p")
    paragraph.textContent = toDo.text
    document.querySelector("#toDo").appendChild(paragraph)
})

complete.forEach(function (toDo) {
    const paragraph = document.createElement("p")
    paragraph.textContent = toDo.text
    document.querySelector("#done").appendChild(paragraph)
})

const addToDo = function (e) {
    const toDo = document.createElement("p")
    toDo.textContent = "temp to do text"
    document.querySelector("#toDo").appendChild(toDo)
}

document.querySelector("button").addEventListener("click", addToDo)