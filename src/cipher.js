window.cipher = {
    encode: (offset, string) => {
        let encoded = '';
        offset = parseInt(offset);
        for (let i = 0; i < string.length; i++) {
            const ASCII = string[i].charCodeAt();
            let encodedASCII;
            if (ASCII >= 65 && ASCII <= 90) {
                encodedASCII = (offset + ASCII - 65) % 26 + 65;
                if (encodedASCII < 65) {
                    encodedASCII = (offset + ASCII - 65) % 26 + 91;
                }
            } else if (ASCII >= 97 && ASCII <= 122) {
                encodedASCII = (offset + ASCII - 97) % 26 + 97;
                if (encodedASCII < 97) {
                    encodedASCII = (offset + ASCII - 97) % 26 + 123;
                }
            } else if (ASCII >= 48 && ASCII <= 57) {
                encodedASCII = (offset + ASCII - 48) % 10 + 48;
                if (encodedASCII < 48) {
                    encodedASCII = (offset + ASCII - 48) % 10 + 58;
                }
            } else if (ASCII >= 32 && ASCII <= 47) {
                encodedASCII = (offset + ASCII - 32) % 16 + 32;
                if (encodedASCII < 32) {
                    encodedASCII = (offset + ASCII - 32) % 16 + 48;
                }
            } else if (ASCII >= 58 && ASCII <= 96) {
                encodedASCII = (offset + ASCII - 58) % 39 + 58;
                if (encodedASCII < 58) {
                    encodedASCII = (offset + ASCII - 58) % 39 + 97;
                }
            } else if (ASCII >= 123 && ASCII <= 254) {
                encodedASCII = (offset + ASCII - 123) % 132 + 123;
                if (encodedASCII < 123) {
                    encodedASCII = (offset + ASCII - 123) % 132 + 255;
                }
            }
            encoded += String.fromCharCode(encodedASCII);
        }
        return encoded;
    },
    decode: (offset, string) => {
        let decoded = '';
        offset = parseInt(offset);
        decoded = cipher.encode(-offset, string);
        return decoded;
    },
};


// window.cipher = {
//     encode: (offset, string) => {
//         let encoded = '';
//         offset = parseInt(offset);
//         for (let i = 0; i < string.length; i++) {
//             const ASCII = string[i].charCodeAt();
//             let encodedASCII;
//             if (ASCII >= 32 && ASCII <= 254) {
//                 encodedASCII = (ASCII - 32 + offset) % 222 + 32;
//                 if (encodedASCII < 32) {
//                     encodedASCII = (ASCII - 32 + offset) % 222 + 254;
//                 }
//             }
//             encoded += String.fromCharCode(encodedASCII);
//         }
//         return encoded;
//     },
//     decode: (offset, string) => {
//         let decoded = '';
//         offset = parseInt(offset);
//         for (let i = 0; i < string.length; i++) {
//             const ASCII = string[i].charCodeAt();
//             let decodedASCII;
//             if (ASCII >= 32 && ASCII <= 254) {
//                 decodedASCII = (ASCII - offset % 222 - 32) + 32;
//                 if (decodedASCII >= 254) {
//                     decodedASCII = (ASCII - offset % 222 - 254) + 32;
//                 }
//             }
//             decoded += String.fromCharCode(decodedASCII);
//         }
//         return decoded;
//     },
// };




// window.cipher = {
//     encode: (offset, string) => {
//         string = string.toUpperCase();
//         let encoded = '';
//         for (let i = 0; i < string.length; i++) {
//             const ASCII = string[i].charCodeAt();
//             if (ASCII >= 65 && ASCII <= 90) {
//                 encoded += String.fromCharCode((parseInt(offset) + ASCII - 65) % 26 + 65);
//             } else {
//                 encoded += string[i];
//             }
//         }
//         return encoded;
//     },
//     decode: (offset, string) => {
//         string = string.toUpperCase();
//         let decoded = '';
//         for (let i = 0; i < string.length; i++) {
//             const ASCII = string[i].charCodeAt();
//             if (ASCII >= 65 && ASCII <= 90) {
//                 if (ASCII >= 65 + parseInt(offset) % 26) {
//                     decoded += String.fromCharCode((ASCII - parseInt(offset) % 26 - 65) + 65);
//                 } else {
//                     decoded += String.fromCharCode((ASCII - parseInt(offset) % 26 + 26));
//                 }
//             } else {
//                 decoded += string[i];
//             }
//         }
//         return decoded;
//     },
// };