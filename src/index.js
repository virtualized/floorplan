import './lib/fabric';
import * as property from './property';

console.log('hello');
console.log('123');
console.log('test');

property.addFloor();

// let scaleStepX = 5, scaleStepY = scaleStepX;
// let canvases = [];

// fabric.Object.prototype.toObject = (function (toObject) {
//   return function(properties) {
//     return fabric.util.object.extend(toObject.call(this, properties), {
//       roomProperties: {
//         id: this.roomProperties.id,
//         name: this.roomProperties.name
//       }
//     });
//   };
// })(fabric.Object.prototype.toObject);

// function createComponent(type) {
//   let element = document.createElement(type);
//   return element;
// }

// function appendBody(type) {
//   let comp = createComponent(type);
//   document.body.appendChild(comp);
//   return comp;
// }

// function append(type, container) {
//   let comp = createComponent(type);
//   container.appendChild(comp);
//   return comp;
// }

// function ensureSize() {

// };

// let containerDiv = appendBody('div');
// containerDiv.classList.add('container');
// let canvasEl = append('canvas', containerDiv);
// canvasEl.height = 500;
// canvasEl.width = 500;
// canvasEl.classList.add('canvas');
// let canvas = new fabric.Canvas(canvasEl);

// canvas.on('mouse:up', function(opt) {
//   ensureSize();
//   console.log(JSON.stringify(canvas));
// });

// var draggables = document.querySelectorAll('div.drag-me');
// console.log(draggables);
// draggables.forEach(element => {
//   element.addEventListener('dragstart', handleDragStart, false);
//   element.addEventListener('dragend', handleDragEnd, false);
// });

// containerDiv.addEventListener('dragenter', handleDragEnter, false);
// containerDiv.addEventListener('dragover', handleDragOver, false);
// containerDiv.addEventListener('dragleave', handleDragLeave, false);
// containerDiv.addEventListener('drop', handleDrop, false);

// function handleDragStart(e) {
//   draggables.forEach(element => {
//     element.classList.remove('dragging');
//   });
//   this.classList.add('dragging');
// }

// function handleDragOver(e) {
//   if (e.preventDefault)
//     e.preventDefault();

//     e.dataTransfer.dropEffect = 'copy';

//     return false;
// }

// function handleDragEnter(e) {
//   this.classList.add('over');
// }

// function handleDragLeave(e) {
//   this.classList.remove('over');
// }

// function handleDrop(e) {
//   if (e.stopPropagation)
//     e.stopPropagation();

//     console.log('Drop: ', e);

//     let element = document.querySelector('div.dragging');
//     console.log('dragging element: ', element);
//     console.log(element.offsetWidth);
//     console.log(element.offsetHeight);

//     let rect = new fabric.Rect({
//       left: e.layerX,
//       top: e.layerY,
//       fill: 'red',
//       width: element.offsetWidth,
//       height: element.offsetHeight,
//       minScaleLimit: 0.5,
//       hasRotatingPoint: false,
//       roomProperties: {
//         id: 'exampleid',
//         name: 'examplename'
//       }
//     });
//     canvas.add(rect);

//     rect.on('scaling', function() {
//       console.log('scaling');
//     });

//     return false;
// }

// function handleDragEnd(e) {
//   draggables.forEach(element => {
//     element.classList.remove('dragging');
//   });
// }