$(document).ready(()=>{
    $('#bton').click(()=>{
        message = $('#entrada').val();
        message = message.toLowerCase();
        checkString();
        if(message === "") {
            $('#salida').removeClass('d-none');
            $('#salida').addClass('d-block');
            const numberWithPoints = resultado.toLocaleString().replace(/,/g, '.');
            $('#salida').html(`${numberWithPoints}`);
            $('.alert').removeClass('d-block');
            $('.alert').addClass('d-none');
        }else {
            let arr = message.split(" ");
            $('.alert').removeClass('d-none');
            $('.alert').addClass('d-block');
            $('.alert').html(`Please write correctly.  <b>${arr[0]}</b>`);
        }
        resultado = 0;
        list = [];
    })
});