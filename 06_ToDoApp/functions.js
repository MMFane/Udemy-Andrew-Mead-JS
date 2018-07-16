const getSavedToDos = () => {
    const toDoListJSON = localStorage.getItem('toDoList')
    return toDoListJSON !== null ? JSON.parse(toDoListJSON) : []
}

const saveToDoList = (toDoList) => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

const saveShowDone = (e) => {
    localStorage.setItem('showDone', JSON.stringify(e.target.checked))
}

const getShowDone = (filters) => {
    const showDoneJSON = localStorage.getItem('showDone')
    if (JSON.parse(showDoneJSON) !== '') {
        filters.showDone = JSON.parse(showDoneJSON)
        document.querySelector('#show-done').checked = JSON.parse(showDoneJSON)
    } else {
        filters.showDone = false
        document.querySelector('#show-done').checked = false
    }
}

const setFilter = (e) => {
    filters.query = e.target.value
    render(toDoList, filters)
}

const filterList = (list) => list.filter((listItem) => listItem.text.toLowerCase().includes(filters.query.toLowerCase()))

const addToDo = (text) => {
    toDoList.push({
        id: uuidv4(),
        text: text,
        isComplete: false
    })
    saveToDoList(toDoList)
    render(toDoList, filters)
}

const generateToDoDOM = (toDo, location) => {
    const container = document.createElement('div')
    const toDoContainer = document.createElement('div')
    const checkbox = document.createElement('input')
    const toDoText = document.createElement('span')
    const removeBtn = document.createElement('button')

    container.classList.add('to-do')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', () => {
        toDoText.classList.toggle('done')
        toDo.isComplete = !toDo.isComplete
        saveToDoList(toDoList)
        render(toDoList, filters)
    })

    if (toDo.isComplete === true) {
        checkbox.setAttribute('checked', true)
        toDoText.classList.add('done')
        removeBtn.classList.add('done-btn')
    }

    toDoText.textContent = toDo.text
    removeBtn.textContent = 'x'
    removeBtn.classList.add('btn-remove')
    removeBtn.addEventListener('click', () => {
        removeToDo(toDo.id)
        saveToDoList(toDoList)
        render(toDoList, filters)
    })
    toDoContainer.appendChild(checkbox)
    toDoContainer.appendChild(toDoText)
    container.appendChild(toDoContainer)
    container.appendChild(removeBtn)

    document.querySelector(location).appendChild(container)
}

const generateEmptyDOM = (location) => {
    const empty = document.createElement('p')
    empty.textContent = '-----'
    document.querySelector(location).appendChild(empty)
}

const generateSummaryDOM = (list) => {
    const summary = document.querySelector('#summary-text')
    summary.textContent = `You have ${list.length} things left to do`
    document.querySelector('#summary').appendChild(summary)
}

const removeAll = (isDone) => {
    for (let i = toDoList.length - 1; i >= 0; i--) {
        if (toDoList[i].isComplete === isDone) {
            toDoList.splice(i, 1)
        }
    }
    saveToDoList(toDoList)
    render(toDoList, filters)
}

const removeToDo = (id) => {
    const index = toDoList.findIndex((toDo) => toDo.id === id)
    if (index > -1) {
        toDoList.splice(index, 1)
    }
}

const resetPage = () => {
    document.querySelector('#to-do').innerHTML = ''
    document.querySelector('#done').innerHTML = ''
    document.querySelector('#summary-text').innerHTML = ''
}

// Render application
const render = (toDoList, filters) => {
    resetPage()
    const incomplete = toDoList.filter((toDo) => !toDo.isComplete)
    const complete = toDoList.filter((toDo) => toDo.isComplete)
    const filteredToDos = filterList(incomplete)
    const filteredDones = filterList(complete)

    generateSummaryDOM(incomplete)

    if (filteredToDos.length > 0) {
        filteredToDos.forEach((toDo) => {
            generateToDoDOM(toDo, '#to-do')
        })
    } else {
        generateEmptyDOM('#to-do')
    }
    if (filters.showDone) {
        if (filteredDones.length > 0) {
            filteredDones.forEach((done) => {
                generateToDoDOM(done, '#done')
            })
        } else {
            generateEmptyDOM('#done')
        }
    }
}