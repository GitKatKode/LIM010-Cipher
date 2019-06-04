const returnBtn = document.getElementById('return');
const loginBtn = document.getElementById('login');
const login = document.getElementById('section1');
const tryAgain = document.getElementById('section2');
tryAgain.style.display = 'none';
const forbidden = document.getElementById('section3');
forbidden.style.display = 'none';
const kripto = document.getElementById('section4');
kripto.style.display = 'none';

const Back = () => {
    login.style.display = 'flex';
    tryAgain.style.display = 'none';
};
let acum = 3;
const LoginBtn = () => {
    const password = document.getElementById('password').value;
    if (password === 'LABORATORIA') {
        kripto.style.display = 'flex';
        login.style.display = 'none';
    } else {
        acum--;
        if (acum > 0) {
            tryAgain.style.display = 'flex';
            login.style.display = 'none';
            document.getElementById('try').innerHTML = `Te quedan ${acum} intentos`;
            document.getElementById('password').value = null;
        } else {
            forbidden.style.display = 'flex';
            login.style.display = 'none';
        }
    }
}

loginBtn.addEventListener('click', LoginBtn);
returnBtn.addEventListener('click', Back);