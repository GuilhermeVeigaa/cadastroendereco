$(document).ready(function() {
    var cpf_field = document.getElementById('inputcpf')

    $(cpf_field).blur(function() {
        var cpf = $(cpf_field).val()
        cpf = cpf.replace(/\D/g, ""); 

        if( cpf.length == 11) {
            var v = []
            
            //validação do primeiro digito
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //validação do segundo digito.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //return true if value is expected 
            if ((v[0] != cpf[9]) || (v[1] != cpf[10])) {
                $('#modalCpf').modal('show');
                $(cpf_field).val("")
                $(cpf_field).focus()
            } else {
               
            }
        } 
    });
});

console.log(cpf[13])