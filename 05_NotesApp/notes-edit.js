// note data setup, redirect home if note is undefined
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1) //cut off the first character, the #
const pageTitle = document.querySelector('#page-title')
const dateText = document.querySelector('#last-edited')

let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)
if (note === undefined) {
    location.assign('/index.html')
}

const updateUpdatedAt = () => `last edited ${moment(note.updatedAt).fromNow()}`

pageTitle.textContent = `"${note.title}"`
dateText.textContent = updateUpdatedAt()

// Showing and editing note title and body on the page
noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateText.textContent = updateUpdatedAt()
    pageTitle.textContent = `"${note.title}"`
    saveNotes(notes)
})

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateText.textContent = updateUpdatedAt()
    saveNotes(notes)
})

document.querySelector('#btn-remove').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        // TO DO: break out into own function
        note = notes.find((note) => note.id === noteId)
        if (note === undefined) {
            location.assign('/index.html')
        }
        noteTitle.value = note.title
        noteBody.value = note.body
        renderNotes(notes, filters)
        dateText.textContent = updateUpdatedAt()
    }
})