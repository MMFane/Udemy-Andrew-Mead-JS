let notes = getSavedNotes()

const filters = {
    query: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#btn-add').addEventListener('click', function () {
    addNote(notes)
})
document.querySelector('#btn-remove-all').addEventListener('click', removeAllNotes)
document.querySelector('#input-filter').addEventListener('input', function (e) {
    filters.query = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})