// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON !== null ? JSON.parse(notesJSON) : []
}

// Save notes to local Storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const addNote = (notes) => {
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

const removeAllNotes = () => {
    document.querySelector('#notes').innerHTML = ''
    notes = []
    saveNotes(notes)
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byOldest') {
        return notes.sort((a, b) => {
            if (a.createdAt < b.createdAt) {
                return -1
            } else if (a.createdAt > b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byNewest') {
        return notes.sort((a, b) =>{
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byTitle') {
        return notes.sort((a, b) => {
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
const generateNoteDOM = (note) => {
    const container = document.createElement('div')
    const text = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'x'
    button.classList.add('btn-remove')
    button.addEventListener('click', () => {
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
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    document.querySelector('#notes').innerHTML = ''
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.query.toLowerCase()))
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}