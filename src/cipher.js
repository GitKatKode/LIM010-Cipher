window.cipher = {
    encode: (offset, string) => {
        let encoded = '';
        for (let i = 0; i < string.length; i++) {
            const ASCII = string[i].charCodeAt();
            if (ASCII >= 65 && ASCII <= 90) {
                encoded += String.fromCharCode((parseInt(offset) + ASCII - 65) % 26 + 65);
            } else {
                encoded += string[i];
            }
        }
        return encoded;
    },
    decode: (offset, string) => {
        let decoded = '';
        for (let i = 0; i < string.length; i++) {
            const ASCII = string[i].charCodeAt();
            if (ASCII >= 65 && ASCII <= 90) {
                if (ASCII >= 65 + parseInt(offset) % 26) {
                    decoded += String.fromCharCode((ASCII - parseInt(offset) % 26 - 65) + 65);
                } else {
                    decoded += String.fromCharCode((ASCII - parseInt(offset) % 26 + 26));
                }
            } else {
                decoded += string[i];
            }
        }
        return decoded;
    },
};



















window.cipher = {
    encode: (offset, phrase) => {
        let encoded = '';
        for (let i = 0; i < phrase.length; i++) {
            let asciiNum = phrase[i].charCodeAt();
            if (asciiNum >= 65 && asciiNum <= 90) {
                encoded += String.fromCharCode((parseInt(offset) + asciiNum - 65) % 26 + 65);
            } else {
                encoded += phrase[i];
            }
        }
        return encoded;
    },
    decode: (offset, phrase) => {
        let decoded = '';
        for (let i = 0; i < phrase.length; i++) {
            let asciiNum = phrase[i].charCodeAt();
            if ((asciiNum >= 65) && (asciiNum <= 90)) {
                if (asciiNum >= 65 + parseInt(offset) % 26) {
                    decoded += String.fromCharCode((asciiNum - parseInt(offset) % 26 - 65) + 65);
                } else {
                    decoded += String.fromCharCode((asciiNum - parseInt(offset) % 26 + 26));
                }
            } else {
                decoded += phrase[i];
            }
        }
        return decoded;
    },
    createCipherWithOffset: (offset) => {
        return {
            encode: (string) => { cipher.encode(offset, string); },
            decode: (string) => { cipher.decode(offset, string); }
        }
    }
}