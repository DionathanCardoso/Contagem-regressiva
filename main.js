'use strict';
/*
O número precisava de mais um digito e a função 
formatarDigito ficou com esse incumbência. 
*/
const formatarDigito = (digito) => {
    let formatar = `${digito}`;

    if (formatar.length == 1) {
        formatar = `0${digito}`
    }
    return formatar
}
/*
A função atualizar logo abaixo tem como objetivo
colocar a contage na tela (viewport) para o usuário.
*/
const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const qtdSegundos =Math.floor(tempo % 60);
    segundos.textContent = formatarDigito(qtdSegundos);

    const minutos = document.getElementById('minutos');
    const qtdMinutos = Math.floor((tempo % (60*60))/60);
    minutos.textContent = formatarDigito(qtdMinutos);
    
    const horas = document.getElementById('horas');
    const qtdHoras = Math.floor((tempo % (60*60*24))/(60*60));
    horas.textContent = formatarDigito(qtdHoras);
    
    const dias = document.getElementById('dias');
    const qtdDias = Math.floor(tempo / (60*60*24));
    dias.textContent = formatarDigito(qtdDias);
    
}
/*
A função contagemRegreciva fará que o tempo seja contado
de trás para frente sendo assim uma contage regressiva.
*/
const contagemRegreciva = (tempo) => {
    const paraContagem = () => clearInterval(id);
    const contar = () => {
        if (tempo === 0) {
            paraContagem();
        }
        atualizar(tempo);
        tempo--
    }
    const id = setInterval(contar, 1000);
}
const tempoRestante = ()=>{
    //1 de janeiro de 1970
    const dataEvento = new Date('2024-01-23  20:00:00');
    const hoje = Date.now();
    return (Math.floor(dataEvento-hoje)/1000)
}

contagemRegreciva(tempoRestante());
