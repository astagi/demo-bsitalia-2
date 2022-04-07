import './demo.entry.scss'
import { CarouselBI, BackToTop, fontsLoader, loadPlugin } from './bootstrap-italia'


loadPlugin(fontsLoader)
// loadPlugin(CarouselBI)
loadPlugin(BackToTop)

const carousel = new CarouselBI(document.getElementById('myCarousel'))