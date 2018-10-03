function createComponent(type) {
    var cmp = document.createElement(type);
    return cmp;
}

function addComponent(type, container, options) {
    var cmp = createComponent(type);
    container.appendChild(cmp);

    if (options) {
        cmp.setAttribute('id', options.id);
        if (options.classList) {
            options.classList.forEach(element => {
                cmp.classList.add(element);
            });
        }
    }
    return cmp;
}

export default { createComponent, addComponent };