function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Email não deve estar vazio"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email invalido"
    }else {
        error.email = ""
    }

    if(values.senha === ""){
        error.senha = "Senha não deve estar vazia"
    }else if(!senha_pattern.test(values.senha)) {
        error.senha = "Senha deve possuir mais caracteres"
    }else {
        error.senha = ""
    }

    if(values.las === ""){
        error.las = "LAS não deve estar vazia"
    }else if(!senha_pattern.test(values.las)) {
        error.las = "Mais caracteres?"
    }else {
        error.las = ""
    }
    return error;
}

export default Validation;