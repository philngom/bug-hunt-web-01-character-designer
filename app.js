const headDropdown = document.getElementById('head-form');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.querySelector('#catchphrase-button');

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

const catchphrases = [];

headDropdown.addEventListener('change', () => {
    headEl.textContent = '';
    const value = headDropdown.value;
    headCount++;
    let img = document.createElement('img');
    img.src = `./assets/${value}-head.png`;
    headEl.append(img);
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    middleEl.textContent = '';
    const value = middleDropdown.value;
    middleCount++;
    let img = document.createElement('img');
    img.src = `./assets/${value}-middle.png`;
    middleEl.append(img);
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    bottomEl.textContent = '';
    const value = bottomDropdown.value;
    bottomCount++;
    let img = document.createElement('img');
    img.src = `./assets/${value}-pants.png`;
    bottomEl.append(img);
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    chatchphrasesEl.textContent = '';

    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);

    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = '';
    let report = `You have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times. And nobody can forget your character's classic catchphrases:`;
    reportEl.append(report);
}

function displayCatchphrases() {
    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.textContent = catchphrase;
        // catchphrases.push(p);
        chatchphrasesEl.append(p);
    }
}
