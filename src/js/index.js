/*
   OBJETIVO- quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuário e esconder o conteudo da barra anterior

   - passo 1- dar um jeito de pegar os elementos que representam as abas no HTML
 
   - passo 2 - dar um jeito de identificar o clique no elemento aba

   - passo 3 - quando o usuário clicar, desmarcar a aba selecionada

   - passo 4 - marcar a aba marcada como selecionado

   - passo 5 - esconder o conteudo anterior

   - passo 6 - mostrar o conteudo da aba selecionada
*/

const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        
        mostrarInfomacoesDaAba(aba)

    });
});

function selecionarAba(aba) {

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");

}

function mostrarInfomacoesDaAba (aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
        informacaoASerMostrada.classList.add("selecionado");
}