// Your code goes here
    const buttons = document.querySelectorAll('.btn');
    const aTags = document.querySelectorAll('nav-link');
    const pictureHeightlight = document.querySelectorAll(".img-content");
    const bod = document.querySelector('html');
    const head = document.querySelector('.main-navigation')

    buttons.forEach(button =>{
        button.addEventListener('click', event => {
            button.getElementsByClassName.backgroundColor = 'red'
            console.log(event)
        })
        button.addEventListener('mouseleave', () =>{
            button.style.backgroundColor = 'white'
            button.style.color = 'green'
            console.log('Lokk at you!')
        })
    });

    aTags.forEach(tag =>{
        tag.addEventListener('mouseover', ()=>{
            tag.style.color = 'blue'
        })
        tag.addEventListener('mouseleave', ()=>{
            tag.style.color = 'black'
        })
    });
    