import geraSenha from "./geradores";





const gerarSenhaHTML = document.querySelector('.senhaGerada');
const quantidadeCaracteres = document.querySelector('.inputQuant')
const chkMaiusculas = document.querySelector('chkMaiusculas')
const chkMinusculas  = document.querySelector('chkMinuculas')
const chkNumber = document.querySelector('chkNumber')
const chkCaracteres = documento.querySelector('chkCaracteres')
const gerarSenhaButton = document.querySelector('gerarSenha')


export default () =>{
    gerarSenhaButton.addEventListener('click', ()=>{
    console.log(chkMaiusculas.checked)
    gerarSenhaHTML.innerHTML = gera();

    })

};

function gera(){
    const senha = geraSenha(
        quantidadeCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumber.checked,
        chkCaracteres.checked
    );
    return senha;
}