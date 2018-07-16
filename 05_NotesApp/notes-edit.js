// note data setup, redirect home if note is undefined
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1) //cut off the first character, the #
const pageTitle = document.querySelector('#page-title')
const dateText = document.querySelector('#last-edited')

let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})
if (note === undefined) {
    location.assign('/index.html')
}

const updateUpdatedAt = function () {
    dateText.textContent = `last edited ${moment(note.updatedAt).fromNow()}`
}

pageTitle.textContent = `"${note.title}"`
updateUpdatedAt()

// Showing and editing note title and body on the page
noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updateUpdatedAt()
    pageTitle.textContent = `"${note.title}"`
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updateUpdatedAt()
    saveNotes(notes)
})

document.querySelector('#btn-remove').addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        // TO DO: break out into own function
        note = notes.find(function (note) {
            return note.id === noteId
        })
        if (note === undefined) {
            location.assign('/index.html')
        }
        noteTitle.value = note.title
        noteBody.value = note.body
        renderNotes(notes, filters)
        updateUpdatedAt()
    }
})