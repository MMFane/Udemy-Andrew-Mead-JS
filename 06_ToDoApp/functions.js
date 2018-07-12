const getSavedToDos = function () {
    const toDoListJSON = localStorage.getItem('toDoList')
    if (toDoListJSON !== null) {
        return JSON.parse(toDoListJSON)
    } else {
        return []
    }
}

const saveToDoList = function (toDoList) {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

const saveShowDone = function (e) {
    localStorage.setItem('showDone', JSON.stringify(e.target.checked))
}

const getShowDone = function (filters) {
    const showDoneJSON = localStorage.getItem('showDone')
    if (JSON.parse(showDoneJSON) !== '') {
        filters.showDone = JSON.parse(showDoneJSON)
        document.querySelector('#show-done').checked = JSON.parse(showDoneJSON)
    } else {
        filters.showDone = false
        document.querySelector('#show-done').checked = false
    }
}

const setFilter = function (e) {
    filters.query = e.target.value
    render(toDoList, filters)
}

const filterList = function (list) {
    return list.filter(function (listItem) {
        return listItem.text.toLowerCase().includes(filters.query.toLowerCase())
    })
}

const addToDo = function (text) {
    toDoList.push({
        text: text,
        isComplete: false
    })
    saveToDoList(toDoList)
    render(toDoList, filters)
}

const generateToDoDOM = function (text) {
    const toDoElem = document.createElement('p')
    toDoElem.textContent = text
    document.querySelector('#to-do').appendChild(toDoElem)
}

const generateDoneDOM = function (text) {
    const doneElem = document.createElement('p')
    doneElem.textContent = text
    doneElem.classList.add('done')
    document.querySelector('#done').appendChild(doneElem)
}

const generateSummaryDOM = function (list) {
    const summary = document.querySelector('#summary')
    summary.textContent = `You have ${list.length} things left to do`
    document.querySelector('#header').appendChild(summary)
}

const remove = function (isDone) {
    for (let i = toDoList.length - 1; i >= 0; i--) {
        if (toDoList[i].isComplete === isDone) {
            toDoList.splice(i, 1)
        }
    }
    saveToDoList(toDoList)
    render(toDoList, filters)
}

const resetPage = function () {
    document.querySelector('#to-do').innerHTML = ''
    document.querySelector('#done').innerHTML = ''
    document.querySelector('#summary').innerHTML = ''
}

// Render application
const render = function (toDoList, filters) {
    resetPage()

    const incomplete = toDoList.filter(function (toDo) {
        return !toDo.isComplete
    })
    const complete = toDoList.filter(function (toDo) {
        return toDo.isComplete
    })
    const filteredToDos = filterList(incomplete)
    const filteredDones = filterList(complete)

    generateSummaryDOM(incomplete)

    if (filteredToDos.length > 0) {
        filteredToDos.forEach(function (toDo) {
            generateToDoDOM(toDo.text)
        })
    } else {
        generateToDoDOM('-----')
    }
    if (filters.showDone) {
        if (filteredDones.length > 0) {
            filteredDones.forEach(function (done) {
                generateDoneDOM(done.text)
            })
        } else {
            generateDoneDOM('-----')
        }
    }
}