let sourceImg = null;
let maskImg = null;

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
  background(32, 32, 32);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let x_stop = 3000;
let y_stop = 2000;
let offset = 20;
let renderCounter = 0;

function draw() {
  angleMode(DEGREES);
  let linesToDraw = 40;

  for (let j = renderCounter; j < renderCounter + linesToDraw && j < y_stop; j++)
    for (let i = 0; i < x_stop; i++) {
      // let x = floor(random(sourceImg.width));
      // let y = floor(random(sourceImg.height));
      // let pix = sourceImg.get(x, y);
      let mask = maskImg.get(i, j);
      // fill(pix);

      if (mask[0] < 128) {
        // let pointSize = 11;
        // ellipse(x, y, pointSize, pointSize);
        pix = sourceImg.get(i, j);
      } else {
        // let pointSize = 3;
        // rect(x, y, pointSize, pointSize);
        let wave = sin(j * 3);
        let slip = map(wave, -1, 1, -offset, offset);
        pix = sourceImg.get(i + slip, j);
      }

      set(i, j, pix);
    }

  renderCounter = renderCounter + linesToDraw;
  updatePixels();

  if (renderCounter > y_stop) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}