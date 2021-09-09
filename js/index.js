// Your code goes here
    const body = document.querySelector('body');

    const header = document.querySelector('.main-navigation');
    header.addEventListener('mouseover', function(){
        header.style.backgroundColor = makeRanColor();
    });
    const makeRanColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return 'rgb(${r}, ${g}, ${b})';
    }
     
    