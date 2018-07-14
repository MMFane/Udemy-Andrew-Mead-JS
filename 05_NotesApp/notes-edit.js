// note data setup, redirect home if note is undefined
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1) //cut off the first character, the #
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})
if (note === undefined) {
    location.assign('/index.html')
}

document.querySelector('#page-title').textContent = `Edit "${note.title}"`

// Showing and editing note title and body on the page
noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
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
    }
})