import './demo.entry.scss'
import { CarouselBI, Alert, Tooltip, Sticky, InputNumber, BackToTop } from 'bootstrap-italia'


const carousel = new CarouselBI(document.getElementById('myCarousel'))

const alert = new Alert(document.getElementsByClassName('alert')[0])

setTimeout(() => {
    alert.close()
}, 35000);

document.querySelectorAll('.ttp').forEach(el => {
    new Tooltip(el);
});

const stickyElement = document.getElementById('sticky');
const sticky = new Sticky(stickyElement, {
  positionType: 'sticky',
  stickyClassName: 'is-sticky',
  stackable: true,
  paddingTop: 0,
});

const inputNumber = new InputNumber(document.getElementById('inputNumber3'))

const backToTop = new BackToTop(document.getElementsByClassName('back-to-top')[0])
