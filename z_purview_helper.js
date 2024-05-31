// note: this file is poorly named - it can generally be ignored.

// helper functions below for supporting blocks/purview

function saveArtworkImage(filename) {
  var offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = 3000;
  offscreenCanvas.height = 2000;
  var context = offscreenCanvas.getContext('2d');
  // background is flat white
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 3000, 2000);
  context.drawImage(this.canvas, 0, 0, 3000, 2000);
  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageData = offscreenCanvas.toDataURL('image/png');
  imageData = imageData.replace('image/png', downloadMime);
  p5.prototype.downloadFile(imageData, filename, 'png');
}

function saveBlocksImages() {
  var offscreenCanvas = document.createElement('canvas');
/*
  offscreenCanvas.width = 704;
  offscreenCanvas.height = 1252;
  var context = offscreenCanvas.getContext('2d');
  // background is flat white
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 704, 1252);
  context.drawImage(this.canvas, 0, 0, 704, 1252);
  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageData = offscreenCanvas.toDataURL('image/png');
  imageData = imageData.replace('image/png', downloadMime);
  p5.prototype.downloadFile(imageData, 'artwork.png', 'png');
*/

  var pd = this._pixelDensity;
  // console.log("PD", pd)

  // generate 960x640 preview.jpg 1/4 of the way down
  offscreenCanvas.width = 960;
  offscreenCanvas.height = 640;

  // background is flat white  
  context = offscreenCanvas.getContext('2d');
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 960, 640);

  // now scaledown
  var crop_width = pd*3000;
  var crop_height = pd*2000;
  context.drawImage(this.canvas, 0, 0, crop_width, crop_height, 0, 0, 960, 540);

  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageDataPreview = offscreenCanvas.toDataURL('image/jpeg');
  imageDataPreview = imageDataPreview.replace('image/jpeg', downloadMime);
  // call this function after 1 second
  setTimeout(function(){
    p5.prototype.downloadFile(imageDataPreview, 'preview.jpg', 'jpg');
  }, 1000);
}
