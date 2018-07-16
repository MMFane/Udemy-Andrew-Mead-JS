let toDoList = getSavedToDos()

const filters = {
    query: '',
    showDone: false
}

getShowDone(filters)
render(toDoList, filters)

document.querySelector('#btn-remove-to-do').addEventListener('click', () => {
    removeAll(false)
})
document.querySelector('#btn-remove-done').addEventListener('click', () => {
    removeAll(true)
})
document.querySelector('#input-filter').addEventListener('input', setFilter)
document.querySelector('#show-done').addEventListener('change', (e) => {
    saveShowDone(e)
    getShowDone(filters)
    render(toDoList, filters)
})

document.querySelector('#add-to-do-form').addEventListener('submit', (e) => {
    e.preventDefault()
    inputVal = e.target.elements['toDoText'].value
    if (inputVal != '') {
        addToDo(inputVal)
    }
    render(toDoList, filters)
    document.forms['add-to-do-form'].reset()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'toDoList') {
        toDoList = JSON.parse(e.newValue)
    }
    render(toDoList, filters)
})