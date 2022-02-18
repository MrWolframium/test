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

let initShowBtn = () => {
    document.querySelector('.showBtn').addEventListener('click', showAddWindow)
}

let initAddBtn =() => {
    document.querySelector('.addBtn').addEventListener('click', addBook)
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
            let currentCover = event.target.parentNode.parentNode.querySelector('img');
            let currentTitle = event.target.parentNode.parentNode.querySelector('.shelf-book-desc-title');
            let currentAuthor = event.target.parentNode.parentNode.querySelector('.shelf-book-desc-author');
            let currentYear = event.target.parentNode.parentNode.querySelector('.shelf-book-desc-year');
            document.querySelector('.editwindow-cover').value = currentCover.getAttribute('src');
            document.querySelector('.editwindow-title').value = currentTitle.innerText;
            document.querySelector('.editwindow-author').value = currentAuthor.innerText;
            document.querySelector('.editwindow-year').value = currentYear.innerText.substring(0, currentYear.innerText.length-3);
            let saveBtn = document.querySelector('.saveBtn')
            saveBtn.addEventListener('click', (event) => {
                event.preventDefault();
                currentCover.setAttribute('src', document.querySelector('.editwindow-cover').value);
                currentTitle.innerText = document.querySelector('.editwindow-title').value;
                currentAuthor.innerText = document.querySelector('.editwindow-author').value;
                currentYear.innerText = document.querySelector('.editwindow-year').value + ' г.';
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
            <h1 class="shelf-book-desc-title">${document.querySelector('.addwindow-title').value}</h1>
            <h2 class="shelf-book-desc-author">${document.querySelector('.addwindow-author').value}</h2>
            <h3 class="shelf-book-desc-year">${document.querySelector('.addwindow-year').value} г.</h3>
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

initShowBtn()

initCancelBtn()

initDeleteBtn()

initEditBtn()

initPreviewBtn()

initAddBtn()