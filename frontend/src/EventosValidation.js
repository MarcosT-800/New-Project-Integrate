function Validation(values){
    let error = {}

    if(values.nome === "") {
        error.nome = "Nome não deve estar vazio"
    }
    

    if(values.data === ""){
        error.data = "data não deve estar vazia"
    }  

    if(values.horas === ""){
        error.horas = "horas não deve estar vazia"
    }  

    if(values.resumo === ""){
        error.resumo = "resumo não deve estar vazio"
    }
    if(values.organizador === ""){
        error.organizador = "Organizador não deve estar vazio"
    }
}

export default Validation;