// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to local Storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const addNote = function (notes) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
}

const removeAllNotes = function (e) {
    document.querySelector('#notes').innerHTML = ''
    notes = []
    saveNotes(notes)
}

// Generate DOM note structure
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed Note'
    }
    noteEl.classList.add('note')
    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    document.querySelector('#notes').innerHTML = ''
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.query.toLowerCase())
    })
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
