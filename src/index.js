const btnReturn = document.getElementById('return');
const btnLogin = document.getElementById('login');
const login = document.getElementById('sectionLogin');
const tryAgain = document.getElementById('sectionTryAgain');
tryAgain.classList.add('hide');
const bloqued = document.getElementById('sectionBloqued');
bloqued.classList.add('hide');
const mainCipher = document.getElementById('sectionCipher');
mainCipher.classList.add('hide');

const reTry = () => {
    login.classList.remove('hide');
    tryAgain.classList.add('hide');
};
let acum = 3;
const loginAccess = () => {
    const password = document.getElementById('password').value;
    while (!(password === 'LABORATORIA')) {
        acum--;
        while (!(acum > 0)) {
            bloqued.classList.remove('hide');
            login.classList.add('hide');
            break;
        }
        tryAgain.classList.remove('hide');
        login.classList.add('hide');
        document.getElementById('try').innerHTML = `Te quedan ${acum} intentos`;
        document.getElementById('password').value = null;
        break;
    }
    mainCipher.classList.remove('hide');
    login.classList.add('hide');
}

btnLogin.addEventListener('click', loginAccess);
btnReturn.addEventListener('click', reTry);


const cipherBtn = document.getElementById('cipher');
const clearBtn = document.getElementById('clear');
const decipherBtn = document.getElementById('decipher');

const Clear = () => {
    document.getElementById('text').value = '';
    document.getElementById('offset').value = '';
};

clearBtn.addEventListener('click', Clear);

cipherBtn.addEventListener('click', () => {
    const tocode = document.getElementById('text').value.toUpperCase();
    const code = parseInt(document.getElementById('offset').value);
    document.getElementById('text').value = cipher.encode(code, tocode);
});

decipherBtn.addEventListener('click', () => {
    const tocode = document.getElementById('text').value.toUpperCase();
    const code = parseInt(document.getElementById('offset').value);
    document.getElementById('text').value = cipher.decode(code, tocode);
});