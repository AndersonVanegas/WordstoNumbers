function deleteFirstSpace(){// Esta funcion se encarga de borrar los primeros espacios y lineas que ponga el usuario
    let arr;
    while(/^\s/.test(message) || /^-/.test(message)){
        arr = message.split('');
        arr[0] = '';
        message = arr.join('');
        console.log(message);
        // /^(?!.*contraseña)(?=.*\d)(?=.*[^\w\s]).{7,31}$/.test(str)
    }
}
function checkDecimals(){//Se encarga de verificar si hay texto del objeto decimals
    let bool = true;
    let reg;
    for (i of decena){
        reg = new RegExp(`^${i.name}`);//Esta expresion señala en cada ciclo el name de los objetos
        if (reg.test(message) && (resultado >= 100 || 0 === resultado)){ //Si el nombre del objeto se encuentra en la variable message y el resultado es 0 o mayor que 99, se ejecuta la instruccion
            message = message.replace(reg,'');//la palabra encontrada sera borrada de la string message
            bool = (i.num % 10) == 0 ? true : false;// Si el numero del objeto es divisible entre 10, sera true
            resultado += i.num; //Se le suma el numero del objeto al resultado
            break;
        }
    }
    return bool; //Si es true, permitira que la funcion checkUnit se ejecute
}
function checkUnit(){ //Se encarga de verificar si hay unidades y familia del 10
    let reg;
    let regteen;
    let bool;
    for (i of teenFamily){
        regteen = new RegExp(`^${i.name}`);
        if (regteen.test(message) && (resultado === 0 || (resultado % 100 === 0))){
            message = message.replace(regteen,'');
             resultado += i.num;
            break;
        }
    }
    bool = ((resultado === 0) || (resultado % 10 == 0)) && resultado != 10 ? true : false;
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
function checkShortNumber(){
    for(let i =7;i>0;i--){
        deleteFirstSpace();
        if(checkDecimals() && (i == 7 || i == 4)) continue;
        else if(i == 6 || i == 3){
            checkUnit();
            continue;
        }else if(i == 5 || i == 2){
            Hundred.Check();
            continue;
        }else break;
    }
}
function checkString(){
    for(let i = 0; i <= NumericUnities.length;i++){
        checkShortNumber();
        deleteFirstSpace();
        if(i === NumericUnities.length){
            list.push(resultado);
        }else if(NumericUnities[i].Check()){
            list.push(resultado);
            resultado = 0;
            continue;
        }
    }
    resultado = 0;
    list.forEach(element => resultado += element );
}