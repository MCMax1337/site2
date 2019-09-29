const getDivElement = document.createElement('p');
getDivElement.style.color = 'red';
getDivElement.textContent = 'Hello world!';
document.querySelector('.header').appendChild(getDivElement);

const getTemplate = () => {
    return `
        <div class="testing-element">
            Hello, world!
        </div>
        <a href='https://youtube.com' class="testing-element">
            Ссылка на страницу
        </a>

        `.trim();
}

const setProfileInfo = function() {
    const template = getTemplate();
    document.querySelector('.header').insertAdjacentHTML('beforeend', template);
}

setProfileInfo();