let cards = {
    // Armazena as informações dos cards base do site
    '1': {
        image: 'assets/img/image1.png',
        tag: 'Camisetas',
        name: 'Lightweight Jacket',
        info: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        price: 'R$ 100.00',
        id: '1'
    },
    '2': {
        image: 'assets/img/image2.png',
        tag: 'Acessórios',
        name: 'Black Hat',
        info: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        price: 'R$ 100.00',
        id: '2'
    },
    '3': {
        image: 'assets/img/image3.png',
        tag: 'Acessórios',
        name: 'Mask',
        info: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        price: 'R$ 40.00'
,        id: '3'
    },
    '4': {
        image: 'assets/img/image4.png',
        tag: 'Camisetas',
        name: 'T-Shirt',
        info: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        price: 'R$ 100.00',
        id: '4'
    },
    '5': {
        image: 'assets/img/image5.png',
        tag: 'Camisetas',
        name: 'Short-Sleeve T-Shirt',
        info: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        price: 'R$ 100.00',
        id: '5'
    },
    '6': {
        image: 'assets/img/image6.png',
        tag: 'Camisetas',
        name: 'Champion Packable Jacket',
        info: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        price: 'R$ 100.00',
        id: '6'
    }
}

// Função para criar cada card
function createCard(card){
    // Criar elementos do card
    let cardConteiner = document.createElement('div')
    let figureConteiner = document.createElement('figure')
    let cardImage = document.createElement('img')
    let infoConteiner = document.createElement('div')
    let itemTag = document.createElement('span')
    let itemName = document.createElement('h3')
    let itemInfo = document.createElement('span')
    let itemPrice = document.createElement('span')
    let itemAdd = document.createElement('a')

    // Adicionar classes e ID's aos elementos do card
    cardConteiner.classList.add('vitrine--card')
    figureConteiner.classList.add('vitrine--card-figure')
    infoConteiner.classList.add('vitrine--card-info-conteiner')
    itemTag.classList.add('vitrine--card-tag')
    itemName.classList.add('vitrine--card-name')
    itemInfo.classList.add('vitrine--card-info')
    itemPrice.classList.add('vitrine--card-price')
    itemAdd.classList.add('vitrine--card-add')
    cardConteiner.id = `vitrine-${card.id}`

    // Adicionar conteúdo em cada elemento
    cardImage.src = card.image
    itemTag.innerText = card.tag
    itemName.innerText = card.name
    itemInfo.innerText = card.info
    itemPrice.innerText = card.price
    itemAdd.innerText = 'Adicionar ao carrinho'

    // Adicionar elementos dentro de seus respectivos 'parents'
    cardConteiner.appendChild(figureConteiner)
    cardConteiner.appendChild(infoConteiner)
    figureConteiner.appendChild(cardImage)
    infoConteiner.appendChild(itemTag)
    infoConteiner.appendChild(itemName)
    infoConteiner.appendChild(itemInfo)
    infoConteiner.appendChild(itemPrice)
    infoConteiner.appendChild(itemAdd)

    // Adicionar o card à vitrine
    let vitrine = document.getElementsByClassName('vitrine')[0]
    vitrine.appendChild(cardConteiner)
}

// Função para adicionar elementos para o carrinho vazio
function emptyCart() {
    // Criar os elementos do carrinho sem itens
    let emptyCartConteiner = document.createElement('div')
    let emptyCartTitle = document.createElement('h2')
    let emptyCartAdd = document.createElement('a')

    // Adicionar texto nos elementos
    emptyCartTitle.innerText = 'Carrinho Vazio'
    emptyCartAdd.innerText = 'Adicionar itens'

    // Adicionar classes aos elementos
    emptyCartConteiner.classList.add('carrinho--vazio-conteiner')
    emptyCartAdd.classList.add('carrinho--card-add')

    // Adicionar elementos em seu parent
    emptyCartConteiner.appendChild(emptyCartTitle)
    emptyCartConteiner.appendChild(emptyCartAdd)

    // Adicionar conteiner de elementos no carrinho
    carrinho = document.getElementsByClassName('carrinho--lista')[0]
    carrinho.appendChild(emptyCartConteiner)

    // Desativa o elemento de quantidade de itens no carrinho
    let carrinhoQuantidadeItens = document.getElementsByClassName('carrinho-preço')[0]
    carrinhoQuantidadeItens.style.display = 'none'

}

// Função para adicionar card ao carrinho
function addToCart(event) {
    // Seleciona o card clicado
    const cardID = event.target.parentNode.parentNode.id        // Seleciona o ID do card
    const card = cards[cardID.split('-')[1]]                    // Seleciona o card com o mesmo ID

    // Seleciona o carrinho
    let carrinho = document.getElementsByClassName('carrinho--lista')[0]

    // Criar os elementos que irão dentro do item no carrinho
    let cardConteiner = document.createElement('li')
    let figureConteiner = document.createElement('figure')
    let infoConteiner = document.createElement('div')
    let itemImage = document.createElement('img')
    let itemName = document.createElement('h3')
    let itemPrice = document.createElement('span')                                  
    let removeCard = document.createElement('a')

    // Adicionar Classes nos items do carrinho
    cardConteiner.classList.add('carrinho--card')
    figureConteiner.classList.add('carrinho--card-figure')
    infoConteiner.classList.add('carrinho--card-info')
    itemName.classList.add('carrinho--card-name')
    itemPrice.classList.add('carrinho--card-price')
    removeCard.classList.add('carrinho--card-remove')

    // Adicionar conteúdo nos elementos
    itemImage.src = card.image
    itemName.innerText = card.name
    itemPrice.innerText = card.price
    removeCard.innerText = 'Remover produto'

    // Adicionar elementos dentro de seus respectivos 'parents'
    cardConteiner.appendChild(figureConteiner)
    cardConteiner.appendChild(infoConteiner)
    figureConteiner.appendChild(itemImage)
    infoConteiner.appendChild(itemName)
    infoConteiner.appendChild(itemPrice)
    infoConteiner.appendChild(removeCard)

    // Adicionar a função de remover produto
    removeCard.addEventListener('click', function () {
        cardConteiner.remove()
        // Verifica se o carrinho ficou vazio após remover o item para adicionar elementos do carrinho vazio
        if (carrinho.children.length == 0) {
            emptyCart()
        }
    })

    // Verifica se o carrinho está vazio para remover o elemento padrão
    const carrinhoVazio = carrinho.children[0].nodeName == 'DIV'
    if (carrinhoVazio) {
            carrinho.removeChild(carrinho.children[0])
    }
    // Adicionar itemConteiner em carrinho
    carrinho.appendChild(cardConteiner)

    // Ativa o elemento de quantidade de itens no carrinho
    let carrinhoQuantidadeItens = document.getElementsByClassName('carrinho-preço')[0]
    carrinhoQuantidadeItens.style.display = 'flex'
}


// Criar todos os cards base
for(const card of Object.values(cards)) {
    createCard(card)
}

// Criar elemento padrão do carrinho
emptyCart()

// Adicionar eventListener em cada botão de 'Adicionar ao carrinho'
addButton = document.getElementsByClassName('vitrine--card-add')
for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart)
}