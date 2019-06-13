window.cipher = {
    encode: (offset, string) => {
        let encoded = '';
        offset = parseInt(offset);
        for (let i = 0; i < string.length; i++) {
            const ASCII = string[i].charCodeAt();
            let encodedASCII;
            if (ASCII >= 32 && ASCII <= 254) {
                encodedASCII = (ASCII - 32 + offset) % 222 + 32;
                console.log('ASCII', ASCII, 'encodedASCII', encodedASCII, 'cod1', offset);

                if (encodedASCII < 32) {
                    encodedASCII = (ASCII - 32 + offset) % 222 + 254;
                    console.log('ASCII', ASCII, 'encodedASCII', encodedASCII, 'cod2', offset);
                }
            }
            encoded += String.fromCharCode(encodedASCII);
        }
        console.log('final encoded', encoded);
        return encoded;
    },
    decode: (offset, string) => {
        let decoded = '';
        offset = parseInt(offset);
        for (let i = 0; i < string.length; i++) {
            const ASCII = string[i].charCodeAt();
            let decodedASCII;
            if (ASCII >= 32 && ASCII <= 254) {
                decodedASCII = (ASCII - offset % 222 - 32) + 32;
                console.log('ASCII', ASCII, 'decodedASCII', decodedASCII, 'decod1', offset);
                if (decodedASCII < 32) {
                    decodedASCII = (ASCII - offset % 222 - 254) + 32;
                    console.log('ASCII', ASCII, 'decodedASCII', decodedASCII, 'decod2', offset);
                }
            }

            decoded += String.fromCharCode(decodedASCII);
        }
        console.log('final decoded', decoded);
        return decoded;
    },
};



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