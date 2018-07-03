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

//Add a new element
const newParagraph = document.createElement("p")
newParagraph.textContent = "I'm a new paragraph"
document.querySelector("#notes").appendChild(newParagraph)


const addElement = function (e) {
    console.log("adding element")
    e.target.textContent = "I was clicked!"
}

document.querySelector("button").addEventListener("click", addElement)
