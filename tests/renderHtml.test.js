const renderHtml = require('../lib/renderHtml.js');

describe('Render HTML', () => {
    test('Should return a string', () => {
        expect(typeof renderHtml()).toBe('string');
    })
    test('Should return a string that contains the svg code', () => {
        const svg = '<svg></svg>';
        expect(renderHtml(svg)).toContain(svg);
    })
    test('Should return a string that contains the HTML code', () => {
        const renderedLogo = '<svg></svg>';

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
        <div class="svg-image">${renderedLogo}</div>
        
    </div>
</body>
</html>
`;
        expect(renderHtml(renderedLogo)).toBe(html);
    });
});
