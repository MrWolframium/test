
let showAddWindow = () => {
    document.querySelector('.addwindow').classList.remove('hidden');
}

let hideAddWindow = () => {
    document.querySelector('.addwindow').classList.add('hidden');
}

let showEditWindow = () => {
    document.querySelector('.editwindow').classList.remove('hidden');
}

let hideEditWindow = () => {
    document.querySelector('.editwindow').classList.add('hidden');
}

let initDeleteBtn = () => {
    
}

let addBook = () => {
    let title = document.querySelector('.addwindow-title').value;
    let author = document.querySelector('.addwindow-author').value;
    let year = document.querySelector('.addwindow-year').value;
    if (title && author && year) {
        document.querySelector('.shelf').insertAdjacentHTML('beforeend', `<tr class="shelf-book">
        <td class="shelf-book-image"></td>
        <td class="shelf-book-desc">
            <h1>${title}</h1>
            <h2>${author}</h2>
            <h2>${year}</h2>
        </td>
        <td class="shelf-book-opt">
            <button class="shelf-book-opt-edit">Редактировать</button>
            <button class="shelf-book-opt-delete" onclick="deleteBook()">Удалить</button>
        </td>
    </tr>`)

        hideAddWindow();

        let deleteBtn = document.getElementsByClassName('shelf-book-opt-delete');
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', (event) => {
                event.target.parentNode.parentNode.remove()
            })
        }
    }
}

// РАБОТАЕТ ДЛЯ ДОБАВЛЕННЫХ
/*
let deleteBook = () => {
    let table = document.querySelector('.shelf');
    table.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.remove();
    });
} */

//НЕ РАБОТАЕТ ДЛЯ ДОБАВЛЕННЫХ ТАК КАК ИХ НЕ ВИДИТ DOM

let deleteBtn = document.getElementsByClassName('shelf-book-opt-delete');
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', (event) => {
        event.target.parentNode.parentNode.remove()
    })
}

// РАБОТАЕТ ТОЛЬКО ДЛЯ ПУШКИНА ТАК КАК QUERY SELECTOR ДЛЯ ПЕРВОГО

let editBtn = document.getElementsByClassName('shelf-book-opt-edit');
//editBtn.forEach(element => {element.addEventListener('click', showEditWindow)});
for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', showEditWindow)
}

/* editBtn.addEventListener('click', (event) => {
    showEditWindow();
    let currentTitle = event.target.parentNode.parentNode.children[1].children[0];
    let currentAuthor = event.target.parentNode.parentNode.children[1].children[1];
    let currentYear = event.target.parentNode.parentNode.children[1].children[2];
    document.querySelector('.editwindow-title').value = event.target.parentNode.parentNode.children[1].children[0].innerText;
    document.querySelector('.editwindow-author').value = event.target.parentNode.parentNode.children[1].children[1].innerText;
    document.querySelector('.editwindow-year').value = event.target.parentNode.parentNode.children[1].children[2].innerText;

    let saveBtn = document.querySelector('.saveBtn')
    saveBtn.addEventListener('click', () => {
        currentTitle.innerText = document.querySelector('.editwindow-title').value;
        event.target.parentNode.parentNode.children[1].children[1].innerText = document.querySelector('.editwindow-author').value;
     //   event.target.parentNode.parentNode.children[1].children[1].innerText = document.querySelector('.editwindow-author').value;
      //  event.target.parentNode.parentNode.children[1].children[2].innerText = document.querySelector('.editwindow-year').value;
        hideEditWindow();
    })
}); */