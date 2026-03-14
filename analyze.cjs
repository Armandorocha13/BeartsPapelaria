const Jimp = require('jimp');

async function analyze() {
  const image = await Jimp.read('C:\\Users\\mando\\.gemini\\antigravity\\brain\\a8918d4c-d4eb-4f0b-8070-eb57bc461357\\media__1773511520547.jpg');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const c = Jimp.intToRGBA(image.getPixelColor(i * 10, j * 10));
      console.log(`(${i*10}, ${j*10}): r=${c.r} g=${c.g} b=${c.b}`);
    }
  }
}
analyze();
