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

const filters = {
    query: ""
}

let newText = "Temp New Text"
const setNewText = function (e) {
    newText = e.target.value
}

const addToDo = function (text) {
    toDoList.push({
        text: text,
        isComplete: false
    })
}

const removeAllToDos = function () {
    document.querySelector("#to-do").innerHTML = ""
}

const removeAllDone = function () {
    document.querySelector("#done").innerHTML = ""
}

const removeSummary = function () {
    document.querySelector("#summary").innerHTML = ""
}

const resetPage = function () {
    removeAllToDos()
    removeAllDone()
    removeSummary()
}

const renderAll = function (toDoList, filters) {
    resetPage()

    const incomplete = toDoList.filter(function (toDo) {
        return !toDo.isComplete
    })

    const complete = toDoList.filter(function (toDo) {
        return toDo.isComplete
    })

    const summary = document.querySelector("#summary")
    summary.textContent = `You have ${incomplete.length} things left to do`
    document.querySelector("#header").appendChild(summary)

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

document.querySelector("#btn-remove-to-do").addEventListener("click", removeAllToDos)
document.querySelector("#btn-remove-done").addEventListener("click", removeAllDone)
document.querySelector("#input-filter").addEventListener("input", filterToDos)
document.querySelector("#show-done").addEventListener("change", function (e) {
    console.log(e.target.checked)
})


document.querySelector("#add-to-do-form").addEventListener("submit", function (e) {
    e.preventDefault()
    inputVal = e.target.elements["toDoText"].value
    if (inputVal != "") {
        addToDo(inputVal)
    }
    renderAll(toDoList, filters)
    document.forms["add-to-do-form"].reset()
})
