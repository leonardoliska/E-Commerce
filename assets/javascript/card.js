cards = [
    {
        image: 'assets/img/image1.png',
        tag: 'Camisetas',
        name: 'Lightweight Jacket',
        info: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        price: 'R$ 100.00'
    },
    {
        image: 'assets/img/image2.png',
        tag: 'Acessórios',
        name: 'Black Hat',
        info: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        price: 'R$ 100.00'
    },
    {
        image: 'assets/img/image3.png',
        tag: 'Acessórios',
        name: 'Mask',
        info: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        price: 'R$ 40.00'
    },
    {
        image: 'assets/img/image4.png',
        tag: 'Camisetas',
        name: 'T-Shirt',
        info: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        price: 'R$ 100.00'
    },
    {
        image: 'assets/img/image5.png',
        tag: 'Camisetas',
        name: 'Short-Sleeve T-Shirt',
        info: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        price: 'R$ 100.00'
    },
    {
        image: 'assets/img/image6.png',
        tag: 'Camisetas',
        name: 'Champion Packable Jacket',
        info: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        price: 'R$ 100.00'
    }
]

function createCard(card){
    // Criar o conteiner do card
    cardBox = document.createElement('div')
    cardBox.classList.add('card')

    // Criar o conteiner da imagem
    figureBox = document.createElement('figure')
    figureBox.classList.add('card--item-figure')

    // Criar o elemento da imagem
    cardImage = document.createElement('img')
    cardImage.src = card.image

    // Criar o conteiner das informações
    infoBox = document.createElement('div')
    infoBox.classList.add('card--info-box')
    
    // Criar conteiner tag
    itemTag = document.createElement('span')
    itemTag.classList.add('card--item-tag')
    itemTag.innerText = card.tag

    // Criar conteiner nome
    itemName = document.createElement('h3')
    itemName.classList.add('card--item-name')
    itemName.innerText = card.name

    // Criar conteiner info
    itemInfo = document.createElement('span')
    itemInfo.classList.add('card--item-info')
    itemInfo.innerText = card.info

    // Criar conteiner price
    itemPrice = document.createElement('span')
    itemPrice.classList.add('card--item-price')
    itemPrice.innerText = card.price

    // Criar conteiner add to cart
    itemAdd = document.createElement('a')
    itemAdd.classList.add('card--item-add')
    itemAdd.innerText = 'Adicionar ao carrinho'

    // Adicionar elementos ao card
    cardBox.appendChild(figureBox)
    cardBox.appendChild(infoBox)

    // Adicionar elementos ao figureBox
    figureBox.appendChild(cardImage)

    // Adicionar elementos ao infoBox
    infoBox.appendChild(itemTag)
    infoBox.appendChild(itemName)
    infoBox.appendChild(itemInfo)
    infoBox.appendChild(itemPrice)
    infoBox.appendChild(itemAdd)

    // Adicionar o card à vitrine
    vitrine = document.getElementsByClassName('vitrine')[0]
    vitrine.appendChild(cardBox)
}

for (let i = 0; i < cards.length; i++) {
    createCard(cards[i])
}