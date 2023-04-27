import "./Footer.css"

const templete = () => {
    return `
    <p>by Carlos Martín 2023 - Vite Proyect - Neoland</p>
    `
}


export const printTemplete = () => {
    document.querySelector("Footer").innerHTML = templete()
}