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
    const newIncompleteToDo = document.createElement("p")
    newIncompleteToDo.textContent = toDo.text
    document.querySelector("#to-do").appendChild(newIncompleteToDo)
})

complete.forEach(function (toDo) {
    const newCompleteToDo = document.createElement("p")
    newCompleteToDo.textContent = toDo.text
    newCompleteToDo.classList.add("complete")
    document.querySelector("#done").appendChild(newCompleteToDo)
})

const filters = {
    query: ""
}

let newText = "Temp New Text"
const setNewText = function (e) {
    newText = e.target.value
}

const addToDo = function (text) {
    toDoList.push( {
        text: text,
        isComplete: false
    })
    console.log(toDoList)
    const toDo = document.createElement("p")
    toDo.textContent = text
    document.querySelector("#to-do").appendChild(toDo)
}

const removeAllToDos = function (e) {
    document.querySelector("#to-do").innerHTML = ""
}

const removeAllDone = function (e) {
    document.querySelector("#done").innerHTML = ""
}

const renderAll = function (toDoList, filters) {
    removeAllToDos()
    removeAllDone()
    const filteredToDos = incomplete.filter(function (toDo) {
        return toDo.text.toLowerCase().includes(filters.query.toLowerCase())
    })
    const filteredDones = complete.filter(function (done) {
        return done.text.toLowerCase().includes(filters.query.toLowerCase())
    })
   filteredToDos.forEach(function (toDo) {
        const toDoElem = document.createElement("p")
        toDoElem.textContent = toDo.text
        document.querySelector("#to-do").appendChild(toDoElem)
    }) 
    filteredDones.forEach(function (done) {
        const doneElem = document.createElement("p")
        doneElem.textContent = done.text
        doneElem.classList.add("done")
        document.querySelector("#done").appendChild(doneElem)
    })
}

renderAll(toDoList, filters)

const filterToDos = function (e) {
    filters.query = e.target.value
    renderAll(toDoList, filters)
}

document.querySelector("#btn-add").addEventListener("click", function () {
    addToDo(newText)
})
document.querySelector("#btn-remove-to-do").addEventListener("click", removeAllToDos)
document.querySelector("#btn-remove-done").addEventListener("click", removeAllDone)
document.querySelector("#input-filter").addEventListener("input", filterToDos)
document.querySelector("#input-new").addEventListener("change", setNewText)