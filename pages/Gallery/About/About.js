import "./About.css"

const template = () => {
    return `
    <section class="about">
    <h2>About</h2>
    <p>Está aplicación consulta imagenes de la api Picsum y muestra 30 imagenes de diversos artistas</p>
    </section>
    `
}


export const printTemplete = () => {
    document.querySelector("main").innerHTML = template()
}