
let totalCarrinho = 0;
const contadorHTML = document.getElementById('contagem-carrinho');

function adicionarAoCarrinho(nome) {
    totalCarrinho++;
    contadorHTML.innerText = totalCarrinho;
    console.log(`Produto adicionado: ${nome}`);
}


let indexBanner = 0;
const vitrineBanner = document.getElementById('vitrine-banner');
const totalBanners = 3; 

function rodarBanner() {
    indexBanner++;
    if (indexBanner >= totalBanners) {
        indexBanner = 0;
    }
    vitrineBanner.style.transform = `translateX(-${indexBanner * 100}vw)`;
}


setInterval(rodarBanner, 10000);


const vitrineDestaque = document.getElementById('vitrine-destaque');
const listacartas = [
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F276.png", preco: 2550.00 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/me2/125.png", preco: 2100.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F277.png", preco: 1999.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F294.png", preco: 3500.00 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv10/232.png", preco: 1050.00 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv10/231.png", preco: 2055.00 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv10/230.png", preco: 725.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F269.png", preco: 450.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F272.png", preco: 575.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F292.png", preco: 415.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F264.png", preco: 725.00 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv10/230.png", preco: 99.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F281.png", preco: 1650.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F287.png", preco: 725.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F290.png", preco: 3000.00 }
];

listacartas.forEach(item => {
    vitrineDestaque.innerHTML += `
        <div class="card-box">
            <img src="${item.img}" alt="Carta">
            <div class="preco-tag">R$ ${item.preco.toFixed(2).replace('.',',')}</div>
            <button class="btn-carrinho" onclick="adicionarAoCarrinho('Carta Destaque')">🛒 ADICIONAR</button>
        </div>`;
});

const vitrinePromo = document.getElementById('vitrine-promo');
const listaOfertas = [
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F57.png", precoAntigo: 20.00, preco: 9.50 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/me2/129.png", precoAntigo: 200.00, preco: 165.50 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv85/122.png", precoAntigo: 0.75, preco: 0.25 },
    { img: "https://dextcg.com/cdn-cgi/image/w=640,q=75,f=auto/https://static.dextcg.com/cards/sv85/156.png", precoAntigo: 1670.00, preco: 1265.50 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F251.png", precoAntigo: 35.00, preco: 22.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F233.png", precoAntigo: 70.00, preco: 59.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F231.png", precoAntigo: 100.00, preco: 74.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F218.png", precoAntigo: 150.00, preco: 105.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F10.png", precoAntigo: 50.00, preco: 30.00 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F22.png", precoAntigo: 75.00, preco: 49.99 },
    { img: "https://dextcg.com/cdn-cgi/image/q=75/https://static.dextcg.com/cards/me25%2F43.png", precoAntigo: 65.00, preco: 39.99 }
];

listaOfertas.forEach(item => {
    vitrinePromo.innerHTML += `
        <div class="card-box">
            <span class="badge-oferta">OFERTA</span>
            <img src="${item.img}" alt="Oferta">
            <div class="container-precos">
                <span class="preco-antigo">R$ ${item.precoAntigo.toFixed(2).replace('.',',')}</span>
                <span class="preco-novo">R$ ${item.preco.toFixed(2).replace('.',',')}</span>
            </div>
            <button class="btn-carrinho" onclick="adicionarAoCarrinho('Carta Oferta')">🛒 ADICIONAR</button>
        </div>`;
});

const janelaDestaque = document.querySelector('#sessao-carrosel .janela-carrosel');
const janelaPromo = document.querySelector('#sessao-carrosel-promo .janela-carrosel');

function moverDireita() { janelaDestaque.scrollLeft += 350; }
function moverEsquerda() { janelaDestaque.scrollLeft -= 350; }

function moverDireitaPromo() { janelaPromo.scrollLeft += 350; }
function moverEsquerdaPromo() { janelaPromo.scrollLeft -= 350; }