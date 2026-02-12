function iniciarExperiencia() {
    document.querySelector(".intro").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    document.getElementById("musica").play();
}

function toggleSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => {
        if (sec.id === id) {
            sec.style.display = sec.style.display === "block" ? "none" : "block";
        } else {
            sec.style.display = "none";
        }
    });
}

function mostrarMensaje() {
    document.getElementById("mensaje").style.display = "block";
}
