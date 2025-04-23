"use strict";

window.onload = function() {
    linkHandler(1, simpleHandle);
}

function linkHandler(id, handler) {
    const form = document.querySelector(`#form-${id}`);
    const button = form.querySelector("button");

    button.onclick = () => {
        const str = form.querySelector(`#str-${id}`).value;
        const result = handler(str);

        form.querySelector(`#result-${id}`).innerText = result;
    };
}

function simpleHandle(str) {
    return str + "123";
}