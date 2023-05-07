const rand = (min, max)=> Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = ()=> String.fromCharCode(rand(65, 91));
const geraMinuscula = ()=> String.fromCharCode(rand(97, 123));
const geraNumero = ()=> String.fromCharCode(rand(48, 58));
const simbolos =',.:;{}[]@#$%^&*()--+=`~<>,?/';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha (quant, maiusculas, minusculas, numeros, simbolos){

    const senhaArray = [];
    quantNumero = Number(quant);
    for (let i = 0; i<= quantNumero; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
        
    }

    return senhaArray.join('').slice(0, quantNumero);
}