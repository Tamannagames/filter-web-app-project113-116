function preload() {
    // You can load any resources here if needed.
}

function setup() {
    const canvas = createCanvas(400, 400); // Define the canvas size as per your requirements
    canvas.parent('canvas'); // Make canvas a child of the 'canvas' div
    centerCanvas(); // Center the canvas initially
}

function draw() {
    // Keep this function empty for now, as it will be used in the upcoming project.
}

function centerCanvas() {
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function saveFilteredImage() {
    // Define the logic to save the filtered image here.
    // You can use the canvas to get the image data and save it.
    // This function will be responsible for saving the filtered image.
}
