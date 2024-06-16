import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
    onOpen: function(currentElement) {
        console.log('Opened:', currentElement);
    },
    onClose: function(currentElement) {
        console.log('Closed:', currentElement);
    }
});
