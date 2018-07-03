// const toDos = ['Laundry', 'Trash, compost, & recycling', 'Cook dinner', 'Learn Javascript', 'Build website']

// const getToDo = function(arr) {
//     return {
//         first: arr[0],
//         last: arr[arr.length - 1],
//         secondToLast: arr[arr.length - 2]
//     }
// }

// console.log(`You have ${toDos.length} to-dos`)
// console.log(`To Do: ${getToDo(toDos).first}`)
// console.log(`To Do: ${getToDo(toDos).secondToLast}`)

// console.log(`Removing Item: ${toDos.splice(2, 1)}`)
// toDos.push('New Item!')
// console.log(`Removing Item: ${toDos.shift()}`)

// console.log(`You have ${toDos.length} to-dos`)
// toDos.forEach(function(toDo, index) {
//     console.log(`${index + 1}. ${toDo}`)
// });

// console.log('----------')

// for (let i = 0; i < toDos.length; i++) {
//     console.log(`${i + 1}. ${toDos[i]}`)
// }

// console.log('----------')

// for (let i = toDos.length-1; i >= 0; i--) {
//     console.log(`${i + 1}. ${toDos[i]}`)
// }

const toDos = [
    {
        text: 'Weight Lift',
        isComplete: false
    },
    {
        text: 'Cook dinner',
        isComplete: false
    },
    {
        text: 'Draw Russian Lady',
        isComplete: true
    },
    {
        text: 'Practice Javascript',
        isComplete: true
    },
    {
        text: 'Gain my confidence back',
        isComplete: false
    },
    {
        text: 'Accept my pain',
        isComplete: true
    }
]

const deleteToDo = function (toDoList, text) {
    const index = toDoList.findIndex(function (toDo) {
        return toDo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
        console.log(`Deleting To Do: ${toDoList[index].text}`)
        toDoList.splice(index, 1)
    }
    else {
        console.log(`To Do item not found`)
    }
}

const filterToDos = function (toDoList, query) {
    return toDoList.filter(function (toDo) {
        return toDo.text.toLowerCase().includes(query.toLowerCase());
    })
}

const getToDos = function (toDoList) {
    return toDoList.filter(function(toDo) {
        return toDo.isComplete === false
    })
}

const sortToDos = function (toDoList) {
    toDoList.sort(function(a, b) {
        if (!a.isComplete && b.isComplete) {
            return -1
        } else if (a.isComplete && !b.isComplete) {
            return 1
        } else {
            if (a.text.toLowerCase() < b.text.toLowerCase()) {
                return -1
            }
            if (a.text.toLowerCase() > b.text.toLowerCase()) {
                return 1
            } 
            else {
                return 0
            }
        }
    })
}

// console.log(toDos)
// deleteToDo(toDos, 'cOok Dinner')
// deleteToDo(toDos, 'buy food')
console.log(toDos)
// console.log(getToDos(toDos))
// console.log(filterToDos(toDos, 'ra'))
sortToDos(toDos)
console.log(toDos)