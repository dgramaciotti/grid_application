document.getElementById('sorteado').style.display = "none";
const draw = function (){
    let text = document.getElementById('texto');
    let aux = text.value;
    if(aux){
        aux = aux.replace(/\n/g,',');
        let palavras = aux.split(',');
        let index = Math.floor(Math.random()*palavras.length);
        let sorteado = palavras[index];
        let horario = new Date().getTime();
        document.getElementById('sorteado').style.display = "inline-block";
        document.getElementById('sorteado').innerHTML = sorteado;
    }
}
document.getElementById('button').addEventListener("click",draw);