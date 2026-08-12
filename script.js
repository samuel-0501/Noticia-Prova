document.addEventListener('DOMContentLoaded', () => {
    const btnCurtir = document.getElementById('btn-curtir');
    const contador = document.getElementById('contador-likes');
    let likes = 0;

    btnCurtir.addEventListener('click', () => {
        likes++;
        contador.textContent = likes;
        btnCurtir.style.backgroundColor = '#2e7d32';
    });
});
