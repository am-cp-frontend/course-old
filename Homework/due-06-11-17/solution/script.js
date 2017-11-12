function makeNote(note_obj) {
    let note = document.createElement('div')
    note.classList.add('note')
    note.classList.add(note_obj.color)

    if (note_obj.image) {
        let image_container = document.createElement('div')
        image_container.classList.add('img-container')
        
        let image = document.createElement('img')
        image.setAttribute('src', 'assets/' + note_obj.image.toString())

        image_container.appendChild(image)
        note.appendChild(image_container)
    }

    let note_contents = document.createElement('div')
    note_contents.classList.add('note-contents')

    let header = document.createElement('div')
    header.classList.add('header')
    header.textContent = note_obj.title

    let content = document.createElement('div')
    content.classList.add('content')
    content.textContent = note_obj.content

    note_contents.appendChild(header)
    note_contents.appendChild(content)

    let actions = document.createElement('div')
    actions.classList.add('actions')
    actions.textContent = 'Actions'

    note.appendChild(note_contents)
    note.appendChild(actions)
    
    return note
}

let note_container_priority = document.querySelector('.priority .notes-container')
let note_container_normal = document.querySelector('.normal .notes-container')

for (let note of data) {
    let note_root = (note.group === 'priority') ? note_container_priority
                                                : note_container_normal
    note_root.appendChild(makeNote(note))
}