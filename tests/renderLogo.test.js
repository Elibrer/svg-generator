const renderLogo = require('../lib/renderLogo.js');
const { Square, Circle, Triangle } = require('../lib/shapes.js');

describe('renderLogo', () => {
    test('Should return an array with two strings', () => {
        const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
        };

        const [html, svg] = renderLogo(logoStyle);

        expect(typeof html).toBe('string');
        expect(typeof svg).toBe('string');
    });
    test('renderLogo returns correct output', () => {

        const logoStyle = {
        shape: 'Triangle',
        color: 'orange',
        text: 'ELI',
        size: [300, 200],
        textColor: 'teal'
        };
        
        const html = `<!DOCTYPE html>
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
        <div class="svg-image"><svg width="300" height="200">
    <polygon points="150,0 0,200 300,200" fill="orange" />
    <text x="150" y="161.60714285714286" class="heavy" text-anchor="middle" fill="teal" dy="0" font-size="71.42857142857143">ELI</text>
</svg></div>
        
    </div>
</body>
</html>
`;

        const svg = `<svg width="300" height="200">
    <polygon points="150,0 0,200 300,200" fill="orange" />
    <text x="150" y="161.60714285714286" class="heavy" text-anchor="middle" fill="teal" dy="0" font-size="71.42857142857143">ELI</text>
</svg>`;

        const expectedOutput = [html, svg];

        expect (renderLogo(logoStyle)).toEqual(expectedOutput);
    });
});