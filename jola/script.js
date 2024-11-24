const produtoItemNome = document.querySelectorAll('.produto-item h2')
const produtoItemPreco = document.querySelectorAll('.produto-item p')
const produtoItemBtn = document.querySelectorAll('.produto-item a')
const produtoItem = document.querySelectorAll('.produto-item')

for (let i = 0; i < 4; i++) {

    let produtoExiste = false

    produtoItem[i].addEventListener('click', (sapato)=>{
        sapato.preventDefault();

        let carrinho = obter();



        carrinho.forEach( p => {
            
            if (p.nome == produtoItemNome[i]) {
                p.quantidade++
                carrinho.push(p);
                produtoExiste = true
            }

        });

        if (produtoExiste == false) {

            let produto = {
                "nome": produtoItemNome[i].textContent,
                "preco": produtoItemPreco[i].textContent,
                "quantidade": produtoItemBtn[i]
            }
    
            carrinho.push(produto);
            
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }
        

    });
    
}


function obter(){
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    if( carrinho == null || carrinho.length < 1){
        carrinho = [];
    }

    return carrinho;
}