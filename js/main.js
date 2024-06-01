const heart = document.querySelectorAll('#icon');

heart.forEach(function (heart) {
    heart.onclick = () => {
        heart.classList.toggle('filled');
    }
})