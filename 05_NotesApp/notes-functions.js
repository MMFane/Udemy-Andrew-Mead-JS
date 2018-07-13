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
        id: uuidv4(),
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

const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM note structure
const generateNoteDOM = function (note) {
    const container = document.createElement('div')
    const text = document.createElement('span')
    const button = document.createElement('button')

    button.textContent = 'x'
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        text.textContent = note.title
    } else {
        text.textContent = 'Unnamed Note'
    }

    container.appendChild(text)
    container.appendChild(button)
    container.classList.add('note')
    
    return container
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