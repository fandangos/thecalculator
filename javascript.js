const buttons = document.querySelectorAll('.buttons');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(0.9)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

