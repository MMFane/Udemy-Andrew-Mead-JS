let notes = getSavedNotes()

const filters = {
    query: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#btn-add').addEventListener('click', () => {
    addNote(notes)
})
document.querySelector('#btn-remove-all').addEventListener('click', removeAllNotes)
document.querySelector('#input-filter').addEventListener('input', (e) => {
    filters.query = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})