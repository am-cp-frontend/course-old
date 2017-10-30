function makeNote(note_obj) {
    let note = document.createElement('div')
    note.classList.add('note')
    note.classList.add(note_obj.color)

    let header = document.createElement('div')
    header.classList.add('header')
    header.textContent = note_obj.title

    let content = document.createElement('div')
    content.textContent = note_obj.content

    note.appendChild(header)
    note.appendChild(content)

    return note
}

let note_container = document.querySelector('.notes-container')

for (let note of data) {
    note_container.appendChild(makeNote(note))
}