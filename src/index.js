import 'fabric';

function createComponent(type) {
  let element = document.createElement(type);
  return element;
}

function appendBody(type) {
  let comp = createComponent(type);
  document.body.appendChild(comp);
  return comp;
}

function append(type, container) {
  let comp = createComponent(type);
  container.appendChild(comp);
  return comp;
}

function handleDragOver(e) {
  if (e.preventDefault)
    e.preventDefault();

    e.dataTransfer.dropEffect = 'copy';
}

function handleDrop(e) {
  if (e.stopPropagation)
    e.stopPropagation();
}

function ensureSize() {

};

let containerDiv = appendBody('div');
containerDiv.classList.add('container');
let canvasEl = append('canvas', containerDiv);
canvasEl.height = 500;
canvasEl.width = 500;
canvasEl.classList.add('canvas');
let canvas = new fabric.Canvas(canvasEl);

canvas.on('mouse:up', function(opt) {
  ensureSize();
  console.log(JSON.stringify(canvas));
});

canvas.on('')

let rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

canvas.add(rect);