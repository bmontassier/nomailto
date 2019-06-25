document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.href && target.href.startsWith('mailto')) {
        event.preventDefault();
    } else if (target.href && target.href.startsWith('tel')) {
        event.preventDefault();
    }
});