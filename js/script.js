var telaCalculada = document.querySelector('.tela-de-valores-calculados');
telaCalculada.style.display = 'none';

// Variável para armazenar o valor total inicial
var valorTotalInicial = parseFloat(document.getElementById("valortotal").value) || 0;

// Função para adicionar valor extra
function adicionarValorExtra() {
    var valorExtra = parseFloat(document.getElementById("valorExtra").value) || 0;
    var valorTotalAtual = parseFloat(document.getElementById("valortotal").value) || valorTotalInicial;
    
    // Somar o valor extra ao valor total
    var novoValorTotal = valorTotalAtual + valorExtra;

    // Atualizar o campo de valor total com o novo valor
    document.getElementById("valortotal").value = novoValorTotal.toFixed(2);
    
    // Limpar a caixa de texto
    document.getElementById("valorExtra").value = "";
}
 
 // Função para calcular os valores
 function calcularValores() {
    var taxa = parseFloat(document.getElementById("taxaatual").value) || 0;
    var diaria = parseFloat(document.getElementById("diariaatual").value) || 0;

    var totalTaxa = 0;
    var totalDias = 0;

    // Array com os IDs dos inputs dos dias da semana
    var diasSemana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

    // Iterar sobre os dias da semana
    for (var i = 0; i < diasSemana.length; i++) {
        var dia = document.getElementById(diasSemana[i]);
        var quantidade = parseInt(dia.value) || 0;

        // Se a quantidade for maior que zero, incluir no cálculo
        if (quantidade > 0) {
            totalTaxa += quantidade;
            totalDias++;
        }
    }

  

    var total = (totalTaxa * taxa) + (totalDias * diaria) ;

    // Formatando os valores como moeda brasileira
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById("valortotaltaxa").value = (totalTaxa * taxa).toFixed(2);
    document.getElementById("valortotal").value = total.toFixed(2);
}

// Adicionar event listener para cada input de dia da semana
var inputsDiasSemana = document.querySelectorAll('.tela-de-valores-calculados input[type="number"]');
inputsDiasSemana.forEach(function(input) {
    input.addEventListener('input', calcularValores);
});



    // Função para verificar se os campos de taxa e diária estão preenchidos
function verificarPreenchimento() {
        var taxa = document.getElementById("taxaatual").value.trim();
        var diaria = document.getElementById("diariaatual").value.trim();
        var botao = document.getElementById("mostrarBotao");

        // Habilitar o botão se ambos os campos estiverem preenchidos, caso contrário, desabilitar
        if (taxa !== "" && diaria !== "") {
            botao.disabled = false;
        } else {
            botao.disabled = true;
        }
    }

    // Event listener para verificar preenchimento quando os campos mudam
    document.getElementById("taxaatual").addEventListener("input", verificarPreenchimento);
    document.getElementById("diariaatual").addEventListener("input", verificarPreenchimento);


function mostrarValores() {
    var telaInicial = document.querySelector('.tela-inicial');
    
    
    telaInicial.style.display = 'none';
    telaCalculada.style.display = 'block';
    // telavaloresExtras.style.display = 'block';
}


// Calcular valores iniciais quando a página carregar
window.addEventListener('load', calcularValores);