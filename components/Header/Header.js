import "./Header.css"

const template = () => {
    return `
    <div>
        <img src="/images/logo.svg" alt="logo Galery Lorem" />
        <h1>GaleryPhotos</h1>
    </div>
    <ul>
        <li>
            <a href="#null" id="homelink">Home</a>
        </li>
        <li>
            <a href="#null" id="gallerylink">Gallery</a>
        </li>
        <li>
            <a href="#null" id="aboutlink">About</a>
        </li>
    </ul>
    `
}

export const printTemplete = () => {
    document.querySelector("Header").innerHTML = template()
}