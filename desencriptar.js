function desencriptar(texto) {
    const sustituciones = {
        '?': 'a',
        '[': 'e',
        '\\': 'i',  // Doble barra invertida para la letra 'i'
        '~': 'o',
        '+': 'u',
        '¬': 'ó',
        '(': ' ',
        ')': ' ',
        '^': 'm',
        ']': 'n',
        '=': 't',
        '`': 'c',
        '*': 'p',
        '/': 'l',
        '-': 'h',
        '{': 's',
        '%': 'b',
        '}': 'q',
        '$': 'r',
        '!': 'j',
        '¿': 'y',
        '¡': 'd',
        ';': 'f',
        '#': 'v',
        '__': 'z'
    };

    
    for (let [clave, valor] of Object.entries(sustituciones)) {
        texto = texto.replace(new RegExp(escapeRegExp(clave), 'g'), valor);
    }

    let resultado = "";

    
    for (let char of texto) {
        if (sustituciones[char] !== undefined) {
            resultado += sustituciones[char];
        } else {
            resultado += char;
        }
    }

    // Limpiar múltiples espacios
    return resultado.replace(/ +/g, ' ').trim();
}

// Función para escapar caracteres especiales en una expresión regular
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const textoCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
const textoDesencriptado = desencriptar(textoCifrado);
console.log(textoDesencriptado);
