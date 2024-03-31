document.addEventListener('DOMContentLoaded',function(){
    const  button = document.querySelectorAll('[data-tab-button]')
    const faq = document.querySelectorAll('[data-faq-question]')


    const herosection = document.querySelector('.hero')
    const alturahero = herosection.clientHeight

    window.addEventListener('scroll',function(){
        const positionAtual = window.scrollY

        if (positionAtual < alturahero){
            ocultaitem()
        }else {
            mostraitem()
        }
    })



    for (let i = 0 ; i < button.length ; i++){
        button[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAba()
            aba.classList.add('show__list--is-active')
            botaoremove()
            botao.target.classList.add('show__tabs__button--is-active')
        })
    }


    for (let i = 0 ; i < faq.length ; i++){
        faq[i].addEventListener('click', abrefaq)
    }
})


function ocultaitem (){
    const header = document.querySelector('.header__container')
    header.classList.add('header__container--is-hiddem')
}

function mostraitem (){
    const header = document.querySelector('.header__container')
    header.classList.remove('header__container--is-hiddem')
}




function abrefaq(elemento) {
   const classabre  = 'faq__questions__item--is-open'
   const elementoPai = elemento.target.parentNode

   elementoPai.classList.toggle(classabre)
}



function botaoremove() {
    const  button = document.querySelectorAll('[data-tab-button]')

    for (let i = 0 ; i < button.length ; i++){
        button[i].classList.remove('show__tabs__button--is-active')
    }

} 


function escondeAba(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i  = 0 ; i < tabsContainer.length;i++ ){
        tabsContainer[i].classList.remove('show__list--is-active')
    }
}