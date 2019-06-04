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

const LoginBtn = () => {
    const password = document.getElementById('password').value;
    if (password === 'LABORATORIA') {
        kripto.style.display = 'flex';
        login.style.display = 'none';
        // } else {
        //     // let acum = 0;
        //     // for (let i = 0; i < 3; i--) {
        //     //     tryAgain.style.display = 'flex';
        //     //     document.getElementById('try').innerHTML = `aaa`;
        //     //     if (i === 0) {
        //     //         forbidden.style.display = 'flex';
        //     //     }
        //     //     acum = i--;
        // }
    }
}

loginBtn.onclick = LoginBtn;
returnBtn.onclick = Back;