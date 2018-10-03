import './lib/fabric';
import dom from './domtools';
import uuidv4 from 'uuid/v4';
import './style.css';

let floors = [];

function createFloor() {
    var id = uuidv4();
    let container = dom.addComponent('div', document.body, { id: 'floor_' + id, classList: ['floor'] });
    let canvasElement = dom.addComponent('canvas', container);
    let canvas = new fabric.Canvas(canvasElement);
    return {
        id: id,
        container: container,
        canvasElement: canvasElement,
        canvas: canvas
    };
}

/**
 * Add a floor to the property.
 */
function addFloor() {
    floors.push(createFloor());
}

function showFloor(floor) {

}

function removeFloor(id) {

}

export { addFloor, showFloor, removeFloor };