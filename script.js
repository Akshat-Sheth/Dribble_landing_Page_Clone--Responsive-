const toggler = document.querySelector('.mobile-nav-toggle')
const hamburger = document.querySelector('.hamburger')
const togglebutton = document.querySelectorAll('.togglebutton')
const card1 = document.querySelector('.card1')
const inspiration = document.querySelector('.i');
const card2 = document.querySelector('.card2')
const workForCard = document.querySelector('.w')
const card3  = document.querySelector('.card3')
const goPro = document.querySelector('.g')
const card4 = document.querySelector('.card4')
const design = document.querySelector('.d')
const card5 = document.querySelector('.card5')
const hire = document.querySelector('.h')

hamburger.addEventListener('click', ()=>{
    toggler.classList.toggle('display-none')
})

togglebutton.forEach(ele =>{
    ele.addEventListener('click', (e)=>{
        const parent = ele.parentNode.parentNode
        parent.querySelector('.box').classList.toggle('display-none')
    })
})

inspiration.addEventListener('mouseover', ()=>{
    card1.classList.toggle('display-none')
    card2.classList.add('display-none')
    card3.classList.add('display-none')
    card4.classList.add('display-none')
    card5.classList.add('display-none')
})

card1.addEventListener('mouseenter', ()=>{
    card1.classList.remove('display-none')
})
card1.addEventListener('mouseleave', ()=>{
    card1.classList.add('display-none')
})


workForCard.addEventListener('mouseover', ()=>{
    card2.classList.toggle('display-none')
    card1.classList.add('display-none')
    card3.classList.add('display-none')
    card4.classList.add('display-none')
    card5.classList.add('display-none')
})

card2.addEventListener('mouseenter', ()=>{
    card2.classList.remove('display-none')
})
card2.addEventListener('mouseleave', ()=>{
    card2.classList.add('display-none')
})

goPro.addEventListener('mouseover', ()=>{
    card3.classList.toggle('display-none')
    card2.classList.add('display-none')
    card1.classList.add('display-none')
    card4.classList.add('display-none')
    card5.classList.add('display-none')
})

card3.addEventListener('mouseenter', ()=>{
    card3.classList.remove('display-none')
})
card3.addEventListener('mouseleave', ()=>{
    card3.classList.add('display-none')
})

design.addEventListener('mouseover', ()=>{
    card4.classList.toggle('display-none')
    card2.classList.add('display-none')
    card3.classList.add('display-none')
    card1.classList.add('display-none')
    card5.classList.add('display-none')
})

card4.addEventListener('mouseenter', ()=>{
    card4.classList.remove('display-none')
})
card4.addEventListener('mouseleave', ()=>{
    card4.classList.add('display-none')
})

hire.addEventListener('mouseover', ()=>{
    card5.classList.toggle('display-none')
    card2.classList.add('display-none')
    card3.classList.add('display-none')
    card4.classList.add('display-none')
    card1.classList.add('display-none')
})

card5.addEventListener('mouseenter', ()=>{
    card5.classList.remove('display-none')
})
card5.addEventListener('mouseleave', ()=>{
    card5.classList.add('display-none')
})


