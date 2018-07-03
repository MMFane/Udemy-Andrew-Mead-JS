// const notes = ['Note 1', 'Note 2', 'Note 3']
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

// console.log(`You removed ${notes.pop()}`)
// notes.push('Note New')

// console.log(notes.shift());
// notes.unshift('New First')

// notes.splice (1, 1, 'New Second') //replace second item in the array
// notes[1] = 'New New Second' //also works to replace

// notes.forEach(function(note, index) {
//     console.log(`${index}: ${note}`);
// })


// console.log(notes[0])
// console.log(notes[notes.length-1]) // get last item

// const num = 3
// for (let i = 0; i <= num; i++) {
//     console.log(`Counting... ${i}`)
// }

// for (let i = 0; i < notes.length; i++) {
//     console.log(`${i}: ${notes[i]}`);
// }
// console.log(notes.indexOf('Note 3'))
// console.log(notes.indexOf({})) // this returns -1 (not found) even though there is an empty obj in there
// these objects are references to places in memory and not equal even though their contents are equal
// because indexof uses === which doesn't work well for objects for the above reason
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index];
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const filterNotes = function (notes, query) {
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

// const note = findNote(notes, 'habits to Work on')
// console.log(note)
// console.log(filterNotes(notes, 'to'))

// console.log(notes.length)
// console.log(notes)

// console.log('----------')

// const index = notes.findIndex(function(note, index) {
//     return note.title === 'Habits to work on'
// })

// console.log(index)

sortNotes(notes)
console.log(notes)

