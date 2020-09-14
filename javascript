function limpar(){
    document.getElementById('visor').value='';
}

function numero(valor){
    document.getElementById('visor').value += valor;
}

function conta(){

    var resu = 0;
    resu = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    // variavel EVAL é utilizada para fazer calculos, achei interente usar ela. Porque ela facilita o uso do codigo, em vez de utilizar 4 linhas, eu utilizei uma pequena function pra isso :D 
    document.getElementById('visor').value = eval(resu);
}
