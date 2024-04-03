// capturar evento de submit do formulário
const form = document.querySelector('#formulario');
// Prevenir o evento submit no formulário.
form.addEventListener('submit', function (e) {
    // "e" é letra universal para "evento". 
    // Prevenimos o evento de acontecer.
    e.preventDefault();
    // "e.target" me informa exatamente de onde está vindo o evento.
    // Aqui pegamos o input inteiro.
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Aqui pego exatamente o valor.
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    // Essa condicional "if" vai fazer algo caso "peso" NÃO seja verdadeiro. 
    // Vai retornar a msg 'Peso inválido'.
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    // Uso a mesma função if para checar a "altura".
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // A função "getImc()" vai calcular o IMC e ser armazenada na variável "imc".
    // OBS: Em JS posso criar e utilizar uma função em qualquer lugar do meu código.
    const imc = getImc(peso, altura);
    // A função "getNivelImc()" vai retornar o nível do imc, de acordo com o cálculo em "gerImc()".
    const nivelImc = getNivelImc(imc);
    // Msg exibida para o usuário.
    const msg = `Seu imc é: ${imc} (${nivelImc}).`;
    // Chamamos a função "setResultado()" para inserir a msg no parágrafo.
    setResultado(msg, true);
});

// A função "getImc()" vai calcular o IMC.
function getImc (peso, altura) {
   const imc = peso / (altura ** 2);
   // Retorna o IMC com 2 casas decimais, usando "toFixed".
   return imc.toFixed(2);
}


// Essa função vai pegar os níveis de cada IMC
function getNivelImc (imc) {
    // Criamos um array para obter uma lista com os valores a serem retornados.
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    // Usaremos a condição if de forma invertida aqui porque a função vai parar assim que encontrar um valor válido.
    // Vamos retornar diretamente o índice no array.
    // Como só tenho uma função dentro de "if", não é preciso usar chaves e podemos deixar o código na mesma linha.
    if (imc >= 39.9) return nivel[5];
    // Como a função vai parar quando encontrar um valor true, não é preciso utilizar "else if".
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Essa função existe exatamente para cria parágrafos.
function criaP () {
    // Esse bloco cria um parágrafo 'p' dentro da div #resultado.
    const p = document.createElement('p');
    // "classList.add" adiciona a classe ao elemento "p".
    // p.classList.add(className);
    return p;
}

// Função para criar algo dentro de #resultado.
function setResultado (msg, isValid) {
    // Pega o id da div e armazena na variável resultado.
    const resultado = document.querySelector('#resultado');
    // Zera o conteúdo de resultado, deixando-o vazio.
    resultado.innerHTML = '';
    // Cria um "p" com a função "criaP()".
    const p = criaP();
    // Esse if vai adicionar a classe 'paragrafo-resultado', caso o inpur seja válido e "bad", caso seja inválido.
    if (isValid) { // true
        p.classList.add('paragrafo-resultado');
    } else { // false
        p.classList.add('bad');
    } 

    // Seta o innerHTML do parágrafo com a msg que estamos recebendo em "msg".
    p.innerHTML = msg;
    // "appendChild" insere a variável "p" dentro de "resultado".
    resultado.appendChild(p);
}
    



