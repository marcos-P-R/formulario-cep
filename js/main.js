window.addEventListener('load', () => {
    const inputCep = document.querySelector('#cep');
    receberCep(inputCep);
});

const receberCep = (input) => {
    const apiCep = addEventListener('focusout', () => {
        const cep = input.value;
        getCepApi(cep);
    });
}

async function getCepApi(cep) {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await request.json();
    const inputCidade = document.querySelector("#cidade");
    const inputEstado = document.querySelector("#estado");
    const inputBairro = document.querySelector("#bairro");
    const inputComplemento = document.querySelector("#complemento");
    const inputLogradouro = document.querySelector("#logradouro");

    inputCidade.value = data.localidade;
    inputEstado.value = data.uf;
    inputBairro.value = data.bairro;
    inputComplemento.value = data.complemento;
    inputLogradouro.value = data.logradouro;
}