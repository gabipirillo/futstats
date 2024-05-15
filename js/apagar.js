function apagar(id){
    // Pegar os jogadores do localStorage
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    // Filtrar os jogadores para remover o jogador com o id passado como parâmetro
    const jogadoresFiltro = jogadores.filter(jogador => jogador.id != id)
    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadoresFiltro))
    // Remover o item da página ou recarregar a página
    window.location.reload()
    document.querySelector(id).remove()


}