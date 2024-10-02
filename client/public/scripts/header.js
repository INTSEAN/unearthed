const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.className = 'div-container';
headerContainer.style.display = 'flex';
headerContainer.style.justifyContent = 'space-between';
headerContainer.style.alignItems = 'center';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';
headerLeft.style.display = 'flex';
headerLeft.style.alignItems = 'center';

const image = document.createElement('img');
image.src = '/logo.png';
image.style.width = '50px';
image.style.height = '50px';

const h1 = document.createElement('h1');
h1.textContent = 'UnEarthed';
h1.style.marginLeft = '10px';
h1.style.marginTop = '20px'

headerLeft.appendChild(image);
headerLeft.appendChild(h1);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button');
headerButton.textContent = 'Home';
headerButton.style.padding = '10px';
headerButton.style.backgroundColor = 'blue';
headerButton.style.color = 'white';
headerButton.style.border = 'none';
headerButton.style.cursor = 'pointer';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
})

headerRight.appendChild(headerButton);
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);


header.appendChild(headerContainer);