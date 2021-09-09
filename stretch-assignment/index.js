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

    pictureHeightlight.forEach(pic =>{
        pic.addEventListener('dbclick', ()=>{
            pic.style.borderWidth = '5px'
            pic.style.borderStyle = 'solid'
            pic.style.borderColor = 'blue'
        })
        pic.addEventListener('mouseleave', ()=>{
            pic.style.borderWidth = '0px'
        })
    });

    window.addEventListener('keydown', ()=>{
        alert('Click the button on the bottom of the page to schedule a time to meet!!')
    });
    