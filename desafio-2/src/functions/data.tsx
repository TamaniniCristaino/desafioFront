function dataAtual() {
    let dataAtual: string = ''
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;

    return dataAtual
}

function diaAtual() {
    let diaAtual: string = ''
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    diaAtual = dia;

    return diaAtual
}


function mesAtual() {
    let mesAtual: number = 0
    var data = new Date();
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    mesAtual = parseInt(mes);

    return mesAtual
}

function anoAtual() {
    let anoAtual: string = ''
    var data = new Date();
    var ano = data.getFullYear();
    anoAtual = `${ano}`;

    return anoAtual
}

function dataFormatada(date: string) {
    let dataform: string = ''
    var data = new Date(date);
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataform = dia + '/' + mes + '/' + ano;

    return dataform
}

export default {
    dataAtual,
    diaAtual,
    mesAtual,
    anoAtual,
    dataFormatada
}