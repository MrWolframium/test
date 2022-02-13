let hideWindow = () => {
    for (let i = 0; i < document.getElementsByClassName('modalwindow').length; i++)
        document.getElementsByClassName('modalwindow')[i].classList.add('hidden')
}

let showAddWindow = () => {
    document.querySelector('.addwindow').classList.remove('hidden');
}

let showEditWindow = () => {
    document.querySelector('.editwindow').classList.remove('hidden');
}

let showPreview = () => {
    document.querySelector('.addwindow-preview').setAttribute('src', document.querySelector('.addwindow-cover').value);
}

let initPreviewBtn = () => {
    document.querySelector('.previewBtn').addEventListener('click', showPreview)
}

let initAddBtn = () => {
    document.querySelector('.showBtn').addEventListener('click', showAddWindow)
}

let initCancelBtn = () => {
    for (let i = 0; i < document.getElementsByClassName('cancelBtn').length; i++)
        document.getElementsByClassName('cancelBtn')[i].addEventListener('click', hideWindow)
}

let initDeleteBtn = () => {
    for (let i = 0; i < document.getElementsByClassName('shelf-book-opt-delete').length; i++) {
        document.getElementsByClassName('shelf-book-opt-delete')[i].addEventListener('click', (event) => {
            event.target.parentNode.parentNode.remove()
        })
    }
}

let initEditBtn = () => {
    for (let i = 0; i < document.getElementsByClassName('shelf-book-opt-edit').length; i++) {
        document.getElementsByClassName('shelf-book-opt-edit')[i].addEventListener('click', (event) => {
            showEditWindow()
            let currentCover = event.target.parentNode.parentNode.children[0].firstChild.firstChild;
            let currentTitle = event.target.parentNode.parentNode.children[1].children[0];
            let currentAuthor = event.target.parentNode.parentNode.children[1].children[1];
            let currentYear = event.target.parentNode.parentNode.children[1].children[2];
            document.querySelector('.editwindow-cover').value = currentCover.getAttribute('src');
            document.querySelector('.editwindow-title').value = currentTitle.innerText;
            document.querySelector('.editwindow-author').value = currentAuthor.innerText;
            document.querySelector('.editwindow-year').value = currentYear.innerText;
            let saveBtn = document.querySelector('.saveBtn')
            saveBtn.addEventListener('click', () => {
                currentCover.setAttribute('src', document.querySelector('.editwindow-cover').value);
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

let addBook = () => {
    if (document.querySelector('.addwindow-title').value && document.querySelector('.addwindow-author').value && document.querySelector('.addwindow-year').value) {
        document.querySelector('.shelf').insertAdjacentHTML('beforeend', `<tr class="shelf-book">
        <td class="shelf-book-image"><div class="shelf-book-image-cover"><img src="${document.querySelector('.addwindow-cover').value}"></div></td>
        <td class="shelf-book-desc">
            <h1>${document.querySelector('.addwindow-title').value}</h1>
            <h2>${document.querySelector('.addwindow-author').value}</h2>
            <h2>${document.querySelector('.addwindow-year').value}</h2>
        </td>
        <td class="shelf-book-opt">
            <button class="shelf-book-opt-edit">Редактировать</button>
            <button class="shelf-book-opt-delete">Удалить</button>
        </td>
    </tr>`)
        hideWindow()
        initDeleteBtn()
        initEditBtn()
        document.querySelector('.addwindow-cover').value = '';
        document.querySelector('.addwindow-title').value = '';
        document.querySelector('.addwindow-author').value = '';
        document.querySelector('.addwindow-year').value = '';
    }
}

initAddBtn()

initCancelBtn()

initDeleteBtn()

initEditBtn()

initPreviewBtn()