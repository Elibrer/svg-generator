const renderLogo = require('../lib/renderLogo.js');
const { Square, Circle, Triangle } = require('../lib/shapes.js');

describe('renderLogo', () => {
    const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
    };

    test('Should return an array with two strings', () => {
        const [html, svg] = renderLogo(logoStyle);

        expect(typeof html).toBe('string');
        expect(typeof svg).toBe('string');
    });
    test('renderLogo returns correct output with logoStyle properties outlined above.', () => {
        const htmlFileCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/style.css" />

<title>SVG Display</title>

</head>
<body>
    <div class="card">
        <header class="header"><h1>Generated SVG Image:</h1></header>
        <div class="svg-image"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200">
    <polygon points="150,0 0,200 300,200" fill="orange" />
    <text x="150" y="161.60714285714286" class="heavy" text-anchor="middle" fill="teal" dy="0" font-size="71.42857142857143">ELI</text>
</svg></div>
        
    </div>
</body>
</html>
`;

        const svgFileCode = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200">
    <polygon points="150,0 0,200 300,200" fill="orange" />
    <text x="150" y="161.60714285714286" class="heavy" text-anchor="middle" fill="teal" dy="0" font-size="71.42857142857143">ELI</text>
</svg>
`;

        const expectedOutput = [htmlFileCode, svgFileCode];

        expect (renderLogo(logoStyle)).toEqual(expectedOutput);
    });
});