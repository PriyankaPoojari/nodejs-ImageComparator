// requires resemblejs, canvas lib --- npm install resemblejs canvas
const resemble = require('resemblejs');
const fs = require('fs');

resemble("screenshots\\v1\\Source-Samsung.png")
  .compareTo("screenshots\\v2\\Target-Samsung.png")
  .onComplete(function (data) {
    console.log(`Mismatch Percentage: ${data.misMatchPercentage}%`);

    // Convert diff image to Buffer and save to file
    const base64Data = data.getImageDataUrl().replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync('diff-resemble.png', Buffer.from(base64Data, 'base64'));

    console.log("Differences saved to diff-resemble.png");
  });
