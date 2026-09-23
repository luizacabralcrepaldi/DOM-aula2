
// PARTE 1

// EXERCÍCIO 1 - Nomes que começam com A

const nomesA = document.getElementById('nomesA');
const btn1 = document.getElementById('btn1');
const resultado1 = document.getElementById('resultado1');

btn1.addEventListener('click', () => {
    const nomes = nomesA.value.split(',').map(nome => nome.trim());

    const nomesFiltrados = nomes.filter(nome =>
        nome.toLowerCase().startsWith('a')
    );

    resultado1.textContent = `Nomes com A: ${nomesFiltrados.join(', ')}`;
});


// EXERCÍCIO 2 - Notas maiores ou iguais a 7

const notasFilter = document.getElementById('notasFilter');
const btn2 = document.getElementById('btn2');
const resultado2 = document.getElementById('resultado2');

btn2.addEventListener('click', () => {
    const notas = notasFilter.value.split(',').map(nota => Number(nota.trim()));

    const notasAprovadas = notas.filter(nota => nota >= 7);

    resultado2.textContent = `Notas maiores ou iguais a 7: ${notasAprovadas.join(', ')}`;
});


// EXERCÍCIO 3 - Múltiplos de 3

const multiplos = document.getElementById('multiplos');
const btn3 = document.getElementById('btn3');
const resultado3 = document.getElementById('resultado3');

btn3.addEventListener('click', () => {
    const numeros = multiplos.value.split(',').map(numero => Number(numero.trim()));

    const numerosFiltrados = numeros.filter(numero => numero % 3 === 0);

    resultado3.textContent = `Múltiplos de 3: ${numerosFiltrados.join(', ')}`;
});


// PARTE 2

// EXERCÍCIO 4 - Primeiro número negativo

const negativos = document.getElementById('negativos');
const btn4 = document.getElementById('btn4');
const resultado4 = document.getElementById('resultado4');

btn4.addEventListener('click', () => {
    const numeros = negativos.value.split(',').map(numero => Number(numero.trim()));

    const primeiroNegativo = numeros.find(numero => numero < 0);

    if (primeiroNegativo !== undefined) {
        resultado4.textContent = `Primeiro número negativo: ${primeiroNegativo}`;
    } else {
        resultado4.textContent = 'Nenhum número negativo encontrado.';
    }
});


// EXERCÍCIO 5 - Primeiro preço acima de 100

const precosFind = document.getElementById('precosFind');
const btn5 = document.getElementById('btn5');
const resultado5 = document.getElementById('resultado5');

btn5.addEventListener('click', () => {
    const precos = precosFind.value.split(',').map(preco => Number(preco.trim()));

    const primeiroPreco = precos.find(preco => preco > 100);

    if (primeiroPreco !== undefined) {
        resultado5.textContent = `Primeiro preço acima de 100: ${primeiroPreco}`;
    } else {
        resultado5.textContent = 'Nenhum preço acima de 100 encontrado.';
    }
});


// EXERCÍCIO 6 - Primeira palavra com a letra Z

const palavrasZ = document.getElementById('palavrasZ');
const btn6 = document.getElementById('btn6');
const resultado6 = document.getElementById('resultado6');

btn6.addEventListener('click', () => {
    const palavras = palavrasZ.value.split(',').map(palavra => palavra.trim());

    const primeiraPalavra = palavras.find(palavra =>
        palavra.toLowerCase().includes('z')
    );

    if (primeiraPalavra !== undefined) {
        resultado6.textContent = `Primeira palavra com Z: ${primeiraPalavra}`;
    } else {
        resultado6.textContent = 'Nenhuma palavra com Z encontrada.';
    }
});

// PARTE 3


// EXERCÍCIO 7 - Média das idades

const idadesReduce = document.getElementById('idadesReduce');
const btn7 = document.getElementById('btn7');
const resultado7 = document.getElementById('resultado7');

btn7.addEventListener('click', () => {
    const idades = idadesReduce.value.split(',').map(idade => Number(idade.trim()));

    const soma = idades.reduce((acumulador, idade) => acumulador + idade, 0);

    const media = soma / idades.length;

    resultado7.textContent = `Média das idades: ${media}`;
});


// EXERCÍCIO 8 - Produto dos números

const numerosProduto = document.getElementById('numerosProduto');
const btn8 = document.getElementById('btn8');
const resultado8 = document.getElementById('resultado8');

btn8.addEventListener('click', () => {
    const numeros = numerosProduto.value.split(',').map(numero => Number(numero.trim()));

    const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

    resultado8.textContent = `Produto dos números: ${produto}`;
});


// EXERCÍCIO 9 - Juntar nomes

const nomesReduce = document.getElementById('nomesReduce');
const btn9 = document.getElementById('btn9');
const resultado9 = document.getElementById('resultado9');

btn9.addEventListener('click', () => {
    const nomes = nomesReduce.value.split(',').map(nome => nome.trim());

    const nomesJuntos = nomes.reduce((acumulador, nome, indice) => {
        if (indice === 0) {
            return nome;
        }

        return acumulador + ', ' + nome;
    }, '');

    resultado9.textContent = `Nomes juntos: ${nomesJuntos}`;
});



// PARTE 4


// EXERCÍCIO 10 - Frutas

const frutasFor = document.getElementById('frutasFor');
const btn10 = document.getElementById('btn10');
const resultado10 = document.getElementById('resultado10');

btn10.addEventListener('click', () => {
    resultado10.textContent = '';

    const frutas = frutasFor.value.split(',').map(fruta => fruta.trim());

    frutas.forEach(fruta => {
        const p = document.createElement('p');

        p.textContent = `Eu gosto de ${fruta}`;

        resultado10.appendChild(p);
    });
});


// EXERCÍCIO 11 - Preços com desconto


const precosDesconto = document.getElementById('precosDesconto');
const btn11 = document.getElementById('btn11');
const resultado11 = document.getElementById('resultado11');

btn11.addEventListener('click', () => {
    resultado11.textContent = '';

    const precos = precosDesconto.value.split(',').map(preco => Number(preco.trim()));

    precos.forEach(preco => {
        const precoComDesconto = preco * 0.90;

        const p = document.createElement('p');

        p.textContent = `Preço: R$ ${preco.toFixed(2)} | Com desconto: R$ ${precoComDesconto.toFixed(2)}`;

        resultado11.appendChild(p);
    });
});


// EXERCÍCIO 12 - Aprovado ou Reprovado


const notasFor = document.getElementById('notasFor');
const btn12 = document.getElementById('btn12');
const resultado12 = document.getElementById('resultado12');

btn12.addEventListener('click', () => {
    resultado12.textContent = '';

    const notas = notasFor.value.split(',').map(nota => Number(nota.trim()));

    notas.forEach(nota => {
        const p = document.createElement('p');

        if (nota >= 7) {
            p.textContent = `Nota ${nota}: Aprovado`;
        } else {
            p.textContent = `Nota ${nota}: Reprovado`;
        }

        resultado12.appendChild(p);
    });
});