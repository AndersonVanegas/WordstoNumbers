const decena = [
    {name: 'ten', num: 10},//
    {name: 'eleven', num:11},//
    {name: 'twelve', num:12},//
    {name: 'fifteen', num:15},//
    {name: 'teen', num:10},

    {name: 'twenty', num:20},
    {name: 'thirty', num:30},
    {name: 'forty', num:40},
    {name: 'fifty', num:50},
    {name: 'sixty', num:60},
    {name: 'seventy', num:70},
    {name: 'eighty', num:80},
    {name: 'ninety', num:90},
]
const teenFamily = [
    {name: 'thirteen', num: 13},
    {name: 'fourteen', num: 14},
    {name: 'fifteen', num: 15},
    {name: 'sixteen', num: 16},
    {name: 'seventeen', num: 17},
    {name: 'eighteen', num: 18},
    {name: 'nineteen', num: 19}
]
const unidad = [
    {name: 'zero', num: 0},
    {name: 'at', num: 1},
    {name: 'one', num: 1},
    {name: 'two', num: 2},
    {name: 'three', num: 3},
    {name: 'four', num: 4},
    {name: 'five', num: 5},
    {name: 'six', num: 6},
    {name: 'seven', num: 7},
    {name: 'eight', num: 8},
    {name: 'nine', num: 9}
]
const hundred = {name: 'hundred', num:100};
const thousand = {name: 'thousand', num: 1000};
const million = {name: 'million', num: 1000000};
let resultado = 0;
let list = [];
let message;
function deleteFirstSpace(){
    let arr;
    while(/^\s/.test(message) || /^-/.test(message)){
        arr = message.split('');
        arr[0] = '';
        message = arr.join('');
    }
}
function checkDecimals(){
    let bool = true;
    let reg;
    for (i of decena){
        reg = new RegExp(`^${i.name}`);
        if (reg.test(message) && (resultado >= 100 || 0 === resultado)){
            message = message.replace(reg,'');
            bool = (i.num % 10) == 0 && 'ten' != unidad[0].name ? true : false;
            resultado += i.num;
            break;
        }
    }
    return bool
}
function checkUnit(){ 
    let reg;
    let regteen;
    let bool;
    for (i of teenFamily){
        regteen = new RegExp(`^${i.name}`);
        if (regteen.test(message)){
            message = message.replace(regteen,'');
             resultado += i.num;
            break;
        }
    }
    bool = (resultado === 0) || (resultado % 10 == 0) ? true : false;
     if(bool){
        for (i of unidad){
        reg = new RegExp(`^${i.name}`);
            if(reg.test(message)){
                message = message.replace(reg,'');
                resultado += i.num;
                break;
             }
        }
     }
}
function checkHundred(){
    let reg;
    reg = new RegExp(`^${hundred.name}`);
    if(reg.test(message)) {// && resultado < 10
        resultado *= hundred.num;
        message = message.replace(reg,'');
    }
}
function checkThousand(){
    let reg;
    let checked = false;
    reg = new RegExp(`^${thousand.name}`);
    if(reg.test(message)) {
        resultado *= thousand.num;
        message = message.replace(reg,'');
        checked = true;
    }else{
        checked = false;
    }
    return checked;
}
function checkMillion(){
    let reg;
    let checked = false;
    reg = new RegExp(`^${million.name}`);
    if(reg.test(message)) {
        resultado *= million.num;
        message = message.replace(reg,'');
        checked = true;
    }
    return checked;
}
function checkToHundred(){
    deleteFirstSpace();
    if(checkDecimals()){ 
        deleteFirstSpace();
        checkUnit();
        deleteFirstSpace();
        checkHundred();
        deleteFirstSpace();
        if (checkDecimals()){
            deleteFirstSpace();
            checkUnit();
            deleteFirstSpace();
        }
        deleteFirstSpace();
        checkHundred();
        deleteFirstSpace();
    }
}
function checkString(){
    checkToHundred();
    if (checkMillion()){
        list.push(resultado);
        resultado = 0;
        checkToHundred();
        deleteFirstSpace();
        if (checkThousand()){
            list.push(resultado);
            resultado = 0
            checkToHundred();
            list.push(resultado);
        }else{
            list.push(resultado);
        }
    }else if(checkThousand()){
        list.push(resultado);
        resultado = 0;
        checkToHundred();
        list.push(resultado);
    }else{
        list.push(resultado);
    }
    resultado = 0;
    list.forEach(element => {
        resultado += element;
    });
}