var taxa = 5;
    var quan = document.querySelectorAll('input[type="number"]');
    var res = document.getElementById('res');
    var valorSemanal = document.getElementById('totalSemana');
    var taxaExtra = document.getElementById('valorExtra');

    // Adiciona um event listener a cada input
    quan.forEach(function(input) {
        input.addEventListener('input', somar);
    });

    // Adiciona um event listener ao input taxaExtra
    taxaExtra.addEventListener('input', somar);

    function somar() {
        var total = 0;
        var totalInputsPreenchidos = 0; // Inicializa a contagem de inputs preenchidos

        // Itera sobre todos os inputs e calcula a soma e a contagem dos inputs preenchidos
        quan.forEach(function(input) {
            var valorDiaria = Number(input.value);
            total += valorDiaria;
            if (input.value !== '') { // Verifica se o input foi preenchido
                totalInputsPreenchidos++; // Incrementa a contagem de inputs preenchidos
            }
        });

        // Calcula o total com a taxa
        var totalComTaxa = total * taxa;

        // Calcula o valor extra se houver um valor
        var extraTotal = taxaExtra.value ? Number(taxaExtra.value) * 2 : 0;

        // Calcula o valor semanal excluindo o valor extra
        var valorSemanalCalculado = (totalInputsPreenchidos - (taxaExtra.value ? 1 : 0)) * 60 + totalComTaxa + extraTotal;
        
        // Atualiza os elementos HTML com os resultados
        res.innerHTML = totalComTaxa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        valorSemanal.innerHTML = valorSemanalCalculado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }