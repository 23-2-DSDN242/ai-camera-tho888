let sourceImg = null;
let maskImg = null;
let renderCounter = 0;
let curLayer = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(3000, 2000);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(246);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let x_stop = 3000;
let y_stop = 2000;
let offset = 17;

function draw() {

  if (curLayer == 0) {

    angleMode(DEGREES);
    let linesToDraw = 100;

    for (let j = renderCounter; j < renderCounter + linesToDraw && j < y_stop; j++)
      for (let i = 0; i < x_stop; i++) {
        let mask = maskImg.get(i, j);

        if (mask[0] < 128) {
          pix = sourceImg.get(i, j);
        } else {
          let wave = sin(j * 3);
          let slip = map(wave, -1, 1, -offset, offset);
          pix = sourceImg.get(i + slip, j);
        }

        set(i, j, pix);
      }

    renderCounter = renderCounter + linesToDraw;
    updatePixels();

  } else {

    for (let i = 0; i < 20; i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);

      if (mask[0] < 128) {
        let pointSize = 39;
        ellipse(x, y, pointSize, pointSize);
      }
    }
    renderCounter = renderCounter + 1;
  }

  if (curLayer == 0 && renderCounter > 2000) {
    curLayer = 1;
    renderCounter = 0;
  } else if (curLayer == 1 && renderCounter > 500) {
    console.log("Done!");
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}