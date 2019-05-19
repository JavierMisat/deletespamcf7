function deleteSpamCF7() {
    let spamCounter = document.querySelector('li.spam a>span.count').textContent.replace(/[{()}]/g, '');
    let checkAll = document.querySelector('#cb-select-all-1');
    let action = document.querySelector('#bulk-action-selector-top');
    let selectFolderSpam =  document.querySelector('.subsubsub .spam a');
    let btnDelete =document.querySelector('#doaction');

    if(!(spamCounter === 0)){
        setTimeout( () => {
            // selectFolderSpam.click();
            checkAll.click();
            action.value = (document.querySelector('#bulk-action-selector-top')[1].value);
            btnDelete.click();

            deleteSpamCF7();
        }, 2000);
    }

}