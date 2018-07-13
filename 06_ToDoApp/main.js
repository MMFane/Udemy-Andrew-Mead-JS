let toDoList = getSavedToDos()

const filters = {
    query: '',
    showDone: false
}

getShowDone(filters)
render(toDoList, filters)

document.querySelector('#btn-remove-to-do').addEventListener('click', function () {
    removeAll(false)
})
document.querySelector('#btn-remove-done').addEventListener('click', function () {
    removeAll(true)
})
document.querySelector('#input-filter').addEventListener('input', setFilter)
document.querySelector('#show-done').addEventListener('change', function (e) {
    saveShowDone(e)
    getShowDone(filters)
    render(toDoList, filters)
})

document.querySelector('#add-to-do-form').addEventListener('submit', function (e) {
    e.preventDefault()
    inputVal = e.target.elements['toDoText'].value
    if (inputVal != '') {
        addToDo(inputVal)
    }
    render(toDoList, filters)
    document.forms['add-to-do-form'].reset()
})