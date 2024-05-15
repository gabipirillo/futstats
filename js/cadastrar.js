document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: document.querySelector("#nome").value,
        time: document.querySelector("#time").value,
        gols: document.querySelector("#gols").value,
        assistencias: document.querySelector("#assistencias").value,
        foto: document.querySelector("#foto").value
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    salvar(jogador)
    // Redirecionar o usuário para a página inicial
})

function salvar(jogador){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.href = "./../index.html"

}