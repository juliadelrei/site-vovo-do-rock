// ==============================
// CLIQUE NAS FOTOS
// ==============================

const fotos = document.querySelectorAll(".galeria img");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        if (foto.requestFullscreen) {
            foto.requestFullscreen();
        }

    });

});


// ==============================
// EFEITO NO TÍTULO
// ==============================

const titulo = document.querySelector(".hero h1");

titulo.addEventListener("mouseenter", () => {

    titulo.style.transform =
        "rotate(2deg) scale(1.03)";

});


titulo.addEventListener("mouseleave", () => {

    titulo.style.transform =
        "rotate(-2deg)";

});


// ==============================
// MENSAGEM
// ==============================

console.log("🤘 VOVÔ DO ROCK CARREGADO!")