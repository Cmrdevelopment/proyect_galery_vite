import "./Gallery.css"

const template = () => {
    return `
    <section class="gallery">
    <h2>Gallery</h2>
    <div class="photo-gallery">
    </div>
    </section>
    `
}

//! ESTO HAY QUE VER COMO SE EXPLICA y COMO SE LO APRENDE UNO
const getPhoto = () => {
const container = document.querySelector(".photo-gallery") 
fetch("https://picsum.photos/v2/list?page=2&limit=30")
.then((res) => res.json())
.then ((photos) => {
    for (const photo of photos) {
        const figure = document.createElement("figure")
        figure.innerHTML = `
        <img src=${photo.download_url} alt${photo.author}/>
        <figcaption>${photo.author}</figcaption>
        `
        container.appendChild(figure)
    }
})

.catch((err) => {
    container.innerHTML = `<h3>No se han podido recuperar las imágenes de la base de datos</h3>`
  })
}

export const printTemplete = () => {
    document.querySelector("main").innerHTML = template()
    getPhoto()
}
