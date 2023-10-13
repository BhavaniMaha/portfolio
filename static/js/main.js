function changeTheme(theme) {
    if (theme == 'dark'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.color = '';
        document.body.style.backgroundColor = '';
    }
}