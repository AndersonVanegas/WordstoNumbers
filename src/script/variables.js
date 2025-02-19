const decena = [
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
    {name: 'ten', num: 10},
    {name: 'eleven', num:11},
    {name: 'twelve', num:12},
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
let resultado = 0;//Donde se ejecutaran los operaciones en el transcurso de las funciones
let list = [];//Donde se almacenara los numeros dependiendo de la cantidad de calculos
let message;//Esta sera la entrada por parte del usuario
let NumericUnities = [];//Donde se almacenan las unidades numericas
class LargeNumber {
    constructor(name,num){
        this.name = name;
        this.num = num;
    }
    Check(){
        let reg;
        let checked = false;
        reg = new RegExp(`^${this.name}`);
        if(reg.test(message)) {
            resultado *= this.num;
            message = message.replace(reg,'');
            checked = true;
        }else{
            checked = false;
        }
        return checked;
    }
}
const Hundred = new LargeNumber('hundred',10**2);
const addNumericUnity = (name,num) => NumericUnities.push(new LargeNumber(name,num));
addNumericUnity('thousand',10**3);
addNumericUnity('million',10**6);
addNumericUnity('billion',10**9);
addNumericUnity('trillion',10**12);
addNumericUnity('quadrillion',10**15);
NumericUnities = NumericUnities.reverse();