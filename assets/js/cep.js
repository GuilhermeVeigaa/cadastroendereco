function searchZip() {
    let zip = document.getElementById('inputcep').value;
    

    if(zip !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + zip;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function() {
            if(req.status === 200){
                let adress = JSON.parse(req.response)
                document.getElementById("inputadress").value = adress.street;
                document.getElementById("inputbairro").value = adress.neighborhood;
                document.getElementById("inputcity").value = adress.city;
                document.getElementById("inputstate").value = adress.state;

                if(adress.street === undefined) {
                    document.getElementById("inputadress").value = "" 
                }
                if(adress.neighborhood === undefined) {
                    document.getElementById("inputbairro").value = ""
                }
            }
            else if(req.status === 404){
                alert("CEP inválido");
            }
            else {
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function() {
    let inputcep = document.getElementById("inputcep");
    inputcep.addEventListener("blur", searchZip);
}