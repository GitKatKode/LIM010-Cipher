const btnReturn = document.getElementById('return');
const btnLogin = document.getElementById('login');
const login = document.getElementById('sectionLogin');
const tryAgain = document.getElementById('sectionTryAgain');
tryAgain.style.display = 'none';
const bloqued = document.getElementById('sectionBloqued');
bloqued.style.display = 'none';
const mainCipher = document.getElementById('sectionCipher');
mainCipher.style.display = 'none';

const reTry = () => {
    login.style.display = 'flex';
    tryAgain.style.display = 'none';
};
let acum = 3;
const loginAccess = () => {
    const password = document.getElementById('password').value;
    while (!(password === 'LABORATORIA')) {
        acum--;
        while (!(acum > 0)) {
            bloqued.style.display = 'flex';
            login.style.display = 'none';
            break;
        }
        tryAgain.style.display = 'flex';
        login.style.display = 'none';
        document.getElementById('try').innerHTML = `Te quedan ${acum} intentos`;
        document.getElementById('password').value = null;
        break;
    }
    mainCipher.style.display = 'flex';
    login.style.display = 'none';
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


// const password = document.getElementById('password').value;
//     if (password === 'LABORATORIA') {
//         mainCipher.style.display = 'flex';
//         login.style.display = 'none';
//     } else {
//         acum--;
//         if (acum > 0) {
//             tryAgain.style.display = 'flex';
//             login.style.display = 'none';
//             document.getElementById('try').innerHTML = `Te quedan ${acum} intentos`;
//             document.getElementById('password').value = null;
//         } else {
//             bloqued.style.display = 'flex';
//             login.style.display = 'none';
//         }
//     }