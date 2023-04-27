import './style.css'

import { printTemplete as Header } from './components/Header/Header'
import { printTemplete as Home } from './pages/Home/Home'
import { printTemplete as Gallery } from './pages/Gallery/Gallery'
import { printTemplete as About} from './pages/Gallery/About/About'
import { printTemplete as Footer } from './components/Footer/Footer'
import { linkpages } from './utils/linkpages'

Header()
Footer()
Home()


linkpages("#homelink", Home);
linkpages("#gallerylink", Gallery);
linkpages("#aboutlink", About) 



// document.querySelector("#homelink").addEventListener("click", () => {
//     Home()
// })

// document.querySelector("#gallerylink").addEventListener("click", () => {
//     Gallery()
// })

// document.querySelector("#aboutlink").addEventListener("click", () => {
//     About()
// })