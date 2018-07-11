let notes = []

const filters = {
    searchText: ''
}

//check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const addNote = function (e, note) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
}

const removeAllNotes = function (e) {
    document.querySelector('#notes').innerHTML = ''
}

const renderNotes = function (notes, filters) {
    removeAllNotes()
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed Note'
        }
        noteEl.classList.add('note')
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#btn-add').addEventListener('click', addNote)
document.querySelector('#btn-remove-all').addEventListener('click', removeAllNotes)
document.querySelector('#input-filter').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})