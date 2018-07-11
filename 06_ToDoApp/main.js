let toDoList = [
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
        text: 'Something Else',
        isComplete: false
    },
    {
        text: 'Accept my pain',
        isComplete: true
    }
]

const filters = {
    query: "",
    showDone: false
}

const addToDo = function (text) {
    toDoList.push({
        text: text,
        isComplete: false
    })
}

const removeAllToDos = function () {
    for (let i = toDoList.length - 1; i >= 0; i--) {
        if (toDoList[i].isComplete === false) {
            toDoList.splice(i, 1)
        }
    }
    render(toDoList, filters)
}

const removeAllDone = function () {
    for (let i = toDoList.length - 1; i >= 0; i--) {
        if (toDoList[i].isComplete === true) {
            toDoList.splice(i, 1)
        }
    }
    render(toDoList, filters)
}

const removeSummary = function () {
    console.log("remove Summary")
}

const resetPage = function () {
    document.querySelector("#to-do").innerHTML = ""
    document.querySelector("#done").innerHTML = ""
    document.querySelector("#summary").innerHTML = ""
}

const render = function (toDoList, filters) {
    resetPage()
    const incomplete = toDoList.filter(function (toDo) {
        return !toDo.isComplete
    })

    const filteredToDos = incomplete.filter(function (toDo) {
        return toDo.text.toLowerCase().includes(filters.query.toLowerCase())
    })

    const complete = toDoList.filter(function (toDo) {
        return toDo.isComplete
    })

    const filteredDones = complete.filter(function (done) {
        return done.text.toLowerCase().includes(filters.query.toLowerCase())
    })

    const summary = document.querySelector("#summary")
    summary.textContent = `You have ${incomplete.length} things left to do`
    document.querySelector("#header").appendChild(summary)

    if (filteredToDos.length > 0) {
        filteredToDos.forEach(function (toDo) {
            const toDoElem = document.createElement("p")
            toDoElem.textContent = toDo.text
            document.querySelector("#to-do").appendChild(toDoElem)
        })
    } else {
        const toDoElem = document.createElement("p")
        toDoElem.innerHTML = "<em>No To Dos right now</em>"
        document.querySelector("#to-do").appendChild(toDoElem)
    }


    if (filters.showDone) {
        if (filteredDones.length > 0) {
            filteredDones.forEach(function (done) {
                const doneElem = document.createElement("p")
                doneElem.textContent = done.text
                doneElem.classList.add("done")
                document.querySelector("#done").appendChild(doneElem)
            })
        } else {
            const doneElem = document.createElement("p")
            doneElem.innerHTML = "<em>No Done right now</em>"
            doneElem.classList.add("done")
            document.querySelector("#done").appendChild(doneElem)
        }

    }
}

render(toDoList, filters)

const filterToDos = function (e) {
    filters.query = e.target.value
    render(toDoList, filters)
}

document.querySelector("#btn-remove-to-do").addEventListener("click", removeAllToDos)
document.querySelector("#btn-remove-done").addEventListener("click", removeAllDone)
document.querySelector("#input-filter").addEventListener("input", filterToDos)
document.querySelector("#show-done").addEventListener("change", function (e) {
    filters.showDone = e.target.checked
    render(toDoList, filters)
})


document.querySelector("#add-to-do-form").addEventListener("submit", function (e) {
    e.preventDefault()
    inputVal = e.target.elements["toDoText"].value
    if (inputVal != "") {
        addToDo(inputVal)
    }
    render(toDoList, filters)
    document.forms["add-to-do-form"].reset()
})
