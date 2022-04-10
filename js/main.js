window.addEventListener('load', () => {
    const inputCep = document.querySelector('#cep')
    receberCep(inputCep)
});

const receberCep = (input) => {
    const apiCep = addEventListener('focusout', () => {
        const cep = input.value
        getCepApi(cep)
    });
}

async function getCepApi(cep) {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await request.json()
    const inputCidade = document.querySelector("#cidade")
    const inputEstado = document.querySelector("#estado")

    inputCidade.value = data.localidade
    inputEstado.value = data.uf

}