let cards = {
    // Armazena as informações dos cards base do site
    '1': {
        image: 'assets/img/image1.png',
        tag: 'Camisetas',
        name: 'Lightweight Jacket',
        info: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        price: 'R$ 100.00',
        id: 'card-1'
    },
    '2': {
        image: 'assets/img/image2.png',
        tag: 'Acessórios',
        name: 'Black Hat',
        info: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        price: 'R$ 100.00',
        id: 'card-2'
    },
    '3': {
        image: 'assets/img/image3.png',
        tag: 'Acessórios',
        name: 'Mask',
        info: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        price: 'R$ 40.00'
,        id: 'card-3'
    },
    '4': {
        image: 'assets/img/image4.png',
        tag: 'Camisetas',
        name: 'T-Shirt',
        info: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        price: 'R$ 100.00',
        id: 'card-4'
    },
    '5': {
        image: 'assets/img/image5.png',
        tag: 'Camisetas',
        name: 'Short-Sleeve T-Shirt',
        info: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        price: 'R$ 100.00',
        id: 'card-5'
    },
    '6': {
        image: 'assets/img/image6.png',
        tag: 'Camisetas',
        name: 'Champion Packable Jacket',
        info: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        price: 'R$ 100.00',
        id: 'card-6'
    }
}

// Função para criar cada card
function createCard(card){
    // Criar elementos do card
    let cardBox = document.createElement('div')
    let figureBox = document.createElement('figure')
    let cardImage = document.createElement('img')
    let infoBox = document.createElement('div')
    let itemTag = document.createElement('span')
    let itemName = document.createElement('h3')
    let itemInfo = document.createElement('span')
    let itemPrice = document.createElement('span')
    let itemAdd = document.createElement('a')

    // Adicionar classes e ID's aos elementos do card
    cardBox.classList.add('vitrine--card')
    figureBox.classList.add('vitrine--card-figure')
    infoBox.classList.add('vitrine--card-info-box')
    itemTag.classList.add('vitrine--card-tag')
    itemName.classList.add('vitrine--card-name')
    itemInfo.classList.add('vitrine--card-info')
    itemPrice.classList.add('vitrine--card-price')
    itemAdd.classList.add('vitrine--card-add')
    cardBox.id = card.id

    // Adicionar conteúdo em cada elemento
    cardImage.src = card.image
    itemTag.innerText = card.tag
    itemName.innerText = card.name
    itemInfo.innerText = card.info
    itemPrice.innerText = card.price
    itemAdd.innerText = 'Adicionar ao carrinho'

    // Adicionar elementos dentro de seus respectivos 'parents'
    cardBox.appendChild(figureBox)
    cardBox.appendChild(infoBox)
    figureBox.appendChild(cardImage)
    infoBox.appendChild(itemTag)
    infoBox.appendChild(itemName)
    infoBox.appendChild(itemInfo)
    infoBox.appendChild(itemPrice)
    infoBox.appendChild(itemAdd)

    // Adicionar o card à vitrine
    let vitrine = document.getElementsByClassName('vitrine')[0]
    vitrine.appendChild(cardBox)
}

// Criar todos os cards base
for(const card of Object.values(cards)) {
    createCard(card)
}
