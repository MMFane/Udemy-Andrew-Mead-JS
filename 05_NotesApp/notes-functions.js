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
    const timeStamp = moment().valueOf()
    const newNote = {
        id: uuidv4(),
        title: 'Untitled Note',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    }
    notes.push(newNote)
    saveNotes(notes)
    location.assign(`./edit.html#${newNote.id}`)
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

const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byOldest') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byNewest') {
        return notes.sort(function (a, b) {
            if (a.createdAt < b.createdAt) {
                return -1
            } else if (a.createdAt > b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byTitle') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Generate DOM note structure
const generateNoteDOM = function (note) {
    const container = document.createElement('div')
    const text = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'x'
    button.classList.add('btn-remove')
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    text.textContent = note.title
    text.setAttribute('href', `./edit.html#${note.id}`)

    container.appendChild(button)
    container.appendChild(text)
    container.classList.add('note')

    return container
}

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
    document.querySelector('#notes').innerHTML = ''
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.query.toLowerCase())
    })
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}