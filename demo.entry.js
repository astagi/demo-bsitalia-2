import './demo.entry.scss'
import "./globals"
import { CarouselBI, Alert, Notification, Tooltip, Sticky, InputNumber, BackToTop, loadFonts } from 'bootstrap-italia'


new CarouselBI(document.getElementById('myCarousel'))

const alert = new Alert(document.getElementsByClassName('alert')[0])

setTimeout(() => {
  alert.close()
}, 15000);

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

new InputNumber(document.getElementById('inputNumber3'))

new BackToTop(document.getElementsByClassName('back-to-top')[0])

const notification = new Notification(document.getElementById("copyToast"), {
  timeout: 2000
})
notification.show()

loadFonts();