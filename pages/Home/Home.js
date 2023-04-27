import "./Home.css";

const template = () => {
    return `
    <section class="home">
    <h2>Bienvenido a nuestra página de GaleryPhotos<h2>
    </section>
    `
}

export const printTemplete = () => {
    document.querySelector("main").innerHTML = template()
}