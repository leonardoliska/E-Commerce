const defaultItems = {
    // Armazena as informações dos itens base do site
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

function createShowcaseItem(item){
    // Função para criar cada item da vitrine de acordo com os itens no dicionário 'defaultItems'

    // Criar elementos do item
    const itemConteiner = document.createElement('div')
    const figureConteiner = document.createElement('figure')
    const itemImage = document.createElement('img')
    const infoConteiner = document.createElement('div')
    const itemTag = document.createElement('span')
    const itemName = document.createElement('h3')
    const itemInfo = document.createElement('span')
    const itemPrice = document.createElement('span')
    const itemAdd = document.createElement('a')

    // Adicionar classes e ID's aos elementos do item
    itemConteiner.classList.add('showcase-item')
    itemConteiner.id = `showcase-item-${item.id}`
    figureConteiner.classList.add('showcase-item-figure')
    infoConteiner.classList.add('showcase-item-info-conteiner')
    itemTag.classList.add('showcase-item-tag')
    itemName.classList.add('showcase-item-name')
    itemInfo.classList.add('showcase-item-detail')
    itemPrice.classList.add('showcase-item-price')
    itemAdd.classList.add('showcase-item-add')

    // Adicionar conteúdo em cada elemento
    itemImage.src = item.image
    itemImage.alt = `imagem d${item.tag.slice(-2, -1)} ${item.tag.slice(0, -1)} ${item.name}`.toLowerCase()
    itemTag.innerText = item.tag
    itemName.innerText = item.name
    itemInfo.innerText = item.info
    itemPrice.innerText = item.price
    itemAdd.innerText = 'Adicionar ao carrinho'

    // Adicionar elementos dentro de seus respectivos 'parents'
    itemConteiner.appendChild(figureConteiner)
    itemConteiner.appendChild(infoConteiner)
    figureConteiner.appendChild(itemImage)
    infoConteiner.appendChild(itemTag)
    infoConteiner.appendChild(itemName)
    infoConteiner.appendChild(itemInfo)
    infoConteiner.appendChild(itemPrice)
    infoConteiner.appendChild(itemAdd)

    // Adicionar eventListener para o botão de adicionar ao carrinho
    itemAdd.addEventListener('click', addToCart)

    // Adicionar o item à vitrine
    const showcaseElement = document.querySelector('#showcase')
    showcaseElement.appendChild(itemConteiner)
}

function addToCart(event) {
    // Função para adicionar o item ao carrinho

    // Seleciona o ID do item que recebeu o click
    const itemID = event.target.parentNode.parentNode.id.split('-')[2]

    // Seleciona o item do dicionário 'defaultItems' que possua o mesmo 'ID' de 'itemID'
    const itemDict = defaultItems[itemID]

    // Criar os elementos que irão dentro do item no carrinho
    const itemConteiner = document.createElement('li')
    const figureConteiner = document.createElement('figure')
    const infoConteiner = document.createElement('div')
    const itemImage = document.createElement('img')
    const itemName = document.createElement('h3')
    const itemPrice = document.createElement('span')                                  
    const removeItem = document.createElement('a')

    // Adicionar Classes nos items do carrinho
    itemConteiner.classList.add('cart-item')
    figureConteiner.classList.add('cart-item-figure')
    infoConteiner.classList.add('cart-item-info-conteiner')
    itemName.classList.add('cart-item-name')
    itemPrice.classList.add('cart-item-price')
    removeItem.classList.add('cart-item-remove')

    // Adicionar conteúdo nos elementos
    itemImage.src = itemDict.image
    itemName.innerText = itemDict.name
    itemPrice.innerText = itemDict.price
    removeItem.innerText = 'Remover produto'

    // Adicionar elementos dentro de seus respectivos 'parents'
    itemConteiner.appendChild(figureConteiner)
    itemConteiner.appendChild(infoConteiner)
    figureConteiner.appendChild(itemImage)
    infoConteiner.appendChild(itemName)
    infoConteiner.appendChild(itemPrice)
    infoConteiner.appendChild(removeItem)

    // Adicionar a função de remover produto para o botão de remover o item
    removeItem.addEventListener('click', removeCartItem)

    // Adicionar itemConteiner em carrinho
    const cartList = document.querySelector('#cart-list')
    cartList.appendChild(itemConteiner)

    // Atualiza o estado atual do carrinho
    updateCartState()
}

function removeCartItem(event) {
    // Função para remover item do carrinho 

    // Remove o item do carrinho
    const cartItem = event.target.parentNode.parentNode
    cartItem.remove()

    // Atualiza o estado do carrinho
    updateCartState()
}

function createEmptyCartElement() {
    // Função para adicionar elementos que mostram que o carrinho está vazio

    // Reseta a lista de itens
    const cart = document.querySelector('#cart-list')

    // Criar os elementos do carrinho sem itens
    const emptyCartConteiner = document.createElement('div')
    const emptyCartTitle = document.createElement('h2')
    const emptyCartAdd = document.createElement('a')

    // Adicionar texto nos elementos
    emptyCartTitle.innerText = 'Carrinho Vazio'
    emptyCartAdd.innerText = 'Adicionar itens'

    // Adicionar classes aos elementos
    emptyCartConteiner.classList.add('cart-empty-conteiner')
    emptyCartAdd.classList.add('cart-item-add')

    // Adicionar elementos em seu 'parent'
    emptyCartConteiner.appendChild(emptyCartTitle)
    emptyCartConteiner.appendChild(emptyCartAdd)

    // Adicionar conteiner de elementos no carrinho
    cart.appendChild(emptyCartConteiner)
}

function updateCartState() {
    // Função irá atualizar o estado atual do carrinho.
    // -- Se não tem itens, cria um elemento para mostrar o carrinho vazio e remove o elemento que mostra o total do carrinho
    // -- Se tem itens, remove o elemento para mostrar o carrinho vazio e adiciona o elemento que mostra o total do carrinho
    // -- Em seguida calcula o valor e quantidade do carrinho e o atualiza

    // Seleciona os elementos que serão utilizados nesta função
    const cartTotalElement = document.querySelector('#cart-total')
    const cartListElement = document.querySelector('#cart-list')

    // Salva na variável se o elemento que mostra se o carrinho está vazio está presente
    const isCartEmptyElementPresent = cartListElement.querySelectorAll('.cart-empty-conteiner').length > 0

    // Salva na variável se o carrinho tem itens ou não
    const cartHasNoItens = cartListElement.querySelectorAll('.cart-item').length == 0

    // Executa se o carrinho está SEM itens
    if (cartHasNoItens) {
        // Se o elemento que mostra o carrinho vazio não estiver presente, ele é criado
        if (isCartEmptyElementPresent == false) {
            createEmptyCartElement()
        }
        // Deixa de exibir o elemento que mostra a quantidade e preço dos itens no carrinho
        cartTotalElement.style.display = 'none'

    }
    // Executa se o carrinho está COM itens
    else {
        // Se o elemento que mostra o carrinho vazio estiver presente, ele é removido
        if (isCartEmptyElementPresent) {
            cartListElement.querySelectorAll('.cart-empty-conteiner')[0].remove()
        }
        // Exibe o elemento que mostra a quantidade e preço dos itens no carrinho
        cartTotalElement.style.display = 'flex'

        // Seleciona as variáveis de preço e quantidade para altera-las
        const quantityElement = document.getElementById('cart-quantity')
        const priceElement= document.getElementById('cart-price')

        // Receber a quantidade total de itens no carrinho
        const cartItensArray = document.getElementsByClassName('cart-item')
        const cartTotalQuantity = cartItensArray.length
        
        // Calcular o valor total do carrinho
        let cartTotalPrice = 0
        for (let i = 0; i < cartItensArray.length; i++) {                             // Iterar por todos os itens no carrinho
            let itemPrice = cartItensArray[i].childNodes[1].childNodes[1].innerText   // Acessa o elemento que contém o valor do item
            itemPrice = parseInt(itemPrice.split(' ')[1])                             // Transforma a string 'R$ 100' em número
            cartTotalPrice += itemPrice
        }
        cartTotalPrice = `R$ ${cartTotalPrice},00`

        // Atualizar os elementos de acordo com os as quantidades recebidas
        quantityElement.innerText = cartTotalQuantity
        priceElement.innerText = cartTotalPrice
    }
}

function filterByName() {
    // Esta função serve para filtrar os itens da vitrine pelo valor digitado no input de pesquisa

    // Resetar a vitrine antes de fazer a busca pelos elementos
    resetShowcase()

    // Armazena o valor da pesquisa do input
    const searchValue = document.querySelector('.search-bar-input').value

    // Seleciona todos os itens da vitrine e armazena em um array
    const showcaseItems = document.getElementsByClassName('showcase-item')

    // Itera por todos os itens da vitrine e remove os que não contenham em seu 'nome' o 'valor do input'
    for (let i = 0; i < showcaseItems.length; i++) {
        const currentItem = showcaseItems[i]
        const currentItemName = currentItem.querySelector('.showcase-item-name').innerText.toLowerCase()
        
        // Remove o item se o seu 'nome' não incluir o 'valor do input'
        if (currentItemName.includes(searchValue.toLowerCase()) == false) {
            currentItem.remove()
            // Decremento do "i" por motivo de remover um elemento do array, que altera seu tamanho
            i--
        }
    }
}

function filterByTag(selectedTag) {
    // Esta função serve para filtrar os itens da vitrine pela seleção de tag no menu do header

    // Resetar a vitrine antes de fazer a busca pelos elementos
    resetShowcase()

    // Alterar o estilo do link selecionado
    updateMenuLink(selectedTag)

    if (selectedTag != 'Todos'){
        // Seleciona todos os itens da vitrine e armazena em um array
        const showcaseItens = document.getElementsByClassName('showcase-item')

        // Itera por cada item e verifica se ele possui a tag selecionada
        for (let i = 0; i < showcaseItens.length; i++) {
            const currentItem = showcaseItens[i]
            const currentItemTag = currentItem.querySelector('.showcase-item-tag').innerText

            if (currentItemTag != selectedTag) {
                // Remove o item se ele não tiver a tag selecionada 
                currentItem.remove()
                // Decremento do "i" por motivo de remover um elemento do array, que altera seu tamanho
                i--
            }
        }
    }
}

function updateMenuLink(selectedTag) {
    // Esta função irá mudar o estilo do link do menu atualmente selecionado

    // Remove a classe 'active-link' do elemento que a possui
    const currentActiveTag = document.querySelector('.active-link')
    currentActiveTag.classList.remove('active-link')

    // Adicionar a classe 'active-link' no link clicado
    const selectedTagElement = document.querySelector(`.menu-link[value=${selectedTag}]`)
    selectedTagElement.classList.add('active-link')
}

function resetShowcase() {
    // Esta função irá deletar os itens da vitrine e cria-los novamente
    const showcase = document.querySelector('#showcase')
    showcase.innerHTML = ''
    for(const item of Object.values(defaultItems)) {
        createShowcaseItem(item)
    }
}

// Criar todos os itens padrão da vitrine
resetShowcase()

// Criar itens no carrinho pela primeira vez
updateCartState()

// Adiciona Event Listener no menu de links
const linksArray = document.getElementsByClassName('menu-link')
for (let i = 0; i < linksArray.length; i++) {
    const link = linksArray[i]
    const tag = link.innerText
    link.addEventListener('click', () => filterByTag(tag))
}

// Adiciona Event Listener no botão de pesquisa
const searchButton = document.querySelector('.search-bar-button')
searchButton.addEventListener('click', filterByName)
