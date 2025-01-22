$(document).ready(()=>{
    $('#bton').click(()=>{
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
        }else if (/[0-9]/.test(message)){
            $('#salida').removeClass('d-block');
            $('#salida').addClass('d-none');
            let arr = message.split(" ");
            $('.alert').removeClass('d-none');
            $('.alert').addClass('d-block');
            $('.alert').html(`No numbers please.  <b>${arr[0]}</b>`);
        }else {
            $('#salida').removeClass('d-block');
            $('#salida').addClass('d-none');
            let arr = message.split(" ");
            $('.alert').removeClass('d-none');
            $('.alert').addClass('d-block');
            $('.alert').html(`Please write correctly.  <b>${arr[0]}</b>`);
        }
        resultado = 0;
        list = [];
    })
});