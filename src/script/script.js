$(document).ready(()=>{
    $('#btn').click(()=>{
        message = $('#entrada').val();
        message = message.toLowerCase();
        checkString();
        if(message === "") {
            const numberWithPoints = resultado.toLocaleString().replace(/,/g, '.');
            $('#salida').removeClass('d-none');
            $('#salida').addClass('d-block');
            $('#salida').html(`${numberWithPoints}`);
            $('.alert').removeClass('d-block');
            $('.alert').addClass('d-none');
        }else {
            $('#salida').removeClass('d-block');
            $('#salida').addClass('d-none');
            let arr = message.split(" ");
            $('.alert').removeClass('d-none');
            $('.alert').addClass('d-block');
            $('.alert').html(/[0-9]/.test(message) ? `No numbers please.  <b>${arr[0]}</b>` : `Please write correctly.  <b>${arr[0]}</b>`);
        }
        resultado = 0;
        list = [];
    })
});