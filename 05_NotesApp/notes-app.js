const notes = [{
    title: 'Note 1',
    body: 'I would like to go to Spain'
}, {
    title: 'habits to work on',
    body: 'Stop scratching face'
}, {
    title: 'House Plans',
    body: 'Get more plants'
}]

const filters = {
    searchText: ''
}

const addNote = function (e, note) {
    const newNote = document.createElement('p')
    newNote.textContent = 'New Note Placeholder Text'
    newNote.classList.add('note')
    document.querySelector('#notes').appendChild(newNote)
}

const removeAllNotes = function (e) {
    document.querySelector('#notes').innerHTML = ''
}

const renderNotes = function (notes, filters) {
    removeAllNotes()
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent= note.title
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