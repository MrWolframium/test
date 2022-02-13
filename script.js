let hideWindow = () => {
    for (let i = 0; i < document.getElementsByClassName('modalwindow').length; i++) {
        document.getElementsByClassName('modalwindow')[i].classList.add('hidden')
    }
}

let showAddWindow = () => {
    document.querySelector('.addwindow').classList.remove('hidden');
}

let showEditWindow = () => {
    document.querySelector('.editwindow').classList.remove('hidden');
}

let initAddBtn = () => {
    document.querySelector('.showBtn').addEventListener('click', showAddWindow)
}

let initCancelBtn = () => {
    for (let i = 0; i < document.getElementsByClassName('cancelBtn').length; i++) {
        document.getElementsByClassName('cancelBtn')[i].addEventListener('click', hideWindow)
    }
}

let initDeleteBtn = () => {
    for (let i = 0; i < document.getElementsByClassName('shelf-book-opt-delete').length; i++) {
        document.getElementsByClassName('shelf-book-opt-delete')[i].addEventListener('click', (event) => {
            event.target.parentNode.parentNode.remove()
        })
    }
}

let initEditBtn = () => {
    let editBtn = document.getElementsByClassName('shelf-book-opt-edit');
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', (event) => {
            showEditWindow()
            let currentTitle = event.target.parentNode.parentNode.children[1].children[0];
            let currentAuthor = event.target.parentNode.parentNode.children[1].children[1];
            let currentYear = event.target.parentNode.parentNode.children[1].children[2];
            document.querySelector('.editwindow-title').value = event.target.parentNode.parentNode.children[1].children[0].innerText;
            document.querySelector('.editwindow-author').value = event.target.parentNode.parentNode.children[1].children[1].innerText;
            document.querySelector('.editwindow-year').value = event.target.parentNode.parentNode.children[1].children[2].innerText;
            

            let saveBtn = document.querySelector('.saveBtn')
            saveBtn.addEventListener('click', () => {
                currentTitle.innerText = document.querySelector('.editwindow-title').value;
                currentAuthor.innerText = document.querySelector('.editwindow-author').value;
                currentYear.innerText = document.querySelector('.editwindow-year').value;
                currentTitle = '';
                currentAuthor = '';
                currentYear = '';
                hideWindow()
            })
        })
    }
}

initAddBtn()

initCancelBtn()

initDeleteBtn()

initEditBtn()

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
            <button class="shelf-book-opt-delete">Удалить</button>
        </td>
    </tr>`)

        hideWindow()

        initDeleteBtn()

        initEditBtn()
    }
}