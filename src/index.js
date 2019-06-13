const btnReturn = document.getElementById('return');
const btnLogin = document.getElementById('login')
const login = document.getElementById('sectionLogin');
const tryAgain = document.getElementById('sectionTryAgain');
tryAgain.classList.add('hide');
const bloqued = document.getElementById('sectionBloqued');
bloqued.classList.add('hide');
const mainCipher = document.getElementById('sectionCipher');
mainCipher.classList.add('hide');
document.getElementById('password').focus();

const reTry = () => {
    login.classList.remove('hide');
    tryAgain.classList.add('hide');
};

let acum = 3;
const loginAccess = () => {
    const password = document.getElementById('password').value;
    acum--;
    while (acum >= 0) {

        if (password === 'LABORATORIA') {
            mainCipher.classList.remove('hide');
            login.classList.add('hide');
        } else if (acum === 0) {
            bloqued.classList.remove('hide');
            login.classList.add('hide');

        } else {
            tryAgain.classList.remove('hide');
            login.classList.add('hide');
            document.getElementById('try').innerHTML = `Te quedan ${acum} intentos`;
            document.getElementById('password').value = null;
            btnReturn.focus();
        }
        break;
    }
    document.getElementById('password').focus();
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
    const tocode = document.getElementById('text').value;
    const code = parseInt(document.getElementById('offset').value);
    document.getElementById('text').value = cipher.encode(code, tocode);
});

decipherBtn.addEventListener('click', () => {
    const tocode = document.getElementById('text').value;
    const code = parseInt(document.getElementById('offset').value);
    document.getElementById('text').value = cipher.decode(code, tocode);
});

login.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        btnLogin.click();
    }
});